// routes/orderRoutes.js
import express from "express";
import {
  placeOrder,
  getUserOrders,
  getSingleOrder,
  getAllOrders,
  updateOrderStatus
} from "../controllers/orderController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

// ⭐ User Routes
router.post("/place", authMiddleware, placeOrder);
router.get("/my-orders", authMiddleware, getUserOrders);
router.get("/:id", authMiddleware, getSingleOrder);

// ⭐ Admin Routes
router.get("/", authMiddleware, adminMiddleware, getAllOrders);
router.put("/status/:id", authMiddleware, adminMiddleware, updateOrderStatus);

export default router;
