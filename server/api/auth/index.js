import express from "express";
import {} from "./auth.ctrl.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("auth");
});

router.get("/login", (req, res) => {
  res.json("hello");
});

router.get("/join");

router.get("/login");

router.get("/login");

// router.post("login", login);

export default router;
