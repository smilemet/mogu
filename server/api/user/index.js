import express from "express";
import { getUsers, getUser, createUser } from "./user.ctrl.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

router.get("/:id", getUser);
router.patch("/:id");
router.delete("/:id");

router.get("/:id/product"); //특정 유저의 공구글 가져오기
router.get("/:id/seek"); //특정 유저의 총대글 가져오기
router.get("/:id/review"); //특정 유저의 거래 후기글 가져오기

router.get("/me");

export default router;
