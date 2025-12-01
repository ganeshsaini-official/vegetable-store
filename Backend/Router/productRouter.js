// routes/productRoutes.js
import express from "express";
import { createProduct, 
    getAllProducts,
  getSingleProduct,
  updateProduct,
   deleteProduct
   } from "../Controllers/productController.js";


import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

// ⭐ Admin Only
router.post("/", authMiddleware, adminMiddleware, createProduct);
router.put("/:id", authMiddleware, adminMiddleware, updateProduct);
router.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

// ⭐ Public Routes
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

export default router;