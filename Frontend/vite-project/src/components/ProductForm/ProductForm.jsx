import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productService } from '../../services/productService';

const ProductForm = ({ product = null }) => {
    const navigate = useNavigate();
    const isEditMode = !!product;
    
    const [formData, setFormData] = useState({
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || '',
        category: product?.category || 'vegetables',
        stock: product?.stock || '',
        unit: product?.unit || 'kg',
        discount: product?.discount || 0,
        isFeatured: product?.isFeatured || false,
        isAvailable: product?.isAvailable !== undefined ? product.isAvailable : true
    });
    
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(product?.images || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const categories = ['vegetables', 'fruits', 'dairy', 'grains', 'spices', 'others'];
    const units = ['kg', 'gram', 'piece', 'packet', 'dozen', 'liter'];
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        
        // Create preview URLs
        const previews = files.map(file => URL.createObjectURL(file));
        setPreviewImages(prev => [...prev, ...previews]);
    };
    
    const removeImage = (index) => {
        setPreviewImages(prev => prev.filter((_, i) => i !== index));
        setImages(prev => prev.filter((_, i) => i !== index));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const formDataToSend = new FormData();
            
            // Add form data
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
            
            // Add images
            images.forEach(image => {
                formDataToSend.append('images', image);
            });
            
            let response;
            if (isEditMode) {
                response = await productService.updateProduct(product._id, formDataToSend);
            } else {
                response = await productService.createProduct(formDataToSend);
            }
            
            if (response.success) {
                navigate('/admin/products');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {isEditMode ? 'Edit Product' : 'Add New Product'}
                </h2>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Product Images */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Images *
                        </label>
                        <div className="flex flex-wrap gap-4 mb-4">
                            {previewImages.map((img, index) => (
                                <div key={index} className="relative">
                                    <img 
                                        src={img} 
                                        alt={`Preview ${index}`}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Upload up to 5 images. First image will be the main image.
                        </p>
                    </div>
                    
                    {/* Product Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="e.g., Organic Tomatoes"
                        />
                    </div>
                    
                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description *
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Describe the product..."
                        />
                    </div>
                    
                    {/* Price and Stock */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price (₹) *
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                min="0"
                                step="0.01"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="0.00"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Stock *
                            </label>
                            <input
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                required
                                min="0"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="0"
                            />
                        </div>
                    </div>
                    
                    {/* Category and Unit */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category *
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat} className="capitalize">
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Unit *
                            </label>
                            <select
                                name="unit"
                                value={formData.unit}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >
                                {units.map(unit => (
                                    <option key={unit} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    {/* Discount */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Discount (%)
                        </label>
                        <input
                            type="number"
                            name="discount"
                            value={formData.discount}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    
                    {/* Checkboxes */}
                    <div className="flex gap-6">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="isFeatured"
                                checked={formData.isFeatured}
                                onChange={handleChange}
                                className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                            />
                            <span className="ml-2 text-gray-700">Featured Product</span>
                        </label>
                        
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="isAvailable"
                                checked={formData.isAvailable}
                                onChange={handleChange}
                                className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                            />
                            <span className="ml-2 text-gray-700">Available</span>
                        </label>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                                    </svg>
                                    {isEditMode ? 'Updating...' : 'Creating...'}
                                </span>
                            ) : (
                                isEditMode ? 'Update Product' : 'Create Product'
                            )}
                        </button>
                        
                        <button
                            type="button"
                            onClick={() => navigate('/admin/products')}
                            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;