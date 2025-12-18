import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import AdminDashboard from '../pages/AdminDashboard';
import AdminProducts from '../pages/AdminProducts';
import AdminAddProduct from '../pages/AdminAddProduct';
import AdminOrders from '../pages/AdminOrders';
import AdminUsers from '../pages/AdminUsers';
import AdminWholesale from '../pages/AdminWholesale';
import AdminLogin from '../pages/AdminLogin';

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  
  if (!token || !isAdmin) {
    return <Navigate to="/admin/login" />;
  }
  
  return children;
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      
      <Route path="/" element={
        <AdminProtectedRoute>
          <AdminLayout />
        </AdminProtectedRoute>
      }>
        <Route index element={<Navigate to="/admin/dashboard" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="add-product" element={<AdminAddProduct />} />
        <Route path="edit-product/:id" element={<AdminAddProduct />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="wholesale" element={<AdminWholesale />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;