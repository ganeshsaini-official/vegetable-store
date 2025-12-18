import React from 'react';
import { FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa';

const StatCard = ({ 
  title, 
  value, 
  icon, 
  color = 'green',
  trend = 'neutral',
  trendValue = '0%',
  description 
}) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    pink: 'bg-pink-100 text-pink-600',
  };

  const trendIcons = {
    up: <FaArrowUp className="h-3 w-3" />,
    down: <FaArrowDown className="h-3 w-3" />,
    neutral: <FaMinus className="h-3 w-3" />,
  };

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        
        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
          <div className="text-lg">{icon}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className={trendColors[trend]}>
            {trendIcons[trend]}
          </div>
          <span className={`text-sm font-medium ${trendColors[trend]}`}>
            {trendValue}
          </span>
        </div>
        
        {description && (
          <span className="text-xs text-gray-500 truncate max-w-[120px]">
            {description}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatCard;

// Pre-configured Stat Cards
export const TotalOrdersCard = ({ value, trend, trendValue }) => (
  <StatCard
    title="Total Orders"
    value={value}
    icon="🛒"
    color="blue"
    trend={trend}
    trendValue={trendValue}
    description="Last 30 days"
  />
);

export const RevenueCard = ({ value, trend, trendValue }) => (
  <StatCard
    title="Total Revenue"
    value={value}
    icon="₹"
    color="green"
    trend={trend}
    trendValue={trendValue}
    description="This month"
  />
);

export const CustomersCard = ({ value, trend, trendValue }) => (
  <StatCard
    title="Total Customers"
    value={value}
    icon="👥"
    color="purple"
    trend={trend}
    trendValue={trendValue}
    description="Registered users"
  />
);

export const ProductsCard = ({ value, trend, trendValue }) => (
  <StatCard
    title="Products"
    value={value}
    icon="🥦"
    color="yellow"
    trend={trend}
    trendValue={trendValue}
    description="In stock"
  />
);

export const WholesaleCard = ({ value, trend, trendValue }) => (
  <StatCard
    title="Wholesale Orders"
    value={value}
    icon="🏨"
    color="indigo"
    trend={trend}
    trendValue={trendValue}
    description="Bulk orders"
  />
);

export const PendingOrdersCard = ({ value, trend, trendValue }) => (
  <StatCard
    title="Pending Orders"
    value={value}
    icon="⏳"
    color="red"
    trend={trend}
    trendValue={trendValue}
    description="To be processed"
  />
);