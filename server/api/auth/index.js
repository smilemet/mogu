import express from "express";
import { login, tokenVerify, tokenRefresh, sendEmail } from "./auth.ctrl.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => res.json("auth"));

router.post("/login", login);

router.use("/verify", authMiddleware);
router.get("/verify", tokenVerify);

router.use("/refresh", authMiddleware);
router.get("/refresh", tokenRefresh);

router.post("/email/send", sendEmail);

export default router;
