import React from 'react';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import "../admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminNavbar />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;