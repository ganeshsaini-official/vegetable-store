import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

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
      totalProductPrice: item.price,
    }));

    const order = await Order.create({
      user: userId,
      items,
      totalAmount: cart.totalAmount,
      deliveryAddress: req.user.address,
      paymentStatus: "Pending",
    });

    // clear cart after order
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
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔵 UPDATE ORDER STATUS (ADMIN ONLY)
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Order status updated",
      order,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
