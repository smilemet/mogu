import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });
const secret = process.env.SECRET_KEY;

/**
 * JWT 유효성을 검사하고, 완료되면 유저 정보를 디코딩한다.
 */
const authMiddleware = (req, res, next) => {
  const token = req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "토큰이 없습니다.",
    });
  }

  try {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) throw new Error("유효하지 않은 토큰입니다.");

      req.decoded = decoded;
      req.token = token;
      next();
    });
  } catch (err) {
    resolve.status(401).json({
      sucess: false,
      message: err.message,
    });
  }
};

export default authMiddleware;
