import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Restaurant Owner",
            text: "We've been ordering vegetables from Fresh Veggie Mart for our restaurant for over 5 years. The quality is consistently excellent and the wholesale rates help us maintain our margins.",
            rating: "★★★★★"
        },
        {
            name: "Priya Sharma",
            role: "Homemaker",
            text: "The convenience of getting fresh vegetables delivered to my doorstep is amazing. The quality is always top-notch and the prices are very reasonable compared to local markets.",
            rating: "★★★★★"
        },
        {
            name: "Hotel Green Palace",
            role: "5-Star Hotel",
            text: "As a premium hotel, we need the freshest ingredients for our guests. Fresh Veggie Mart has been our trusted partner for bulk vegetable supplies. Highly recommended!",
            rating: "★★★★★"
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2>What Our Customers Say</h2>
                    <p>Trusted by homes, hotels, and restaurants across the city</p>
                </div>
                
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-content">
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="rating">{testimonial.rating}</div>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p className="author-role">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;