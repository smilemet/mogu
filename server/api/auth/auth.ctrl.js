import { db } from "../../models/index.js";
import { Op } from "sequelize";

import { createSalt, createHashedPassword } from "../../utils/Encrypto.js";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

// const login = async((req, res) => {
//   const { user_id, password } = req.body;
// });
