import Order from "../Model/Order.js";
import Cart from "../Model/Cart.js";

// 🟢 PLACE ORDER
export const placeOrder = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId }).populate("items.product");

    if (!cart || cart.items.length === 0)
      return res.status(400).json({ success: false, message: "Cart is empty" });

    const items = cart.items.map((item) => ({
      product: item.product._id,
      quantityKg: item.quantityKg,
      price: item.price,
      totalProductPrice: item.price * item.quantityKg || item.price, // optional calculation
    }));

    const order = await Order.create({
      user: userId,
      items,
      totalAmount: cart.totalAmount,
      deliveryAddress: req.user.address || {},
      status: "Pending",
    });

    // Clear cart after placing order
    cart.items = [];
    cart.totalAmount = 0;
    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟡 GET USER ORDERS
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔹 GET SINGLE ORDER
export const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("items.product");

    if (!order)
      return res.status(404).json({ success: false, message: "Order not found" });

    // Ensure user can only access their order unless admin
    if (req.user.role !== "admin" && order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔵 GET ALL ORDERS (ADMIN)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.product")
      .populate("user", "name email") // optional: show user info
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟠 UPDATE ORDER STATUS (ADMIN ONLY)
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const validStatuses = ["Pending", "Packed", "Shipped", "Delivered", "Cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order)
      return res.status(404).json({ success: false, message: "Order not found" });

    res.status(200).json({ success: true, message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
