import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    images: [],
    wholesalePrice: '',
    minWholesaleQuantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    setLoading(true);
    
    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        
        const token = localStorage.getItem('adminToken');
        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        return response.data.url;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      setProduct(prev => ({ 
        ...prev, 
        images: [...prev.images, ...uploadedUrls] 
      }));
    } catch (error) {
      alert('Error uploading images');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.post('/api/products', product, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      alert('Product added successfully!');
      navigate('/admin/products');
    } catch (error) {
      alert('Error adding product');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product">
      <h1>Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Product Name *</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home & Kitchen</option>
              <option value="books">Books</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          <div className="form-group">
            <label>Price (₹) *</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Stock Quantity *</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Wholesale Price (₹)</label>
            <input
              type="number"
              name="wholesalePrice"
              value={product.wholesalePrice}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Min Wholesale Quantity</label>
            <input
              type="number"
              name="minWholesaleQuantity"
              value={product.minWholesaleQuantity}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label>Product Images *</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
          <div className="image-preview">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={`Product ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            className="btn-secondary"
            onClick={() => navigate('/admin/products')}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Adding Product...' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduct;