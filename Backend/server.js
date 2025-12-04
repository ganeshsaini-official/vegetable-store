import express from "express";
import dbConnect from "./Config/db.js";
import router from "./Router/authRouter.js";
import cors from "cors";
// import uploadRouter from "./Router/uploadRouter.js";

dbConnect();

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", router);
// app.use("/uploads", express.static("uploads"));
// app.use("/api/upload",uploadRouter)

const port = 5000;
app.listen(port, () => {
    console.log(`server is running ${port}`);
});
