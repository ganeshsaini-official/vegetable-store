import Product from "../Model/Product.js";
import cloudinary from "../config/cloudinary.js";

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getAllProducts = async (req, res) => {
    try {
        const { category, search, sort, page = 1, limit = 12 } = req.query;

        let query = {};

        // Filter by category
        if (category && category !== "all") {
            query.category = category;
        }

        // Search by product name
        if (search) {
            query.name = { $regex: search, $options: "i" };
        }

        // Sorting
        let sortOption = {};
        if (sort === "price-low") sortOption.price = 1;
        else if (sort === "price-high") sortOption.price = -1;
        else if (sort === "newest") sortOption.createdAt = -1;
        else sortOption.createdAt = -1;

        // Pagination
        const skip = (page - 1) * limit;

        const products = await Product.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(parseInt(limit));

        const totalProducts = await Product.countDocuments(query);

        res.json({
            success: true,
            count: products.length,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: parseInt(page),
            products,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
export const getFeaturedProducts = async (req, res) => {
    try {
        const products = await Product.find({
            isFeatured: true,
            isAvailable: true,
        }).limit(8);

        res.json({
            success: true,
            products,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.json({
            success: true,
            product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// @desc    Create new product (Admin)
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
    try {
        const { name, hindiName, price, category, stock, unit, discount, isFeatured } = req.body;

        // Check if images uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                success: false,
                message: "At least one image is required",
            });
        }

        // Upload images to Cloudinary
        const imageUrls = [];
        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path, {
                folder: "sabji-store/products",
            });
            imageUrls.push(result.secure_url);
        }

        const product = new Product({
            name,
            hindiName,
            price,
            category,
            images: imageUrls,
            stock,
            unit,
            discount,
            isFeatured: isFeatured || false,
        });

        await product.save();

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// @desc    Update product (Admin)
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        const { name, description, price, category, stock, unit, discount, isFeatured, isAvailable } = req.body;

        let imageUrls = product.images;

        // If new images are uploaded
        if (req.files && req.files.length > 0) {
            const newImageUrls = [];
            for (const file of req.files) {
                const result = await cloudinary.uploader.upload(file.path, {
                    folder: "sabji-store/products",
                });
                newImageUrls.push(result.secure_url);
            }
            imageUrls = newImageUrls;
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.images = imageUrls;
        product.stock = stock || product.stock;
        product.unit = unit || product.unit;
        product.discount = discount || product.discount;
        product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
        product.isAvailable = isAvailable !== undefined ? isAvailable : product.isAvailable;

        await product.save();

        res.json({
            success: true,
            message: "Product updated successfully",
            product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// @desc    Delete product (Admin)
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        // Delete images from Cloudinary
        for (const imageUrl of product.images) {
            const publicId = imageUrl.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(`sabji-store/products/${publicId}`);
        }

        await product.deleteOne();

        res.json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// @desc    Get products by category
// @route   GET /api/products/category/:category
// @access  Public
export const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({
            category: req.params.category,
            isAvailable: true,
        });

        res.json({
            success: true,
            count: products.length,
            products,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
