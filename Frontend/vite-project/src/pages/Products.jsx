import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { productService } from '../services/productService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await productService.getAllProducts();

      console.log("✅ FULL API RESPONSE:", response);
      console.log("✅ PRODUCTS:", response.products);

      setProducts(response.products);       // ✅ FIX 1
      setTotalPages(response.totalPages);   // ✅ FIX 2
    } catch (error) {
      console.error('❌ Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <h1 className=" text-center text-4xl font-bold text-gray-800 mb-2 ">
            Our Fresh Products
          </h1>
          <p className="text-gray-600 text-center" >
            Discover our wide range of fresh vegetables, fruits, and more
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🥬</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
          </div>
        ) : (
          Object.keys(groupedProducts).map(category => (
            <div key={category}>
              <h2 className=" text-3xl font-bold mb-4 mt-6">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {groupedProducts[category].map(product => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </div>
          ))

        )}

      </div>
    </div>
  );
};

export default Products;
