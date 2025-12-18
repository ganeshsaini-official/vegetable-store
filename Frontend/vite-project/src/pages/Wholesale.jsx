import React, { useState } from 'react';
import { FaHotel, FaUtensils, FaUsers, FaBuilding, FaWeightHanging, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Button from '../components/Common/Button';

const Wholesale = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'hotel',
    gstNumber: '',
    address: '',
    city: '',
    monthlyRequirement: '',
    requirements: '',
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);

  const businessTypes = [
    { value: 'hotel', label: 'Hotel', icon: <FaHotel /> },
    { value: 'restaurant', label: 'Restaurant', icon: <FaUtensils /> },
    { value: 'catering', label: 'Catering', icon: <FaUsers /> },
    { value: 'institution', label: 'Institution', icon: <FaBuilding /> },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Wholesale request submitted successfully! Our team will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        businessType: 'hotel',
        gstNumber: '',
        address: '',
        city: '',
        monthlyRequirement: '',
        requirements: '',
        termsAccepted: false,
      });
      
    } catch (error) {
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    { title: 'Bulk Discounts', desc: 'Up to 30% off on bulk orders' },
    { title: 'Priority Delivery', desc: 'Early morning delivery slots' },
    { title: 'Dedicated Support', desc: 'Personal account manager' },
    { title: 'Quality Assurance', desc: 'Premium quality vegetables' },
    { title: 'Flexible Payment', desc: 'Credit facility available' },
    { title: 'Custom Packaging', desc: 'As per your requirements' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wholesale Vegetables</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Premium quality vegetables for hotels, restaurants & businesses
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              variant="white"
              size="lg"
              icon={<FaPhoneAlt />}
              onClick={() => window.location.href = 'tel:+919999999999'}
            >
              Call Now: +91 99999 99999
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              icon={<FaWhatsapp />}
              onClick={() => window.open('https://wa.me/919999999999', '_blank')}
            >
              WhatsApp Inquiry
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaWeightHanging className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Wholesale Clients</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['5 Star Hotels', 'Restaurant Chains', 'Catering Services', 'Corporate Canteens'].map((client) => (
                    <div key={client} className="text-center">
                      <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaBuilding className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="font-medium text-blue-900">{client}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Wholesale Prices</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
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
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your business name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {businessTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, businessType: type.value }))}
                          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border ${
                            formData.businessType === type.value
                              ? 'border-green-600 bg-green-50 text-green-700'
                              : 'border-gray-300 hover:border-green-400'
                          }`}
                        >
                          <span className="text-lg">{type.icon}</span>
                          <span>{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GST Number (Optional)
                    </label>
                    <input
                      type="text"
                      name="gstNumber"
                      value={formData.gstNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="GSTIN number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Requirement (in kg) *
                    </label>
                    <select
                      name="monthlyRequirement"
                      required
                      value={formData.monthlyRequirement}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select monthly requirement</option>
                      <option value="100-500">100-500 kg</option>
                      <option value="500-1000">500-1000 kg</option>
                      <option value="1000-5000">1000-5000 kg</option>
                      <option value="5000+">5000+ kg</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specific Requirements
                    </label>
                    <textarea
                      name="requirements"
                      rows="4"
                      value={formData.requirements}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tell us about your specific vegetable requirements..."
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                    />
                    <label className="text-sm text-gray-600">
                      I agree to receive communication and accept the{' '}
                      <a href="/terms" className="text-green-600 hover:text-green-700 underline">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={loading}
                    disabled={loading}
                  >
                    Submit Wholesale Request
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Our team will contact you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;