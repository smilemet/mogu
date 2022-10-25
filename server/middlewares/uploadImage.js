import multer from "multer";

import dotenv from "dotenv";
import path from "path";

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "../config.env") });

// 클라이언트에서 넘길 때 헤더에 multipart/form-data 명시!
const uploadImage = multer({
  dest: process.env.UPLOAD_PATH,
  limits: { fileSize: 3 * 1024 * 1024 },
});

export default uploadImage;
