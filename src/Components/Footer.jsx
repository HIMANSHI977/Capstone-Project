import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>Nexus Store</h2>

          <p>
            Discover premium products at unbeatable prices.
            Shop with confidence and enjoy a seamless shopping experience.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Support</h3>

          <ul>
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@nexusstore.com</p>

          <p>Phone: +91 98765 43210</p>

          <p>India</p>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        © 2026 Nexus Store. All Rights Reserved.
      </div>

    </footer>
  );
}