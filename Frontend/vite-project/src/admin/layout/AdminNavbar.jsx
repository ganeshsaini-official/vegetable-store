import React from 'react';
import { Logout, Notifications, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="admin-navbar">
      <div className="navbar-left">
        <h3>Welcome, Admin</h3>
      </div>
      <div className="navbar-right">
        <button className="icon-btn">
          <Notifications />
        </button>
        <button className="icon-btn">
          <AccountCircle />
        </button>
        <button onClick={handleLogout} className="logout-btn">
          <Logout /> Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;