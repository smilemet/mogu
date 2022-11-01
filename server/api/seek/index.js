import express from "express";
import { getSeeks, getSeek } from "./seek.ctrl.js";

const router = express.Router();

router.get("/", getSeeks);

router.get("/:id", getSeek);

export default router;
