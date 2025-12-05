// middleware/adminMiddleware.js

export const adminMiddleware = (req, res, next) => {
  try {
    // Agar token verify hi nahi hua to req.user empty hoga
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized! Please login again.",
      });
    }

    // User admin hai ya nahi
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access denied!",
      });
    }

    next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Admin middleware error",
      error: error.message,
    });
  }
};
