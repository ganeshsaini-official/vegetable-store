axios.get("http://localhost:5000/api/products/admin", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
