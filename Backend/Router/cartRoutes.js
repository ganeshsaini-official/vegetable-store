// routes/cartRoutes.js
import express from "express";
import {
  addToCart,
  getUserCart,
  updateCartItem,
  removeCartItem,
  clearCart
} from "../controllers/cartController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 User must be logged in
router.post("/add", authMiddleware, addToCart);
router.get("/", authMiddleware, getUserCart);
router.put("/update/:id", authMiddleware, updateCartItem);
router.delete("/remove/:id", authMiddleware, removeCartItem);
router.delete("/clear", authMiddleware, clearCart);

export default router;
