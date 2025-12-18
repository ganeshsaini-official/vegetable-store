import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../services/productApi';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };
        getCategories();
    }, []);

    const categoryImages = {
        'Potato': '🥔',
        'Onion': '🧅',
        'Tomato': '🍅',
        'Greens': '🥬',
        'Seasonal Vegetables': '🌽',
        'Fruits': '🍎'
    };

    if (loading) return <div className="loading">Loading categories...</div>;

    return (
        <section className="categories-section">
            <div className="container">
                <div className="section-header">
                    <h2>Shop by Category</h2>
                    <p>Browse our selection of fresh vegetables</p>
                </div>
                
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <div className="category-card" key={index}>
                            <div className="category-icon">
                                {categoryImages[category] || '🥕'}
                            </div>
                            <h3>{category}</h3>
                            <p>Fresh and organic</p>
                            <button className="category-btn">Shop Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;