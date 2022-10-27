import jwt from "jsonwebtoken";

/**
 * JWT 유효성을 검사하고, 완료되면 유저 정보를 디코딩한다.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const authMiddleware = (req, res, next) => {
  const token = req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(401);
  }
};
