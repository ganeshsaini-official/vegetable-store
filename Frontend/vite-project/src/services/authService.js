import api from "./api";

const TOKEN_KEY = "authToken";
const USER_KEY = "user";

export const authService = {
  // 🔐 LOGIN
  login: async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const { token, user } = res.data;

      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));

      return { token, user };
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login failed");
    }
  },

  // 📝 REGISTER
  register: async (userData) => {
    try {
      const res = await api.post("/auth/register", userData);
      const { token, user } = res.data;

      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));

      return { token, user };
    } catch (err) {
      throw new Error(err.response?.data?.message || "Registration failed");
    }
  },

  // 👤 GET PROFILE
  getProfile: async () => {
    const res = await api.get("/auth/profile");
    return res.data;
  },

  // ✏️ UPDATE PROFILE
  updateProfile: async (profileData) => {
    const res = await api.put("/auth/profile", profileData);

    const user = authService.getCurrentUser();
    const updatedUser = { ...user, ...res.data };

    localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
    return updatedUser;
  },

  // 🔑 CHANGE PASSWORD
  changePassword: async (currentPassword, newPassword) => {
    const res = await api.put("/auth/change-password", {
      currentPassword,
      newPassword,
    });
    return res.data;
  },

  // 🚪 LOGOUT
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  // ✅ HELPERS
  isAuthenticated: () => !!localStorage.getItem(TOKEN_KEY),

  getToken: () => localStorage.getItem(TOKEN_KEY),

  getCurrentUser: () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  isAdmin: () => authService.getCurrentUser()?.isAdmin || false,

  isWholesale: () =>
    authService.getCurrentUser()?.isWholesale || false,
};

export default authService;
