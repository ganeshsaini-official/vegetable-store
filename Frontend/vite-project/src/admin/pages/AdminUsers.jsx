import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const toggleUserStatus = async (userId, currentStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put(`/api/admin/user/${userId}`, 
        { isActive: !currentStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchUsers();
      alert('User status updated!');
    } catch (error) {
      alert('Error updating user status');
    }
  };

  const makeAdmin = async (userId) => {
    if (window.confirm('Make this user an admin?')) {
      try {
        const token = localStorage.getItem('adminToken');
        await axios.put(`/api/admin/user/${userId}/make-admin`, 
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchUsers();
        alert('User role updated to Admin!');
      } catch (error) {
        alert('Error updating user role');
      }
    }
  };

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-users">
      <h1>Manage Users</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user._id}>
                <td>#{user._id.substring(0, 8)}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone || 'N/A'}</td>
                <td>
                  <span className={`role-badge ${user.role}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user.isActive ? 'active' : 'inactive'}`}>
                    {user.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="actions">
                  <button 
                    onClick={() => toggleUserStatus(user._id, user.isActive)}
                    className={`btn-small ${user.isActive ? 'btn-danger' : 'btn-success'}`}
                  >
                    {user.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  {user.role !== 'admin' && (
                    <button 
                      onClick={() => makeAdmin(user._id)}
                      className="btn-small btn-warning"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;