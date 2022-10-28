import express from "express";

import { db } from "../../models/index.js";
import uploadImage from "../../middlewares/uploadImage.js";

const router = express.Router();
const { user } = db;

router.get("/", (req, res) => {
  res.json("image");
});

router.delete("/");

// 유저 이미지 업로드
router.post("/user", uploadImage.single("img"), (req, res, next) => {
  // 이미지 업로드
});

// seek 이미지 업로드
router.post("/user", uploadImage.single("img"), (req, res, next) => {
  // 이미지 업로드
});

// product 이미지 업로드
router.post("/user", uploadImage.single("img"), (req, res, next) => {
  // 이미지 업로드
  // 이미지 여러개가 동시에 업로드될 때, 가장 앞에 있는 이미지를 썸네일로 하여 product 테이블에 반영
});

export default router;
