import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaEdit, FaSave, FaTimes, FaShieldAlt, FaTruck 
} from 'react-icons/fa';
import Button from '../../components/Common/Button';
import { toast } from 'react-hot-toast';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    pincode: user?.pincode || '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await updateProfile(formData);
      if (result.success) {
        toast.success('Profile updated successfully!');
        setIsEditing(false);
      }
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { label: 'Total Orders', value: '24', icon: <FaTruck /> },
    { label: 'Active Orders', value: '2', icon: <FaTruck /> },
    { label: 'Total Spent', value: '₹12,450', icon: <FaShieldAlt /> },
    { label: 'Member Since', value: '2023', icon: <FaUser /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <FaUser className="h-16 w-16 text-green-600" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{user?.name}</h2>
                <p className="text-gray-600 mb-4">{user?.email}</p>
                
                {user?.isAdmin && (
                  <span className="px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                    Admin Account
                  </span>
                )}
                
                {user?.isWholesale && (
                  <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Wholesale Account
                  </span>
                )}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Account Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Email Verified</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Verified
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Phone Verified</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="text-green-600">{stat.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
                
                <Button
                  variant={isEditing ? 'outline' : 'primary'}
                  size="sm"
                  icon={isEditing ? <FaTimes /> : <FaEdit />}
                  onClick={() => {
                    if (isEditing) {
                      setFormData({
                        name: user?.name || '',
                        email: user?.email || '',
                        phone: user?.phone || '',
                        address: user?.address || '',
                        city: user?.city || '',
                        pincode: user?.pincode || '',
                      });
                    }
                    setIsEditing(!isEditing);
                  }}
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </Button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="h-4 w-4" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isEditing 
                            ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                            : 'border-transparent bg-gray-50'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="h-4 w-4" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isEditing 
                            ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                            : 'border-transparent bg-gray-50'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FaPhone className="h-4 w-4" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isEditing 
                            ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                            : 'border-transparent bg-gray-50'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FaMapMarkerAlt className="h-4 w-4" />
                        Pincode
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isEditing 
                            ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                            : 'border-transparent bg-gray-50'
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FaMapMarkerAlt className="h-4 w-4" />
                      Address
                    </label>
                    <textarea
                      name="address"
                      rows="3"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isEditing 
                          ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                          : 'border-transparent bg-gray-50'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FaMapMarkerAlt className="h-4 w-4" />
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isEditing 
                          ? 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                          : 'border-transparent bg-gray-50'
                      }`}
                    />
                  </div>
                </div>
                
                {isEditing && (
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex justify-end gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsEditing(false);
                          setFormData({
                            name: user?.name || '',
                            email: user?.email || '',
                            phone: user?.phone || '',
                            address: user?.address || '',
                            city: user?.city || '',
                            pincode: user?.pincode || '',
                          });
                        }}
                      >
                        Cancel
                      </Button>
                      
                      <Button
                        type="submit"
                        variant="primary"
                        icon={<FaSave />}
                        loading={loading}
                        disabled={loading}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
            
            {/* Account Security */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Account Security</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Change Password</h4>
                    <p className="text-sm text-gray-600">Update your password regularly</p>
                  </div>
                  <Button variant="outline" size="sm">Change</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600">Add extra security to your account</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Login Activity</h4>
                    <p className="text-sm text-gray-600">View recent login attempts</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;