import express from "express";
import { getProducts, addProduct, getProduct, getQna } from "./product.ctrl.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);
router.get("/:id/qna", getQna);

router.get;

export default router;
