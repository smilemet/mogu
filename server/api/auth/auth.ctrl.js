import { db } from "../../models/index.js";
import { Op } from "sequelize";

import { createSalt, createHashedPassword } from "../../utils/Encrypto.js";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

/**
 * email, password로 API에 로그인하고 token 리턴하기
 * @method POST /api/auth/login
 */
const login = async (req, res) => {
  const { user_id, password } = req.body;
};

/**
 * token을 받아 token의 주인인 user 리턴하기
 * header에 x-access-token 필요
 * @method GET /api/auth/me
 */
const me = async (req, res) => {
  const { user_id, password } = req.body;
};

/**
 * 기존의 token을 이용하여 새로운 token 발급하기
 * header에 x-access-token 필요
 * @method GET /api/auth/login
 */
const refresh = async (req, res) => {
  const { user_id, password } = req.body;
};
