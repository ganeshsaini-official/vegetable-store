import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import axios from "axios";
import Cookies from "js-cookie";

// Optional: sample products for count display
const sampleProducts = [
  { name: "Apple (Seb)", hindiName: "सेब", price: 135, image: "src/Uploads/Apple.png" },
  { name: "Banana (Kela)", hindiName: "केला", price: 50, image: "src/Uploads/Banana.png" },
  { name: "Capsicum (Shimla Mirch)", hindiName: "शिमला मिर्च", price: 80, image: "src/Uploads/ShimlaMirch.png" },
];

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = Cookies.get("token"); // token from cookies
        const { data } = await axios.get("http://localhost:5000/api/products", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        // Agar backend me products array direct return ho raha hai
        setProducts(data?.products || data); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.length > 0
          ? products.map((item, i) => <ProductCard key={i} product={item} />)
          : sampleProducts.map((item, i) => <ProductCard key={i} product={item} />)}
      </div>
    </div>
  );
};

export default Products;
