import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
  getUserProduct,
  getUserSeek,
  getUserReview,
} from "./user.ctrl.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", removeUser);

router.get("/:id/product", getUserProduct);
router.get("/:id/seek", getUserSeek);
router.get("/:id/review", getUserReview);

router.get("/me");

export default router;
