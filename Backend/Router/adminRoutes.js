import express from "express";
import {
  adminLogin,
  getAllUsers,
  updateUserRole,
  deleteUser,
  getAllOrders,
  getDashboardStats,
} from "../controllers/adminController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

// 🟢 ADMIN LOGIN
router.post("/login", adminLogin);

// 🟡 GET ALL USERS (Admin Only)
router.get("/users", authMiddleware, adminMiddleware, getAllUsers);

// 🟠 UPDATE USER ROLE
router.put("/user/update-role/:id", authMiddleware, adminMiddleware, updateUserRole);

// 🔴 DELETE USER
router.delete("/user/delete/:id", authMiddleware, adminMiddleware, deleteUser);

// 🔵 ALL ORDERS
router.get("/orders", authMiddleware, adminMiddleware, getAllOrders);

// 🟣 DASHBOARD STATS
router.get("/stats", authMiddleware, adminMiddleware, getDashboardStats);

export default router;
