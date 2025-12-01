import express from "express";
import dbConnect from "./Config/db.js";
import router from "./Router/authRouter.js";

dbConnect();

const app = express();

// 🔥 IMPORTANT — yeh sabse upar hona chahiye
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.send("server is runningg.....");
});

const port = 5000;
app.listen(port, () => {
    console.log(`server is running ${port}`);
});
