import React, { useState } from 'react';
import { 
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, 
  FaClock, FaFacebook, FaInstagram, FaTwitter, 
  FaPaperPlane, FaCheckCircle 
} from 'react-icons/fa';
import Button from '../components/Common/Button';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! We\'ll contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="h-6 w-6" />,
      title: 'Call Us',
      details: ['+91 99999 99999', '+91 88888 88888'],
      action: (phone) => window.location.href = `tel:${phone}`,
    },
    {
      icon: <FaWhatsapp className="h-6 w-6" />,
      title: 'WhatsApp',
      details: ['+91 99999 99999'],
      action: () => window.open('https://wa.me/919999999999', '_blank'),
    },
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      title: 'Email',
      details: ['support@freshveggies.com', 'orders@freshveggies.com'],
      action: (email) => window.location.href = `mailto:${email}`,
    },
    {
      icon: <FaMapMarkerAlt className="h-6 w-6" />,
      title: 'Visit Us',
      details: ['123 Vegetable Market', 'City Center, Mumbai - 400001'],
      action: () => window.open('https://maps.google.com/?q=123+Vegetable+Market+Mumbai', '_blank'),
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '6:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '6:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '6:00 AM - 9:00 PM' },
    { day: 'Emergency', time: '24/7 WhatsApp Support' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, label: 'Facebook', url: 'https://facebook.com/freshveggies' },
    { icon: <FaInstagram />, label: 'Instagram', url: 'https://instagram.com/freshveggies' },
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://twitter.com/freshveggies' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', url: 'https://wa.me/919999999999' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">
            We're here to help you with fresh vegetables
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-green-600">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <button
                          key={idx}
                          onClick={() => info.action(detail)}
                          className="block text-gray-600 hover:text-green-600 transition-colors text-left"
                        >
                          {detail}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <FaClock className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                </div>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-medium text-green-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
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
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
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
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="complaint">Complaint</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Type your message here..."
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">
                      We respond within 2 hours
                    </span>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<FaPaperPlane />}
                    loading={loading}
                    disabled={loading}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Store</h2>
              
              <div className="rounded-xl overflow-hidden h-96 mb-6">
                {/* Placeholder for Google Map */}
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Vegetable Market Location</p>
                    <p className="text-gray-600">123 Vegetable Market, City Center</p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => window.open('https://maps.google.com/?q=123+Vegetable+Market+Mumbai', '_blank')}
                    >
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
                  <p className="text-gray-600 text-sm">Ample parking space available</p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                  <p className="text-gray-600 text-sm">Wheelchair accessible entrance</p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                  <p className="text-gray-600 text-sm">Home delivery available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Order Related</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 mb-1">What is the minimum order amount?</p>
                  <p className="text-gray-600">Minimum order is ₹200 for home delivery.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">How can I track my order?</p>
                  <p className="text-gray-600">You'll receive WhatsApp updates with live tracking.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Delivery Related</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 mb-1">What are your delivery hours?</p>
                  <p className="text-gray-600">We deliver from 8 AM to 10 PM, 7 days a week.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Do you deliver outside city limits?</p>
                  <p className="text-gray-600">Yes, with additional delivery charges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;