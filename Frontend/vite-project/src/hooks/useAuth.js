import { useContext } from 'react';
import  AuthContext  from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

// Additional hook for checking specific roles
export const useUserRole = () => {
  const { user, isAdmin, isWholesale, isLoggedIn } = useAuth();
  
  const hasRole = (role) => {
    if (!user) return false;
    
    switch (role) {
      case 'admin':
        return isAdmin;
      case 'wholesale':
        return isWholesale;
      case 'customer':
        return !isAdmin && !isWholesale;
      default:
        return false;
    }
  };
  
  const hasAnyRole = (roles) => {
    return roles.some(role => hasRole(role));
  };
  
  const hasAllRoles = (roles) => {
    return roles.every(role => hasRole(role));
  };
  
  return {
    user,
    isAdmin,
    isWholesale,
    isLoggedIn,
    hasRole,
    hasAnyRole,
    hasAllRoles,
  };
};

// Hook for protected route access
export const useRouteAccess = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  
  const canAccess = (route) => {
    switch (route) {
      case '/admin':
      case '/admin/dashboard':
      case '/admin/products':
      case '/admin/orders':
      case '/admin/users':
      case '/admin/wholesale':
        return isLoggedIn && isAdmin;
      
      case '/profile':
      case '/my-orders':
      case '/addresses':
        return isLoggedIn;
      
      case '/wholesale':
        return true; // Everyone can access wholesale page
      
      default:
        return true; // Public routes
    }
  };
  
  return { canAccess };
};