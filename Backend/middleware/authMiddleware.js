import jwt from "jsonwebtoken";
import User from "../Model/user.js";

const authMiddleware = async (req, res, next) => {
  try {
    // Token from Cookie
    let token = req?.headers?.authorization;

    console.log("token", token);
    token = token.slice(7);
    

    console.log(token);
    

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Token missing",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not found",
      });
    }

    req.user = user; // user ko req me attach kar diya
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default authMiddleware;
