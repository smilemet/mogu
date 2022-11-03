import { db } from "../../models/index.js";
import { Op } from "sequelize";

import { createSalt, createHashedPassword } from "../../utils/Encrypto.js";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

/**
 * user 목록 가져오기
 * header에 x-access-token 필요
 * @method GET /api/user
 */
const getUsers = async((req, res) => {
  const { user_id, password } = req.body;
});

/**
 * id가 {id}인 user 한 명 가져오기
 * header에 x-access-token 필요
 * @method GET /api/user/:id
 */
const getUser = async((req, res) => {
  const { user_id, password } = req.body;
});

/**
 * body에 정보를 받아 새로운 user를 생성
 * @method POST /api/user/:id
 */
const createUser = async((req, res) => {
  const { email, password } = req.body;
});

/**
 * body에 정보를 받아 id가 {id}인 user를 수정하기
 * @method PATCH /api/user/:id
 */
const updateUser = async((req, res) => {
  const { user_id, password } = req.body;
});

/**
 * id가 {id}인 user를 삭제하기
 * @method DELETE /api/user/:id
 */
const removeUser = async((req, res) => {
  const { user_id, password } = req.body;
});
