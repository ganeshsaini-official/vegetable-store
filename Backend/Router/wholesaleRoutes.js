import express from "express";
import {
  createWholesaleRequest,
  getAllWholesaleRequests,
  updateWholesaleQuote,
  getUserWholesaleRequests,
} from "../controllers/wholesaleController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

// 🟢 CREATE WHOLESALE ORDER Request (Customer)
router.post("/create", authMiddleware, createWholesaleRequest);

// 🟡 USER's WHOLESALE REQUESTS
router.get("/my-requests", authMiddleware, getUserWholesaleRequests);

// 🔵 ALL WHOLESALE REQUESTS (Admin)
router.get("/all", authMiddleware, adminMiddleware, getAllWholesaleRequests);

// 🟣 UPDATE QUOTE (Admin)
router.put("/update/:id", authMiddleware, adminMiddleware, updateWholesaleQuote);

export default router;
