import multer from "multer";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

// 클라이언트에서 넘길 때 헤더에 multipart/form-data 명시! (form 태그에 encType 명시)
const uploadImage = multer({
  dest: process.env.UPLOAD_PATH, // 저장 위치
  limits: { fileSize: 3 * 1024 * 1024 },
});

export default uploadImage;
