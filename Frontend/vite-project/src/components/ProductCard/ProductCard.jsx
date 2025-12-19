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

      const res = await fetch("http://locaost:5000/api/cart/add", {
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
    <div className="bg-[#2522] rounded-md cursor-pointer shadow-md overflow-hidden hover:scale-105 transition-transform duration-500">
      <Link to={`/products/${product._id}`}>
        <div className="relative h-40 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center gap-2 ">
          <h3 className="text-lg font-semibold mb-2 ">{product.name}</h3>
          <h3 className="text-sm font-semibold mb-2 pt-1 ">{product.hindiName}</h3>
        </div>

        <div className="flex gap-1 mb-3 items-center">
          <span className="text-xl font-bold text-green-700">₹{discountedPrice}</span>
          <span className="text-sm text-gray-500 ">per {product.unit}</span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={` px-3 py-1 text-sm rounded-sm cursor-pointer font-semibold ${product.stock === 0
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
