import mongoose from "mongoose";

const wholesaleRequestSchema = new mongoose.Schema(
  {
    buyerName: {
      type: String,
      required: true,
      trim: true,
    },

    businessName: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      default: "",
      lowercase: true,
    },

    address: {
      street: { type: String, default: "" },
      city: { type: String, default: "" },
      district: { type: String, default: "" },
      state: { type: String, default: "" },
      pincode: { type: String, default: "" },
    },

    // ✔ User kya order karna chahta hai
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        unit: {
          type: String,
          enum: ["kg", "ton", "packet", "crate"],
          default: "kg",
        },
      },
    ],

    // ✔ Wholesale me delivery date important hoti h
    expectedDeliveryDate: {
      type: Date,
      required: true,
    },

    // ✔ Admin ka decision
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "delivered"],
      default: "pending",
    },

    // ✔ Buyer koi special notes add krna chahe
    note: {
      type: String,
      default: "",
    },

    // ✔ Admin ki reply / price quote / instructions
    adminResponse: {
      type: String,
      default: "",
    },

    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Wholesale = mongoose.model("WholesaleRequest", wholesaleRequestSchema);
export default Wholesale ;
