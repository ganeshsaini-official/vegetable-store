import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../context/CartContext";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const { isLoggedIn, isAdmin, user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav style={styles.nav}>
      {/* LEFT */}
      <div style={styles.left}>
        <h2 style={styles.logo}>MyStore</h2>
      </div>

      {/* CENTER */}
      <ul style={styles.center}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/categories" style={styles.link}>Categories</Link></li>
        <li><Link to="/products" style={styles.link}>Shop</Link></li>
        <li><Link to="/wholesale" style={styles.link}>Wholesale</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        {isAdmin && <li><Link to="/admin/dashboard" style={styles.link}>Admin</Link></li>}
      </ul>

      {/* RIGHT */}
      <ul style={styles.right}>
        <li>
          <Link to="/cart" style={styles.link}>
            <ShoppingCart fontSize="large" />
            {cart.length > 0 && (
              <span style={styles.cartCount}>{cart.length}</span>
            )}
          </Link>
        </li>

        {!isLoggedIn ? (
          <>
            <li><Link to="/login" style={styles.link}>Login</Link></li>
            <li><Link to="/register" style={styles.link}>Register</Link></li>
          </>
        ) : (
          <ProfileDropdown user={user} logout={logout} />
        )}
      </ul>
    </nav>
  );
};

const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", background: "#e91e63", color: "#fff" },
  left: {},
  center: { display: "flex", listStyle: "none", gap: "15px" },
  right: { display: "flex", listStyle: "none", gap: "15px", alignItems: "center" },
  logo: { margin: 0 },
  link: { textDecoration: "none", color: "#fff", fontWeight: "500", position: "relative" },
  cartCount: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    background: "yellow",
    color: "#000",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};

export default Navbar;
