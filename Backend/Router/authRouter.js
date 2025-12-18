import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} from "../Controller/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC ROUTES
router.post("/register", registerUser);
router.post("/login", loginUser);

// PRIVATE ROUTES
router.get("/profile", protect, getProfile);
router.post("/logout", protect, logoutUser);

export default router;
