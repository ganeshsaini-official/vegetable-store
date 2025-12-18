import multer from "multer";

const storage = multer.memoryStorage(); // memory me store karke Cloudinary me bhejenge
const upload = multer({ storage });

export default upload;
