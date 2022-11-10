import express from "express";
import { login, logout, verifyToken, tokenRefresh, sendEmail, verifyEmail } from "./auth.ctrl.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => res.json("auth"));

router.post("/login", login);

router.use("/logout", authMiddleware);
router.post("/logout", logout);

router.use("/verify", authMiddleware);
router.get("/verify", verifyToken);

router.use("/refresh", authMiddleware);
router.get("/refresh", tokenRefresh);

router.post("/email/send", sendEmail);
router.get("/email/verify/:code", verifyEmail);

export default router;
