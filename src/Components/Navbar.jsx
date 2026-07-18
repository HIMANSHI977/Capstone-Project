import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>Nexus Store</h2>

      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/products">Products</Link>{" "}
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}