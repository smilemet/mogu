import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("auth");
});

router.post("login", login);

export default router;
