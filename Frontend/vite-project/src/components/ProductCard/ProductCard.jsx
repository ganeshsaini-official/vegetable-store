import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition">
      
      {/* Product Image */}
      <div className="h-40 w-full bg-gray-100 flex justify-center items-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-3">

        {/* Product Name */}
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>

<p>{product.description}</p>

        {/* Price */}
        <p className="text-xl font-bold mt-2">₹{product.pricePerKg} <span className="text-sm text-gray-500">/ Kg</span></p>

        {/* Add to Cart Button */}
        <button className="w-full bg-green-600 text-white mt-3 py-2 rounded-lg hover:bg-green-700 transition">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
