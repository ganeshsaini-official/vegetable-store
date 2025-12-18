import { useAuth } from "../context/AuthContext";

export const useUserRole = () => {
  const { user, isAdmin, isWholesale, isLoggedIn } = useAuth();

  const hasRole = (role) => {
    if (!user) return false;
    if (role === "admin") return isAdmin;
    if (role === "wholesale") return isWholesale;
    if (role === "customer") return !isAdmin && !isWholesale;
    return false;
  };

  return { user, isLoggedIn, hasRole };
};
