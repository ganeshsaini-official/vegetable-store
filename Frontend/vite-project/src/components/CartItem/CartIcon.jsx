import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const CartIcon = () => {
  const { cartCount } = useCart();

  return (
    <Link 
      to="/cart" 
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors group"
    >
      <div className="relative">
        <FaShoppingCart className="h-5 w-5 text-gray-700 group-hover:text-green-600 transition-colors" />
        
        {cartCount > 0 && (
          <>
            <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold cart-badge-pulse">
              {cartCount}
            </span>
            <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 rounded-full animate-ping opacity-75"></span>
          </>
        )}
      </div>
      
      <span className="font-medium text-gray-700 group-hover:text-green-600 hidden md:inline">
        Cart
        {cartCount > 0 && (
          <span className="ml-1 text-sm font-normal">({cartCount})</span>
        )}
      </span>
    </Link>
  );
};

export default CartIcon;