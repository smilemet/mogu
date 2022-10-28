import express from "express";
import { getSearchResult } from "./search.ctrl.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("search");
});

router.get("/product", getSearchResult);
router.get("/seek", getSearchResult);

export default router;
