import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, FaHome, FaBuilding, FaPlus, 
  FaEdit, FaTrash, FaCheck, FaTimes 
} from 'react-icons/fa';
import Button from '../../components/Common/Button';
import { toast } from 'react-hot-toast';

const Addresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'home',
      name: 'Home',
      fullName: 'John Doe',
      phone: '+91 99999 99999',
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      landmark: 'Near City Mall',
      isDefault: true,
    },
    {
      id: 2,
      type: 'work',
      name: 'Office',
      fullName: 'John Doe',
      phone: '+91 88888 88888',
      address: '456 Business Center, Floor 8',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400002',
      landmark: 'Opposite Railway Station',
      isDefault: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    type: 'home',
    name: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing address
      setAddresses(addresses.map(addr => 
        addr.id === editingId ? { ...formData, id: editingId } : addr
      ));
      toast.success('Address updated successfully');
    } else {
      // Add new address
      const newAddress = { ...formData, id: Date.now() };
      setAddresses([...addresses, newAddress]);
      toast.success('Address added successfully');
    }
    
    resetForm();
  };

  const handleEdit = (address) => {
    setFormData(address);
    setEditingId(address.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
      toast.success('Address deleted successfully');
    }
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id,
    })));
    toast.success('Default address updated');
  };

  const resetForm = () => {
    setFormData({
      type: 'home',
      name: '',
      fullName: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      landmark: '',
      isDefault: false,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const getAddressIcon = (type) => {
    switch (type) {
      case 'home':
        return <FaHome className="h-5 w-5" />;
      case 'work':
        return <FaBuilding className="h-5 w-5" />;
      default:
        return <FaMapMarkerAlt className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaMapMarkerAlt className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">My Addresses</h1>
          </div>
          <p className="text-gray-600">
            Manage your delivery addresses for faster checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Address List */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Button
                variant="primary"
                icon={<FaPlus />}
                onClick={() => setShowForm(true)}
              >
                Add New Address
              </Button>
            </div>

            {addresses.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <FaMapMarkerAlt className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No addresses saved</h3>
                <p className="text-gray-600 mb-6">
                  Add your first address for faster checkout
                </p>
                <Button variant="primary" onClick={() => setShowForm(true)}>
                  Add Address
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <div 
                    key={address.id} 
                    className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${
                      address.isDefault ? 'border-green-500' : 'border-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          address.type === 'home' ? 'bg-green-100' : 'bg-blue-100'
                        }`}>
                          <div className={`${
                            address.type === 'home' ? 'text-green-600' : 'text-blue-600'
                          }`}>
                            {getAddressIcon(address.type)}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{address.name}</h3>
                          {address.isDefault && (
                            <span className="text-xs text-green-600 font-medium">Default</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(address)}
                          className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                          <FaEdit className="h-3 w-3 text-gray-600" />
                        </button>
                        <button
                          onClick={() => handleDelete(address.id)}
                          className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200"
                        >
                          <FaTrash className="h-3 w-3 text-red-600" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <p className="font-medium text-gray-900">{address.fullName}</p>
                      <p className="text-gray-600">{address.phone}</p>
                      <p className="text-gray-600">{address.address}</p>
                      <p className="text-gray-600">
                        {address.city}, {address.state} - {address.pincode}
                      </p>
                      {address.landmark && (
                        <p className="text-sm text-gray-500">Landmark: {address.landmark}</p>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {!address.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          icon={<FaCheck />}
                          onClick={() => handleSetDefault(address.id)}
                        >
                          Set as Default
                        </Button>
                      )}
                      
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex-1"
                        onClick={() => {
                          // Use this address for checkout
                          toast.success(`${address.name} selected for delivery`);
                        }}
                      >
                        Deliver Here
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Address Form */}
          {showForm && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {editingId ? 'Edit Address' : 'Add New Address'}
                  </h2>
                  <button
                    onClick={resetForm}
                    className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                  >
                    <FaTimes className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address Type
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'home', label: 'Home', icon: <FaHome /> },
                          { value: 'work', label: 'Office', icon: <FaBuilding /> },
                          { value: 'other', label: 'Other', icon: <FaMapMarkerAlt /> },
                        ].map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, type: type.value }))}
                            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border ${
                              formData.type === type.value
                                ? 'border-green-600 bg-green-50 text-green-700'
                                : 'border-gray-300 hover:border-green-400'
                            }`}
                          >
                            {type.icon}
                            <span>{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="e.g., Home, Office"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter pincode"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <textarea
                        name="address"
                        required
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="House no., Building, Street, Area"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="City"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="State"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Landmark (Optional)
                      </label>
                      <input
                        type="text"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Nearby landmark"
                      />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="isDefault"
                        checked={formData.isDefault}
                        onChange={handleChange}
                        className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label className="text-sm text-gray-700">
                        Set as default address
                      </label>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForm}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      
                      <Button
                        type="submit"
                        variant="primary"
                        className="flex-1"
                      >
                        {editingId ? 'Update Address' : 'Save Address'}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Addresses;