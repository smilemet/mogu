import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { sequelize } from "./models/index.js";
import setDotenv from "./util/setDotenv.js";

const app = express();

app.use(
  cors({
    origin: [process.env.LOCAL, precess.env.CLIENT_URL],
    credentials: true,
    // exposedHeaders : ['total-count']
  })
);
