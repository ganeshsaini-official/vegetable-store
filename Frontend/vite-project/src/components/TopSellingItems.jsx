
import React, { useState, useEffect } from 'react';
import { fetchTopSelling } from '../services/productApi';

const TopSellingItems = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTopSelling = async () => {
            try {
                const data = await fetchTopSelling();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching top selling items:', error);
                setLoading(false);
            }
        };
        getTopSelling();
    }, []);

    if (loading) return <div className="loading">Loading top selling items...</div>;

    return (
        <section className="top-selling-section">
            <div className="container">
                <div className="section-header">
                    <h2>Top Selling Items</h2>
                    <p>Most popular vegetables this week</p>
                </div>
                
                <div className="top-selling-grid">
                    {products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <div className="product-image">
                                {product.name === 'Potato' ? '🥔' : 
                                 product.name === 'Onion' ? '🧅' : 
                                 product.name === 'Tomato' ? '🍅' : '🥬'}
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p className="hindi-name">({product.hindiName})</p>
                                <div className="price-container">
                                    <span className="current-price">₹{product.price}/kg</span>
                                    {product.wholesalePrice && (
                                        <span className="wholesale-price">₹{product.wholesalePrice}</span>
                                    )}
                                </div>
                                <button className="add-to-cart-btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <button className="view-all-btn">View All Products &gt;</button>
            </div>
        </section>
    );
};

export default TopSellingItems;