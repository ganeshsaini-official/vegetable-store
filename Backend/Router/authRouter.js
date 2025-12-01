import express from "express";
import { loginUser, registerUser } from "../Controller/authController.js";

    // loginUser, getProfile, logoutUser 



// import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC ROUTES
router.post("/register",registerUser );
router.post("/login", loginUser);

// // PRIVATE ROUTES
// router.get("/profile", authMiddleware, getProfile);
// router.post("/logout", authMiddleware, logoutUser);

export default router;
