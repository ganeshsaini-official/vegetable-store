import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    image: {
      type: String,
      required: false, // Cloudinary / local upload
    },

    category: {
      type: String,
      required: true,
      enum: ["vegetables", "fruits", "dairy", "grocery", "others"],
    },

    pricePerKg: {
      type: Number,
      required: true,
    },

    stockKg: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;