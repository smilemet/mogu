import { db, sequelize } from "../../models/index.js";
import { Op } from "sequelize";

import RegexHelper from "../../utils/RegexHelper.js";

import { createHashedPassword } from "../../utils/Encrypto.js";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

const { user, product, rate } = db;

/**
 * user 목록 가져오기
 * @method GET /api/user
 */
export const getUsers = async (req, res) => {
  try {
    const allUsers = await user.findAll({
      attributes: [
        "id",
        "email",
        "nickname",
        "user_icon",
        "platform",
        "banned",
        "auth",
        "withdraw",
        "createdAt",
        "updatedAt",
      ],
    });

    res.json({
      sucess: true,
      allUsers,
    });
  } catch (err) {
    res.status().json({
      sucess: false,
      message: err.message,
    });
  }
};

/**
 * body에 정보를 받아 새로운 user를 생성
 * @method POST /api/user
 */
export const createUser = async (req, res) => {
  const { email, password, nickname } = req.body;

  try {
    RegexHelper.value(password, "비밀번호를 입력하세요.");
    RegexHelper.password(password, "비밀번호는 영문자, 특수문자 및 숫자가 포함된 8~16자여야 해요.");
    RegexHelper.value(nickname, "닉네임을 입력해주세요.");
    RegexHelper.maxLength(nickname, 15, "닉네임은 15글자 이하로 입력해주세요.");
    RegexHelper.value(platform, "플랫폼 입력 오류입니다.");

    let signedUser = null;
    signedUser = await user.findOne({ where: { email } });

    if (signedUser) throw new Error("이미 등록된 email 입니다.");

    const { salt, hashedPassword } = createHashedPassword(password);

    const newUser = await user.create({
      email,
      password: hashedPassword,
      salt,
      nickname,
      platform: "local",
    });

    res.json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    res.status(403).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * id가 {id}인 user 한 명 가져오기 (본인 제외)
 * @method GET /api/user/:id
 */
export const getUser = async (req, res) => {
  const id = req.params.id;

  if (!id) throw new Error("아이디가 없습니다.");

  const ratedAvg = `(SELECT AVG(total) FROM rate WHERE receiver_id=id)`;
  const ratedCount = `(SELECT COUNT(*) FROM rate WHERE receiver_id=id)`;

  try {
    const userInfo = await user.findOne({
      where: { id },
      attributes: [
        "nickname",
        "user_icon",
        "banned",
        [sequelize.literal(ratedAvg), "rated_score"],
        [sequelize.literal(ratedCount), "rated_count"],
      ],
    });

    if (userInfo === null) throw new Error("존재하지 않는 유저입니다.");

    if (userInfo.banned) throw new Error("정지된 유저입니다.");

    res.json({
      sucess: true,
      userInfo,
    });
  } catch (err) {
    res.status(401).json({
      sucess: false,
      message: err.message,
    });
  }
};

/**
 * body에 정보를 받아 id가 {id}인 user를 수정하기
 * @method PATCH /api/user/:id
 */
export const updateUser = async (req, res) => {
  const { user_id, password } = req.body;

  try {
    res.json({
      sucess: true,
    });
  } catch (err) {
    res.status().json({
      sucess: false,
      message: err.message,
    });
  }
};

/**
 * id가 {id}인 user를 삭제하기
 * @method DELETE /api/user/:id
 */
export const removeUser = async (req, res) => {
  const { user_id, password } = req.body;

  try {
    res.json({
      sucess: true,
    });
  } catch (err) {
    res.status().json({
      sucess: false,
      message: err.message,
    });
  }
};
