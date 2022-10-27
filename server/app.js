import express from "express";
import cors from "cors";
import useragent from "express-useragent";
import methodOverride from "method-override";
import cookieParser from "cookie-parser";

import { sequelize } from "./models/index.js";
import { myip, urlFormat } from "./utils/UtilHelper.js";
import logger from "./utils/LogHelper.js";
import BadRequestException from "./utils/BadRequestException.js";

import dotenv from "dotenv";
import path from "path";

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "../config.env") });

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json()); // body로 json 데이터를 받아올 때 필수!

app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.use(methodOverride("_method"));

app.use(cookieParser());
app.use(express.static("uploads")); //정적 파일 폴더

app.use(
  cors({
    origin: [process.env.LOCAL, process.env.CLIENT_URL],
    credentials: true,
    // exposedHeaders : ['total-count']
  })
);

/** 클라이언트 접속 시 초기화 */
app.use(useragent.express());
app.use((req, res, next) => {
  logger.debug("클라이언트가 접속했습니다.");

  const beginTime = Date.now();
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  logger.debug(
    `[client] ${ip} / ${req.useragent.os} / ${req.useragent.browser} (${req.useragent.version}) / ${req.useragent.platform}`
  );

  const current_url = urlFormat({
    protocol: req.protocol, // http://
    host: req.get("host"), // 172.16.141.1~
    port: req.port, // 8080
    pathname: req.originalUrl, // /index.html
  });

  logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

  res.on("finish", () => {
    const endTime = Date.now();
    const time = endTime - beginTime;
    logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
    logger.debug(`---------------------------------------------------`);
  });

  next();
});

sequelize
  .sync({ force: false }) //true면 서버 실행마다 테이블 재생성
  .then(() => {
    console.log("데이터베이스 연결 성공!!");
  })
  .catch((err) => {
    console.error(err);
  });

// 에러 핸들링
app.use((err, req, res, next) => {
  if (err instanceof BadRequestException) {
    res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
});

app.use((req, res, next) => {
  res.status(404).json("Not Found");
});

app.get("/", (req, res) => {
  res.json("Hello world!");
});

/** 서버 가동 */
const ip = myip();
app.listen(process.env.PORT, () => {
  logger.debug("------------------------------------");
  logger.debug("|       Start Express Server       |");
  logger.debug("------------------------------------");

  ip.forEach((v, i) => {
    logger.debug(`server address => http://${v}:${process.env.PORT}`);
  });

  logger.debug(app.get("port") + "번 포트에서 대기 중");

  logger.debug("------------------------------------");
});
