import User from "../models/User.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";

// 🟢 ADMIN LOGIN
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email }).select("+password");

    if (!admin) return res.status(404).json({ success: false, message: "Admin not found" });

    if (admin.role !== "admin")
      return res.status(403).json({ success: false, message: "Access denied" });

    const isMatch = await admin.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ success: false, message: "Incorrect password" });

    const token = admin.generateToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.json({ success: true, message: "Admin logged in successfully", admin });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟡 GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "customer" });

    res.json({
      success: true,
      total: users.length,
      users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 🟠 UPDATE USER ROLE
export const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    const updated = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    );

    res.json({
      success: true,
      message: "User role updated successfully",
      updated,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 🔴 DELETE USER
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 🔵 GET ALL ORDERS (ADMIN)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user");

    res.json({ success: true, total: orders.length, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 🟣 DASHBOARD STATS
export const getDashboardStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();

    const deliveredOrders = await Order.find({ status: "Delivered" });

    const revenue = deliveredOrders.reduce(
      (sum, order) => sum + order.totalAmount,
      0
    );

    res.json({
      success: true,
      stats: {
        totalProducts,
        totalOrders,
        revenue,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
