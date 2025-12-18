// routes/orderRoutes.js
import express from "express";

import { placeOrder,
   getUserOrders,
  getSingleOrder,
  getAllOrders,
  updateOrderStatus
 } from "../Controller/orderController.js";

import { protect ,admin} from "../middleware/authMiddleware.js";

const router = express.Router();

// ⭐ User Routes
router.post("/place", protect, placeOrder);
router.get("/my-orders", protect, getUserOrders);
router.get("/:id", protect, getSingleOrder);

// ⭐ Admin Routes
router.get("/", protect, admin, getAllOrders);
router.put("/status/:id", protect, admin, updateOrderStatus);

export default router;
