import express from 'express';
const router = express.Router();

import {
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../Controller/productController.js';

import { protect , admin } from '../middleware/authMiddleware.js';
import upload from '../Config/multer.js';
// ---------------------
// Public Routes
// ---------------------
router.get('/', getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/:id', getProductById);

// ---------------------
// Admin Routes
// ---------------------
router.post('/', protect ,admin, upload.array('images', 5), createProduct );

router.put('/:id', protect, admin, upload.array('images', 5), updateProduct );

router.delete('/:id',protect, admin, deleteProduct );

export default router;
