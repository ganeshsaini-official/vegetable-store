import React from "react";
import { FaPhone, FaClock, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const categories = [
    "Aloo (Potato)",
    "Pyaz (Onion)",
    "Tamatar (Tomato)",
    "Hari Sabji (Greens)",
    "Seasonal Vegetables",
    "Fresh Fruits",
  ];

  const quickLinks = [
    "All Products",
    "Wholesale Orders",
    "About Us",
    "Contact Us",
  ];

  return (
    <footer className="bg-green-900 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ABOUT SECTION */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Fresh Veggie Mart</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Family-owned vegetable shop serving fresh, quality produce since 1985.
              Delivering daily to homes, hotels, and restaurants.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-xl mt-1 text-green-300" />
                <span>123 Sabzi Mandi, Main Market Road, New Delhi - 110001</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-lg text-green-300" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-lg text-green-300" />
                <span>Mon-Sat: 6 AM - 9 PM | Sun: 7 AM - 2 PM</span>
              </div>
            </div>
          </div>

          {/* CATEGORIES */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-300 transition duration-300"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-300 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT WITH US */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>

            <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 mb-4 transition">
              <FaWhatsapp /> Order on WhatsApp
            </button>

            <div className="flex items-center gap-4 mt-3">
              <a className="bg-green-700 hover:bg-green-600 p-2 rounded-full cursor-pointer">f</a>
              <a className="bg-green-700 hover:bg-green-600 p-2 rounded-full cursor-pointer">in</a>
              <a className="bg-green-700 hover:bg-green-600 p-2 rounded-full cursor-pointer">@</a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="text-center border-t border-green-700 pt-6 mt-10">
          <p className="text-gray-300 text-sm">
            © 2025 Fresh Veggie Mart. All rights reserved. | Serving fresh vegetables since 1985
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
