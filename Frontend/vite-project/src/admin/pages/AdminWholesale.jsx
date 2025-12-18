import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminWholesale = () => {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState('pending');

  useEffect(() => {
    fetchWholesaleRequests();
  }, []);

  const fetchWholesaleRequests = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('/api/wholesale', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching wholesale requests:', error);
    }
  };

  const updateRequestStatus = async (requestId, status) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put(`/api/wholesale/${requestId}`, 
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchWholesaleRequests();
      alert(`Request marked as ${status}`);
    } catch (error) {
      alert('Error updating request status');
    }
  };

  const filteredRequests = filter === 'all' 
    ? requests 
    : requests.filter(req => req.status === filter);

  return (
    <div className="admin-wholesale">
      <h1>Wholesale Requests</h1>
      
      <div className="request-filters">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'pending' ? 'active' : ''}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button 
          className={filter === 'approved' ? 'active' : ''}
          onClick={() => setFilter('approved')}
        >
          Approved
        </button>
        <button 
          className={filter === 'rejected' ? 'active' : ''}
          onClick={() => setFilter('rejected')}
        >
          Rejected
        </button>
      </div>

      <div className="requests-table">
        <table>
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Business Name</th>
              <th>Contact Person</th>
              <th>Email</th>
              <th>Phone</th>
              <th>GST Number</th>
              <th>Status</th>
              <th>Submitted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map(request => (
              <tr key={request._id}>
                <td>#{request._id.substring(0, 8)}</td>
                <td>{request.businessName}</td>
                <td>{request.contactPerson}</td>
                <td>{request.email}</td>
                <td>{request.phone}</td>
                <td>{request.gstNumber}</td>
                <td>
                  <span className={`status-badge ${request.status}`}>
                    {request.status}
                  </span>
                </td>
                <td>{new Date(request.createdAt).toLocaleDateString()}</td>
                <td className="actions">
                  {request.status === 'pending' && (
                    <>
                      <button 
                        onClick={() => updateRequestStatus(request._id, 'approved')}
                        className="btn-small btn-success"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => updateRequestStatus(request._id, 'rejected')}
                        className="btn-small btn-danger"
                      >
                        Reject
                      </button>
                    </>
                  )}
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

export default AdminWholesale;