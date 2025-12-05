import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// 🟢 ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const { productId, quantityKg } = req.body;
    const userId = req.user._id;

    const product = await Product.findById(productId);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    const price = product.pricePerKg * quantityKg;

    // user cart find or new create
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [], totalAmount: 0 });
    }

    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

    if (itemIndex >= 0) {
      cart.items[itemIndex].quantityKg += quantityKg;
      cart.items[itemIndex].price += price;
    } else {
      cart.items.push({
        product: productId,
        quantityKg,
        price,
      });
    }

    cart.totalAmount = cart.items.reduce((total, item) => total + item.price, 0);

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart!",
      cart,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟡 REMOVE ITEM FROM CART
export const removeCartItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const productId = req.params.id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });

    cart.items = cart.items.filter((item) => item.product.toString() !== productId);

    cart.totalAmount = cart.items.reduce((a, b) => a + b.price, 0);

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item removed from cart!",
      cart,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔵 GET USER CART
export const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");

    res.status(200).json({
      success: true,
      cart: cart || { items: [], totalAmount: 0 },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
