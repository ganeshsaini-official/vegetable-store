import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    hindiName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    category: {
      type: String,
      required: true,
      enum: ['vegetables', 'fruits', 'dairy', 'grains', 'spices', 'others']
    },
    images: [
      {
        type: String,
        required: true
      }
    ],
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0
    },
    unit: {
      type: String,
      required: true,
      enum: ['kg', 'gm', 'piece', 'packet', 'dozen', 'liter']
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    isAvailable: {
      type: Boolean,
      default: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
