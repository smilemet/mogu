import express from "express";
import {} from "./auth.ctrl.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("auth");
});

// router.post("login", login);

export default router;
