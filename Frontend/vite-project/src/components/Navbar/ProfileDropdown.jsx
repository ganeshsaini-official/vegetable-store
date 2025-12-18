import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingBag, FaMapMarkerAlt, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
          <FaUser className="h-4 w-4 text-green-600" />
        </div>
        <span className="font-medium text-gray-700">{user?.name || 'Profile'}</span>
        <svg 
          className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="font-semibold text-gray-900">{user?.name}</p>
            <p className="text-sm text-gray-500 truncate">{user?.email}</p>
            {isAdmin && (
              <span className="inline-block mt-1 px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                Admin
              </span>
            )}
          </div>

          <div className="py-2">
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              <FaUser className="h-4 w-4" />
              <span>Profile</span>
            </Link>

            <Link
              to="/my-orders"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              <FaShoppingBag className="h-4 w-4" />
              <span>My Orders</span>
            </Link>

            <Link
              to="/addresses"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              <FaMapMarkerAlt className="h-4 w-4" />
              <span>Addresses</span>
            </Link>

            {/* Admin Panel Link - Only for Admins */}
            {isAdmin && (
              <Link
                to="/admin/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <FaCog className="h-4 w-4" />
                <span>Admin Panel</span>
              </Link>
            )}
          </div>

          <div className="border-t border-gray-100 pt-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
            >
              <FaSignOutAlt className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;