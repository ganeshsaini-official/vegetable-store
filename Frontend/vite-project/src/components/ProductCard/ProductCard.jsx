import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { fetchCart } = useCart();

  const discountedPrice =
    product.discount > 0
      ? product.price - (product.price * product.discount) / 100
      : product.price;

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        alert("Please login first");
        return;
      }

      const res = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1,
        }),
      });

      const data = await res.json();

      if (data.success) {
        await fetchCart(); // 🔥 BACKEND CART REFRESH
        alert("✅ Product added to cart");
      } else {
        alert(data.message || "Failed to add to cart");
      }
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/products/${product._id}`}>
        <div className="relative h-56 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

        <div className="flex justify-between mb-3">
          <span className="text-xl font-bold text-green-700">
            ₹{discountedPrice}
          </span>
          <span className="text-sm text-gray-500">per {product.unit}</span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-2 rounded-lg font-semibold ${
            product.stock === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
