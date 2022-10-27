import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import path from "path";

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "../config.env") });

const secret = process.env.SECRET;

const authMiddleware = (req, res, next) => {};
