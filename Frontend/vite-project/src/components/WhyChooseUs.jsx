import React from 'react';
import { FaTruck, FaSyncAlt, FaChartLine, FaHistory } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaSyncAlt />,
            title: "100% Fresh",
            description: "Delivered every morning, ensuring maximum freshness and nutrition"
        },
        {
            icon: <FaTruck />,
            title: "Free Delivery",
            description: "Free delivery on orders above ₹500. Same day delivery available for orders placed before 2 PM"
        },
        {
            icon: <FaChartLine />,
            title: "Daily Updates",
            description: "Prices updated daily based on market rates. No hidden charges, transparent pricing always."
        },
        {
            icon: <FaHistory />,
            title: "Trusted Since 1985",
            description: "Family-owned business serving the community for over 35 years with consistent quality"
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose Us</h2>
                    <p>We're committed to providing the freshest vegetables at the best prices</p>
                </div>
                
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
                
                <div className="quality-guarantee">
                    <div className="guarantee-content">
                        <h3>Quality Guaranteed</h3>
                        <p>Unsatisfied with quality? Get 100% refund or replacement. Your satisfaction is our priority.</p>
                    </div>
                    <div className="wholesale-info">
                        <h3>Wholesale Rates</h3>
                        <p>Special pricing for hotels, restaurants, and bulk buyers. Save more when you order more.</p>
                        <button className="quote-btn">Request Wholesale Quote &gt;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;