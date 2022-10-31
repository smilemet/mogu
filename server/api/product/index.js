import express from "express";
import { getProduct } from "./product.ctrl.js";

const router = express.Router();

router.get("/", getProduct);

export default router;
