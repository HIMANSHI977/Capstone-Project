import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Cartify</h2>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>

      <div className="nav-icons">

        <NavLink to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span>{cartCount}</span>
        </NavLink>

        <FaUser className="user-icon" />

      </div>
    </nav>
  );
}