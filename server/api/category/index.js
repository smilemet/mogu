import express from "express";

import { db } from "../../models/index.js";

const router = express.Router();
const { category } = db;

router.get("/", async (req, res) => {
  let result = null;

  try {
    result = await category.findAll({
      order: ["name", "ASC"],
    });

    res.send(result);
  } catch (err) {
    console.error(err);
  }
});

export default router;
