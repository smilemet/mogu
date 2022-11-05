import { promisify } from "util";
import crypto from "crypto";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

const randomBytesPromise = promisify(crypto.randomBytes);
const pbkdf2Promise = promisify(crypto.pbkdf2);

const length = parseInt(process.env.PW_SALT_LENGTH);
const iterations = parseInt(process.env.PW_ITERATIONS);
const keylen = parseInt(process.env.PW_KEYLEN);
const algorithm = process.env.PW_HASH_ALG;

/**
 * 랜덤 문자열로 소금을 만든다.
 * @return 만들어진 소금 문자열
 */
const createSalt = async () => {
  const salt = await randomBytesPromise(length);
  return salt.toString("base64");
};

/**
 * 패스워드를 암호화한다.
 * @param password  해시할 패스워드
 * @param prevSalt  기존 소금이 있다면 첨부(로그인용)
 * @return          해시된 패스워드, 소금
 */
const createHashedPassword = async (password, prevSalt = null) => {
  let salt = null;

  if (prevSalt) salt = prevSalt;
  else salt = await createSalt();

  const key = await pbkdf2Promise(password, salt, iterations, keylen, algorithm);
  const hashedPassword = key.toString("base64");

  return { hashedPassword, salt };
};

export { createSalt, createHashedPassword };
