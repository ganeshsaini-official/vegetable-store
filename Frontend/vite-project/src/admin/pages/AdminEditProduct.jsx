import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../../services/productService';
import ProductForm from '../../components/ProductForm/ProductForm';

const AdminEditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await productService.getProductById(id);

      // API response safety check
      if (!response || !response.product) {
        setProduct(null);
        return;
      }

      setProduct(response.product);
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-6xl mb-4">❌</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Product not found
        </h3>
      </div>
    );
  }

  return <ProductForm product={product} />;
};

export default AdminEditProduct;
