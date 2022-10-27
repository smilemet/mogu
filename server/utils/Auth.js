import { promisify } from "util";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

const secretKey = process.env.SECRET_KEY;
const issuer = process.env.JWT_ISSUER;

/**
 * 토큰 발급 (비동기)
 * @param {any} payload
 */
const generateToken = (user) => {
  const { id, user_id, nickname } = user;
  const options = { expiresIn: "1h", issuer: issuer };

  jwt.sign({ id, user_id, nickname }, secretKey, options, (err, token) => {
    if (err) reject(err);
    else resolve(token);
  });
};

/**
 * 리프레쉬 토큰 발급 (비동기)
 * @param {object} payload
 */
const generateRefreshToken = (user) => {
  const options = { expiresIn: "7d", issuer: issuer };
  return promisify(
    jwt.sign(user.id, secretKey, options, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    })
  );
};

const generateTokenP = promisify(generateToken);
const generateRefreshTokenP = promisify(generateRefreshToken);

export { generateTokenP, generateRefreshTokenP };
