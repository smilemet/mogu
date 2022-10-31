import express from "express";
import { getCategory, addCategory } from "./category.ctrl.js";

const router = express.Router();

router.get("/", getCategory);
router.post("/", addCategory);

export default router;
