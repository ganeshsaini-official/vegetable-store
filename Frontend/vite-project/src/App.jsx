import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wholesale from "./pages/Wholesale";

import AdminRoutes from "./admin/routes/AdminRoutes";

const App = () => {
  const location = useLocation();

  // admin pages par navbar hide
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* FRONTEND ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔥 ADMIN ROUTES (MOST IMPORTANT) */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </>
  );
};

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { CartProvider } from './context/CartContext';

// // Import all pages
// import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AdminDashboard from './pages/AdminDashboard';
// import AdminProducts from './pages/AdminProducts';
// import AdminAddProduct from './pages/AdminAddProduct';
// import AdminEditProduct from './pages/AdminEditProduct';

// // Import components
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

// function App() {
//     return (
//         <Router>
//             <AuthProvider>
//                 <CartProvider>
//                     <div className="flex flex-col min-h-screen">
//                         <Navbar />
//                         <main className="flex-grow">
//                             <Routes>
//                                 {/* Public Routes */}
//                                 <Route path="/" element={<Home />} />
//                                 <Route path="/products" element={<Products />} />
//                                 <Route path="/products/:id" element={<ProductDetails />} />
//                                 <Route path="/cart" element={<Cart />} />
//                                 <Route path="/checkout" element={<Checkout />} />
//                                 <Route path="/login" element={<Login />} />
//                                 <Route path="/register" element={<Register />} />
                                
//                                 {/* Admin Routes */}
//                                 <Route path="/admin/dashboard" element={<AdminDashboard />} />
//                                 <Route path="/admin/products" element={<AdminProducts />} />
//                                 <Route path="/admin/add-product" element={<AdminAddProduct />} />
//                                 <Route path="/admin/edit-product/:id" element={<AdminEditProduct />} />
//                             </Routes>
//                         </main>
//                         <Footer />
//                     </div>
//                 </CartProvider>
//             </AuthProvider>
//         </Router>
//     );
// }

// export default App;