import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa';
import { fetchProducts } from '../../services/productApi';

const PricesTable = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    const getChangeIcon = (change) => {
        switch (change) {
            case 'up':
                return <FaArrowUp className="icon-up" />;
            case 'down':
                return <FaArrowDown className="icon-down" />;
            default:
                return <FaMinus className="icon-same" />;
        }
    };

    if (loading) return <div className="loading">Loading prices...</div>;

    return (
        <section className="prices-section">
            <div className="container">
                <div className="section-header">
                    <h2>Today's Prices</h2>
                    <p className="update-time">Updated daily for the freshest rates | Last updated: 07:51 pm</p>
                </div>
                
                <div className="prices-table">
                    <div className="table-header">
                        <div className="header-item">Vegetable</div>
                        <div className="header-item">Price/kg</div>
                        <div className="header-item">Wholesale</div>
                        <div className="header-item">Change</div>
                        <div className="header-item">Stock</div>
                    </div>
                    
                    <div className="table-body">
                        {products.map((product, index) => (
                            <div className="table-row" key={index}>
                                <div className="table-cell vegetable-cell">
                                    <span className="veg-name">{product.name}</span>
                                    <span className="hindi-name">({product.hindiName})</span>
                                </div>
                                <div className="table-cell price-cell">
                                    ₹{product.price}
                                </div>
                                <div className="table-cell wholesale-cell">
                                    ₹{product.wholesalePrice}
                                </div>
                                <div className="table-cell change-cell">
                                    {getChangeIcon(product.change)}
                                    <span className={`change-text ${product.change}`}>
                                        {product.change === 'same' ? 'same' : product.change}
                                    </span>
                                </div>
                                <div className="table-cell stock-cell">
                                    <span className={`stock-status ${product.stock.toLowerCase().replace(' ', '-')}`}>
                                        {product.stock}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <button className="view-all-btn">View All &gt;</button>
            </div>
        </section>
    );
};

export default PricesTable;