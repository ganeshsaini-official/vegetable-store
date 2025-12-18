import { NavLink } from 'react-router-dom';
import { 
  Dashboard, Inventory, AddBox, 
  ShoppingCart, People, RequestQuote 
} from '@mui/icons-material';

const AdminSidebar = () => {

  const menuItems = [
    { path: '/admin/dashboard', icon: <Dashboard />, label: 'Dashboard' },
    { path: '/admin/products', icon: <Inventory />, label: 'Products' },
    { path: '/admin/products/add', icon: <AddBox />, label: 'Add Product' },
    { path: '/admin/orders', icon: <ShoppingCart />, label: 'Orders' },
    { path: '/admin/users', icon: <People />, label: 'Users' },
    { path: '/admin/wholesale', icon: <RequestQuote />, label: 'Wholesale' },
  ];

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `menu-item ${isActive ? 'active' : ''}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
