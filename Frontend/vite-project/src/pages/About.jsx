import React from 'react';
import { 
  FaHistory, FaUsers, FaAward, FaLeaf, 
  FaTruck, FaHandshake, FaStar, FaMapMarkerAlt 
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaLeaf className="h-8 w-8" />,
      title: 'Farm Fresh',
      description: 'Direct from farms within 24 hours',
    },
    {
      icon: <FaTruck className="h-8 w-8" />,
      title: 'Fast Delivery',
      description: 'Free delivery on orders above ₹500',
    },
    {
      icon: <FaHandshake className="h-8 w-8" />,
      title: 'Trust & Quality',
      description: '30+ years of family business',
    },
    {
      icon: <FaAward className="h-8 w-8" />,
      title: 'Best Prices',
      description: 'Wholesale prices for everyone',
    },
  ];

  const milestones = [
    { year: '1990', title: 'Founded', desc: 'Started as a small vegetable shop' },
    { year: '2000', title: 'Expanded', desc: 'Added wholesale business' },
    { year: '2010', title: 'Modernized', desc: 'Started home delivery' },
    { year: '2020', title: 'Digital', desc: 'Launched online platform' },
    { year: '2023', title: 'Growth', desc: 'Serving 5000+ customers' },
  ];

  const team = [
    { name: 'Ramesh Patel', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { name: 'Suresh Kumar', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
    { name: 'Priya Sharma', role: 'Customer Relations', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786' },
    { name: 'Amit Singh', role: 'Quality Control', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <FaHistory className="h-8 w-8" />
              <span className="text-lg font-medium">Since 1990</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Story: 30+ Years of Freshness
            </h1>
            <p className="text-xl opacity-90">
              A family-owned business dedicated to providing the freshest vegetables 
              directly from farms to your doorstep.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              From Humble Beginnings
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  In 1990, our founder Mr. Ramesh Patel started this journey with a small 
                  vegetable cart in the local market. With dedication and a passion for 
                  quality, we grew from a single cart to one of the most trusted vegetable 
                  suppliers in the city.
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Today, we serve thousands of families, hotels, and restaurants with 
                  farm-fresh vegetables. Our commitment remains the same - provide the 
                  freshest produce at the most reasonable prices.
                </p>
                
                <div className="flex items-center gap-4 mt-8">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FaUsers className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3rd Generation</div>
                    <div className="text-gray-600">Family Business</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e" 
                    alt="Our Shop" 
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <FaMapMarkerAlt className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold text-gray-900">Our Main Store</h3>
                  </div>
                  <p className="text-gray-600">
                    Located in the heart of the vegetable market, serving customers for 30+ years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-6 w-6 bg-green-600 rounded-full border-4 border-white z-10 hidden lg:block"></div>
                  
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  {/* Year */}
                  <div className="lg:w-2/12 text-center my-4 lg:my-0">
                    <div className="inline-block px-4 py-2 bg-green-600 text-white rounded-full font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Empty Space */}
                  <div className="lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <FaStar className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">Trusted by 5000+ Families</h2>
            <p className="text-xl opacity-90 mb-8">
              "For generations, we've been serving the freshest vegetables. 
              Our customers are like family, and their trust is our biggest achievement."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <FaUsers className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-semibold">Ramesh Patel</div>
                <div className="opacity-80">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;