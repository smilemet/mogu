import express from "express";
import auth from "./auth/index.js";

const api = express.Router();

api.get("/", (req, res) => {
  res.json("api");
});

api.use("/auth", auth);
