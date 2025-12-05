import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
const sampleProducts = [
  {
    name: "Apple (Seb)",
    hindiName: "सेब",
    price: 135,
    image: "src/Uploads/Apple.png",
  },
  {
    name: "Banana (Kela)",
    hindiName: "केला",
    price: 50,
    image: "src/Uploads/Banana.png",
  },
  {
    name: "Capsicum (Shimla Mirch)",
    hindiName: "शिमला मिर्च",
    price: 80,
    image: "src/Uploads/ShimlaMirch.png",
  },
];

const Products = () => {
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Showing {sampleProducts.length} products</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {sampleProducts.map((item, i) => (
          <ProductCard key={i} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
