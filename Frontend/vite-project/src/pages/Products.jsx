import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import axios from "axios";
import Cookies from 'js-cookie'

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
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData  = async () => {
      
      try {
      const {data} = await axios.get("http://localhost:5000/api/products", {
        headers : {
          Authorization : `Bearer ${Cookies.get("token")}`
        }
      })

      console.log("data: ",data.products);
      setProducts(data.products)
      
    } catch (error) {
      console.log(error)
    }
    }

    fetchData()
  }, [])
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Showing {sampleProducts.length} products</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((item, i) => (
          <ProductCard key={i} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
