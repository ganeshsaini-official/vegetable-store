import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaBox, FaStore, FaInfoCircle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const NavbarLinks = () => {
  return (
    <>
      <Link 
        to="/" 
        className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-green-50"
      >
        <FaLeaf className="h-4 w-4" />
        <span className="font-medium">Home</span>
      </Link>

      <Link 
        to="/categories" 
        className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-green-50"
      >
        <FaBox className="h-4 w-4" />
        <span className="font-medium">Categories</span>
      </Link>

      <Link 
        to="/products" 
        className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-green-50"
      >
        <FaStore className="h-4 w-4" />
        <span className="font-medium">Products</span>
      </Link>

      <Link 
        to="/wholesale" 
        className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-green-50"
      >
        <FaWhatsapp className="h-4 w-4" />
        <span className="font-medium">Wholesale</span>
      </Link>

      <Link 
        to="/about" 
        className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-green-50"
      >
        <FaInfoCircle className="h-4 w-4" />
        <span className="font-medium">About</span>
      </Link>

      <Link 
        to="/contact" 
        className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-lg hover:bg-green-50"
      >
        <FaPhoneAlt className="h-4 w-4" />
        <span className="font-medium">Contact</span>
      </Link>
    </>
  );
};

export default NavbarLinks;