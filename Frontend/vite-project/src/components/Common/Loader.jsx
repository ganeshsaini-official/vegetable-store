import React from 'react';

const Loader = ({ size = 'md', variant = 'primary', fullScreen = false, text = 'Loading...' }) => {
  const sizeClasses = {
    xs: 'h-4 w-4 border-2',
    sm: 'h-6 w-6 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
    xl: 'h-16 w-16 border-4',
  };
  
  const variantClasses = {
    primary: 'border-green-200 border-t-green-600',
    secondary: 'border-gray-200 border-t-gray-600',
    white: 'border-white/20 border-t-white',
    danger: 'border-red-200 border-t-red-600',
    success: 'border-green-200 border-t-green-600',
  };
  
  const loader = (
    <div className="flex flex-col items-center justify-center">
      <div className={`animate-spin rounded-full ${sizeClasses[size]} ${variantClasses[variant]}`}></div>
      {text && <p className="mt-3 text-gray-600 text-sm font-medium">{text}</p>}
    </div>
  );
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {loader}
      </div>
    );
  }
  
  return loader;
};

export default Loader;

// Additional Loader Components
export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <Loader size="lg" text="Loading page..." />
  </div>
);

export const ButtonLoader = ({ variant = 'white' }) => (
  <div className="flex items-center justify-center">
    <div className={`h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent ${variant === 'white' ? 'text-white' : 'text-gray-600'}`}></div>
  </div>
);

export const CardLoader = () => (
  <div className="bg-white rounded-lg shadow p-6 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
  </div>
);

export const TableLoader = ({ rows = 5 }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="h-12 bg-gray-200 rounded animate-pulse"></div>
    ))}
  </div>
);