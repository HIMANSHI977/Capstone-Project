import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiUser,FiHeart, FiShoppingBag } from "react-icons/fi";
import { useWishlist } from "../context/WishlistContext";
import "./Navbar.css";
import { useCart } from "../context/CartContext";
function Navbar() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  return (
    <header className="navbar">

      {/* Left Navigation */}

      <nav className="nav-left">

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Shop
        </NavLink>

        <HashLink
          smooth
          to="/#collections"
        >
          Collections
        </HashLink>

      </nav>

      {/* Logo */}

      <div className="logo">

        <NavLink to="/">
          V E L O R A
        </NavLink>

      </div>

      {/* Right Navigation */}

      <nav className="nav-right">

        <NavLink
          to="/login"
          className="icon-link"
        >
          <FiUser />
        </NavLink>

        <NavLink
          to="/cart"
          className="bag-link"
        >
          <FiShoppingBag />

          <span className="bag-count">
                {cart.length}

          </span>

        </NavLink>
        <NavLink
  to="/wishlist"
  className="bag-link"
>
  <FiHeart />

  <span className="bag-count">
    {wishlist.length}
  </span>

</NavLink>
      </nav>

    </header>
  );
}

export default Navbar;