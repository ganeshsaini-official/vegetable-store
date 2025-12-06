import express from "express";
import dbConnect from "./Config/db.js";
import router from "./Router/authRouter.js";
import cors from "cors";
import env from "dotenv";
import productRoutes from "./Router/productRouter.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler.js";
import path from "path";
import { fileURLToPath } from "url";

env.config();
dbConnect();

// ES modules me __dirname banane ke liye
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: false,  // If using localStorage → credentials: false
}));

// Static uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", router);
app.use("/api/products", productRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running ${port}`);
});
