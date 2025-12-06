// Yeh middleware tab chalega jab protect token ko verify kar chuka hoga

export const adminMiddleware = (req, res, next) => {
  try {
    // User object milna chahiye protect middleware se
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized! Please login again.",
      });
    }

    // Agar tumhare User model me isAdmin field hai:
    if (req.user.isAdmin !== true) {
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
