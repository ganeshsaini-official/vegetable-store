import React, { useState, useEffect } from 'react';
import { 
  FaShoppingBag, FaTruck, FaCheckCircle, 
  FaTimesCircle, FaClock, FaBoxOpen,
  FaEye, FaWhatsapp, FaRupeeSign 
} from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Button from '../../components/Common/Button';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockOrders = [
        {
          id: 'ORD-2023-001',
          date: '2023-10-15',
          items: [
            { name: 'Tomato', qty: '2 kg', price: '₹50' },
            { name: 'Onion', qty: '5 kg', price: '₹150' },
            { name: 'Potato', qty: '3 kg', price: '₹60' },
          ],
          total: '₹260',
          status: 'delivered',
          deliveryDate: '2023-10-16',
          address: '123 Main St, Mumbai',
          trackingId: 'TRK-123456',
        },
        {
          id: 'ORD-2023-002',
          date: '2023-10-18',
          items: [
            { name: 'Spinach', qty: '1 kg', price: '₹30' },
            { name: 'Coriander', qty: '0.5 kg', price: '₹20' },
          ],
          total: '₹50',
          status: 'processing',
          deliveryDate: '2023-10-19',
          address: '456 Park Ave, Mumbai',
          trackingId: 'TRK-123457',
        },
        {
          id: 'ORD-2023-003',
          date: '2023-10-20',
          items: [
            { name: 'Apple', qty: '2 kg', price: '₹200' },
            { name: 'Banana', qty: '3 kg', price: '₹90' },
          ],
          total: '₹290',
          status: 'out-for-delivery',
          deliveryDate: '2023-10-20',
          address: '789 Oak St, Mumbai',
          trackingId: 'TRK-123458',
        },
        {
          id: 'ORD-2023-004',
          date: '2023-10-22',
          items: [
            { name: 'Cauliflower', qty: '2 kg', price: '₹80' },
            { name: 'Cabbage', qty: '1 kg', price: '₹30' },
          ],
          total: '₹110',
          status: 'cancelled',
          deliveryDate: '2023-10-23',
          address: '101 Pine St, Mumbai',
          trackingId: 'TRK-123459',
        },
      ];
      
      setOrders(mockOrders);
    } catch (error) {
      toast.error('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <FaCheckCircle className="h-5 w-5 text-green-500" />;
      case 'processing':
        return <FaClock className="h-5 w-5 text-yellow-500" />;
      case 'out-for-delivery':
        return <FaTruck className="h-5 w-5 text-blue-500" />;
      case 'cancelled':
        return <FaTimesCircle className="h-5 w-5 text-red-500" />;
      default:
        return <FaBoxOpen className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'out-for-delivery':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaShoppingBag className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
          </div>
          <p className="text-gray-600">
            View and track all your orders in one place
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {['all', 'processing', 'out-for-delivery', 'delivered', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-full font-medium capitalize ${
                  filter === status
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status === 'all' ? 'All Orders' : status.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <FaBoxOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600 mb-6">
                {filter === 'all' 
                  ? "You haven't placed any orders yet"
                  : `You don't have any ${filter} orders`
                }
              </p>
              <Button variant="primary" onClick={() => window.location.href = '/products'}>
                Start Shopping
              </Button>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Order Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(order.status)}
                            <span className="capitalize">{order.status.replace('-', ' ')}</span>
                          </div>
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Ordered on {order.date} • Delivery: {order.deliveryDate}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-gray-900">{order.total}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<FaEye />}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Order Items */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-3">Order Items</h4>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.qty}</p>
                          </div>
                          <span className="font-medium text-gray-900">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h5 className="font-medium text-gray-900 mb-2">Delivery Address</h5>
                      <p className="text-sm text-gray-600">{order.address}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h5 className="font-medium text-gray-900 mb-2">Tracking ID</h5>
                      <p className="text-sm text-gray-600">{order.trackingId}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        icon={<FaWhatsapp />}
                        className="w-full"
                        onClick={() => window.open('https://wa.me/919999999999', '_blank')}
                      >
                        Track on WhatsApp
                      </Button>
                      
                      {order.status === 'delivered' && (
                        <Button variant="primary" className="w-full">
                          Reorder
                        </Button>
                      )}
                      
                      {order.status === 'processing' && (
                        <Button variant="danger" className="w-full">
                          Cancel Order
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        {filteredOrders.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{orders.length}</div>
                <div className="text-sm text-gray-600">Total Orders</div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {orders.filter(o => o.status === 'delivered').length}
                </div>
                <div className="text-sm text-gray-600">Delivered</div>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {orders.filter(o => o.status === 'processing' || o.status === 'out-for-delivery').length}
                </div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
              
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  ₹{orders.reduce((sum, order) => sum + parseInt(order.total.replace('₹', '')), 0)}
                </div>
                <div className="text-sm text-gray-600">Total Spent</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;