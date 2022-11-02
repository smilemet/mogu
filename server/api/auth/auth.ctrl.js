import { db } from "../../models/index.js";
import { generateToken, generateRefreshToken } from "../../utils/Jwt.js";

import { createSalt, createHashedPassword } from "../../utils/Encrypto.js";

import dotenv from "dotenv";
import { join, resolve } from "path";

const { user } = db;
dotenv.config({ path: join(resolve(), "../config.env") });

/**
 * email, password로 API에 로그인하고 token 리턴하기
 * @method POST /api/auth/login
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let signedUser = null;
    signedUser = await user.findOne({ where: { email } });

    if (
      signedUser === null ||
      signedUser.platform !== "local" ||
      signedUser.password !== encrypt(password)
    )
      throw new Error("아이디와 비밀번호를 확인해주세요.");

    // 로그인 성공
    const accessToken = await generateToken(signedUser);
    const refreshToken = await generateRefreshToken(signedUser);

    await user.update({ refresh_token: refreshToken }, { where: { id: signedUser.id } });

    res.json({
      sucess: true,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(403).json({
      sucess: false,
      message: `${err}`,
    });
  }
};

/**
 * 토큰의 유효성 검사하기
 * header에 x-access-token 필요
 * @method GET /api/auth/verify
 */
export const tokenVerify = async (req, res, next) => {
  const { id } = req.decoded;

  let signedUser = null;
  try {
    signedUser = await user.findOne({ where: { email } });
  } catch (err) {
    next(err);
  }

  res.json({
    sucess: true,
    signedUser,
  });
};

/**
 * 기존의 token을 이용하여 새로운 token 발급하기
 * header에 x-access-token 필요
 * @method GET /api/auth/refresh
 */
export const tokenRefresh = async (req, res) => {
  const { email } = req.decoded;

  try {
    let signedUser = null;
    signedUser = await user.findOne({ where: { email } });

    if (signedUser !== null && signedUser.refresh_token === req.token) {
      // 리프레시 토큰 인증 성공
      const accessToken = await generateToken(signedUser);

      res.json({
        sucess: true,
        accessToken,
      });
    } else {
      // 리프레시 토큰 인증 실패
      throw new Error("유효하지 않은 토큰입니다.");
    }
  } catch (err) {
    res.status(401).json({ sucess: false, message: err });
  }
};

/**
 * token을 받아 token의 주인인 user 리턴하기
 * header에 x-access-token 필요
 * @method GET /api/auth/me
 */
export const me = async (req, res) => {
  const { user_id, password } = req.body;
};
