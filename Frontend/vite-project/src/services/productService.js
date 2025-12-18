import api from './api';

export const productService = {
    // Get all products
    getAllProducts: async (params = {}) => {
        const response = await api.get('/products', { params });
        return response.data;
    },
    
    // Get featured products
    getFeaturedProducts: async () => {
        const response = await api.get('/products/featured');
        return response.data;
    },
    
    // Get product by ID
    getProductById: async (id) => {
        const response = await api.get(`/products/${id}`);
        return response.data;
    },
    
    // Get products by category
    getProductsByCategory: async (category) => {
        const response = await api.get(`/products/category/${category}`);
        return response.data;
    },
    
    // Create product (Admin)
    createProduct: async (formData) => {
        const response = await api.post('/products', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    
    // Update product (Admin)
    updateProduct: async (id, formData) => {
        const response = await api.put(`/products/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    
    // Delete product (Admin)
    deleteProduct: async (id) => {
        const response = await api.delete(`/products/${id}`);
        return response.data;
    }
};