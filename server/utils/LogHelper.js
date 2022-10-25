import winston from "winston";
import winstionDaily from "winston-daily-rotate-file";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

const { combine, timestamp, printf, splat, simple } = winston.format;

/**
 * @description 서버 로그 기록
 */
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss SSS",
    }),
    printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level}] : ${message}`;
    }),
    splat()
  ),
  transports: [
    // 일반 로그 규칙
    new winstionDaily({
      name: "log",
      level: process.env.LOG_LEVEL,
      datePattern: "YYMMDD",
      dirname: process.env.LOG_PATH,
      filename: "log_%DATE%.log",
      maxSize: 50000000,
      maxFiles: 50,
      zippedArchive: true,
    }),
    // 에러 로그 규칙
    new winstionDaily({
      name: "error",
      level: "error",
      datePattern: "YYMMDD",
      dirname: process.env.ERROR_PATH,
      filename: "error_%DATE%.log",
      maxSize: 50000000,
      maxFiles: 50,
      zippedArchive: true,
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      prettyPrint: true,
      showLevel: true,
      level: process.env.LOG_LEVEL,
      format: combine(
        winston.format.colorize(),
        printf(({ level, message, timestamp }) => {
          return `${timestamp} [${level}] : ${message}`;
        })
      ),
    })
  );
}

export default logger;
