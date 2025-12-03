import { Link } from "react-router-dom";

const Navbar = () => {
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
      </ul>

      {/* RIGHT */}
      <ul style={styles.right}>
        <li><Link to="/cart" style={styles.link}>Cart</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
        <li><Link to="/admin" style={styles.link}>Admin</Link></li>
      </ul>

    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between", // left - center - right
    alignItems: "center",
    padding: "15px 30px",
    background: "#333",
    color: "white",
  },

  left: {
    flex: 1,
  },

  center: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    listStyle: "none",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
    listStyle: "none",
  },

  logo: { margin: 0 },

  link: { 
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  },
};

export default Navbar;
