import express from "express";
import upload from "../middleware/multer.js";
import cloudinary from "../config/cloudinary.js";
const router = express.Router();

router.post("/image", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { folder: "products" },
      (error, result) => {
        if (error) return res.status(500).json({ message: "Upload failed" });
        return res.json({ url: result.secure_url });
      }
    );

    result.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
});

export default router;
