import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart from backend
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      const res = await fetch("http://localhost:5000/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCart(data.items || []);
    } catch (err) {
      console.error("Fetch cart error:", err);
    }
  };

  // Add to cart (backend + state)
  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) return alert("Please login first");

      const res = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      const data = await res.json();
      if (data.success) {
        await fetchCart(); // refresh state
      } else {
        alert(data.message || "Failed to add cart");
      }
    } catch (err) {
      console.error("Add to cart error:", err);
    }
  };

  useEffect(() => {
    fetchCart(); // load cart on mount
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};
