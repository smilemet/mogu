import multer from "multer";

import dotenv from "dotenv";
import { join, resolve, extname } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, process.env.UPLOAD_PATH),
  filename: (req, file, cb) => {
    let newFileName = new Date().valueOf() + extname(file.originalname);
    cb(null, newFileName);
  },
});

// 클라이언트에서 넘길 때 헤더에 multipart/form-data 명시! (form 태그에 encType 명시)
const uploadMiddleware = multer({
  storage,
  limits: { fileSize: 3 * 1024 * 1024 },
});

export default uploadMiddleware;
