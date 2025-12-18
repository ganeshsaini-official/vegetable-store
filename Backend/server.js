import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

// DB
import dbConnect from "./Config/db.js";

// Routes
import authRoutes from "./Router/authRouter.js";
import productRoutes from "./Router/productRouter.js";
import orderRoutes from "./Router/orderRoutes.js";
import cartRoutes from "./Router/cartRoutes.js";
import wholesaleRoutes from "./Router/wholesaleRoutes.js";
import adminRoutes from "./Router/adminRoutes.js";

// Middleware
import { errorHandler } from "./middleware/errorHandler.js";

// ENV
dotenv.config();

// DB CONNECT
dbConnect();

// __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// APP INIT
const app = express();

// ─────────── MIDDLEWARE ───────────
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: false, // localStorage token use kar rahe ho
  })
);

// ─────────── STATIC FILES ───────────
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ─────────── ROUTES ───────────
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wholesale", wholesaleRoutes);
app.use("/api/admin", adminRoutes);

// ─────────── ERROR HANDLER ───────────
app.use(errorHandler);

// ─────────── SERVER ───────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
