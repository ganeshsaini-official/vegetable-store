import express from "express";
import dbConnect from "./Config/db.js";
import router from "./Router/authRouter.js";
import cors from "cors"
dbConnect();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true}))
app.use("/api/auth", router);

app.get("/", (req, res) => {
    res.send("server is runningg.....");
});

const port = 5000;
app.listen(port, () => {
    console.log(`server is running ${port}`);
});
