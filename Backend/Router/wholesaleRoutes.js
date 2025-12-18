import express from "express";

import { createWholesaleRequest,
   getAllWholesaleRequests,
  updateWholesaleStatus,
  getUserWholesaleRequests,
 } from "../Controller/wholesaleController.js";

import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🟢 CREATE WHOLESALE ORDER Request (Customer)
router.post("/create", protect, createWholesaleRequest);

// 🟡 USER's WHOLESALE REQUESTS
router.get("/my-requests", protect, getUserWholesaleRequests);

// 🔵 ALL WHOLESALE REQUESTS (Admin)
router.get("/all", protect, admin, getAllWholesaleRequests);

// 🟣 UPDATE QUOTE (Admin)
router.put("/update/:id", protect, admin, updateWholesaleStatus);

export default router;
