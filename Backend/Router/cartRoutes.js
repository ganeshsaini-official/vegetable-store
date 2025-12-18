import express from "express";

import {
  addToCart,
  getUserCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "../Controller/cartController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 User must be logged in
router.post("/add", protect, addToCart);
router.get("/", protect, getUserCart);
router.put("/update/:id", protect, updateCartItem);
router.delete("/remove/:id", protect, removeCartItem);
router.delete("/clear", protect, clearCart);



export default router;
