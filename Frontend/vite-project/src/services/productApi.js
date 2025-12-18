import axios from 'axios';

const API_URL = '/api/products';

export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const fetchTopSelling = async () => {
    const response = await axios.get(`${API_URL}/top-selling`);
    return response.data;
};

export const fetchCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
};