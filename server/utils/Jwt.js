import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

const secret = process.env.JWT_SECRET;

/**
 * 로그인에 성공하면 유저 정보를 담은 토큰 발급
 * @param user 유저 데이터
 */
export const generateToken = (user) => {
  const { id, email, nickname, user_icon, platform } = user;

  return new Promise((resolve, reject) => {
    jwt.sign(
      { id, email, nickname, user_icon, platform },
      secret,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};

/**
 * 새 토큰을 발급받을 수 있는 리프레시 토큰 발급
 * @param user 유저 데이터
 */
export const generateRefreshToken = (user) => {
  const { email } = user;

  return new Promise((resolve, reject) => {
    jwt.sign({ email }, secret, { expiresIn: "7h" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
