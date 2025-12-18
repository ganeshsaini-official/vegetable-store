import express from "express";
import adminController from "../Controller/adminController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Dashboard
router.get("/dashboard", protect, admin, adminController.getDashboardStats);

// Users
router.get("/users", protect, admin, adminController.getAllUsers);
router.put("/user/:id", protect, admin, adminController.updateUser);
router.delete("/user/:id", protect, admin, adminController.deleteUser);
router.put("/user/:id/make-admin", protect, admin, adminController.makeUserAdmin);

// Orders
router.get("/orders", protect, admin, adminController.getAllOrders);
router.put("/order/:id", protect, admin, adminController.updateOrderStatus);

// Admin Login
router.post("/login", adminController.adminLogin);

export default router;
