import express from "express";
import { uploadUserIcon } from "./upload.ctrl.js";

import authMiddleware from "../../middlewares/authMiddleware.js";
import uploadImage from "../../middlewares/uploadMiddleware.js";

const router = express.Router();

// router.use("/", authMiddleware);
router.get("/", (req, res) => res.json("upload"));

router.post("/icon", uploadImage.single("img"), uploadUserIcon);
// router.post("/seek", uploadImage.single("img"));
// router.post("/product", uploadImage.single("img"));

export default router;
