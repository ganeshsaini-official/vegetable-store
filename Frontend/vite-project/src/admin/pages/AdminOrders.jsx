import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('/api/admin/orders', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put(`/api/admin/order/${orderId}`, 
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchOrders();
      alert('Order status updated!');
    } catch (error) {
      alert('Error updating order status');
    }
  };

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status === filter);

  const getStatusColor = (status) => {
    const colors = {
      'pending': '#FF9800',
      'processing': '#2196F3',
      'shipped': '#9C27B0',
      'delivered': '#4CAF50',
      'cancelled': '#F44336'
    };
    return colors[status] || '#757575';
  };

  return (
    <div className="admin-orders">
      <h1>Manage Orders</h1>
      
      <div className="order-filters">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All Orders
        </button>
        <button 
          className={filter === 'pending' ? 'active' : ''}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button 
          className={filter === 'processing' ? 'active' : ''}
          onClick={() => setFilter('processing')}
        >
          Processing
        </button>
        <button 
          className={filter === 'shipped' ? 'active' : ''}
          onClick={() => setFilter('shipped')}
        >
          Shipped
        </button>
        <button 
          className={filter === 'delivered' ? 'active' : ''}
          onClick={() => setFilter('delivered')}
        >
          Delivered
        </button>
      </div>

      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order._id}>
                <td>#{order.orderId}</td>
                <td>{order.user?.name}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>{order.items.length} items</td>
                <td>₹{order.totalAmount}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                    style={{ 
                      backgroundColor: getStatusColor(order.status),
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px'
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td>
                  <button className="btn-small">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;