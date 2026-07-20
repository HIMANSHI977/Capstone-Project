import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaStore,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  }

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <h2>Cartify</h2>
          <p>Admin Panel</p>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <FaStore />
            <span>View Storefront</span>
          </NavLink>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <div className="admin-profile">
          <FaUserCircle className="admin-icon" />

          <div>
            <h4>Admin</h4>
            <p>admin@cartify.com</p>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}