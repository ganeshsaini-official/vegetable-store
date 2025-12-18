import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  People, Inventory, ShoppingCart, AttachMoney 
} from '@mui/icons-material';
import StatCard from '../components/StatCard';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    recentOrders: []
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('/api/admin/dashboard', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Dashboard Overview</h1>
      
      <div className="stats-grid">
        <StatCard 
          title="Total Users" 
          value={stats.totalUsers} 
          icon={<People />}
          color="#4CAF50"
        />
        <StatCard 
          title="Total Products" 
          value={stats.totalProducts} 
          icon={<Inventory />}
          color="#2196F3"
        />
        <StatCard 
          title="Total Orders" 
          value={stats.totalOrders} 
          icon={<ShoppingCart />}
          color="#FF9800"
        />
        <StatCard 
          title="Total Revenue" 
          value={`₹${stats.totalRevenue}`} 
          icon={<AttachMoney />}
          color="#9C27B0"
        />
      </div>

      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {stats.recentOrders.map(order => (
              <tr key={order._id}>
                <td>#{order.orderId}</td>
                <td>{order.user?.name}</td>
                <td>₹{order.totalAmount}</td>
                <td>
                  <span className={`status-badge ${order.status}`}>
                    {order.status}
                  </span>
                </td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;