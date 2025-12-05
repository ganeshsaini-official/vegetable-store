// routes/productRoutes.js
import express from "express";
import upload from "../middleware/upload.js";

import { 
  createProduct, 
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct
} from "../Controller/productController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";


const productRoutes = express.Router()

// ⭐ Admin Only Routes
// Create Product (with image upload)
productRoutes.post("/", authMiddleware,  adminMiddleware, upload.single("image"), createProduct );

// Update Product (with optional image upload)
productRoutes.put( "/:id",authMiddleware, adminMiddleware, upload.single("image"), updateProduct );

// Delete Product
productRoutes.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

// ⭐ Public Routes
productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getSingleProduct);

export default productRoutes;
