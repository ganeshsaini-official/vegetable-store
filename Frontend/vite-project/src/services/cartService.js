import api from "./api";

// ➕ Add to cart
export const addToCartAPI = (productId, quantity = 1) => {
  return api.post("/cart/add", {
    productId,
    quantity,
  });
};

// 📦 Get cart items
export const getCartAPI = () => {
  return api.get("/cart");
};

// ❌ Remove item
export const removeFromCartAPI = (productId) => {
  return api.delete(`/cart/remove/${productId}`);
};

// 🔄 Update quantity
export const updateCartQuantityAPI = (productId, quantity) => {
  return api.put("/cart/update", {
    productId,
    quantity,
  });
};
