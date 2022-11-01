import express from "express";
import { getProducts, getProduct } from "./product.ctrl.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

export default router;
