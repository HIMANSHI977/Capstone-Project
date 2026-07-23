import "./Footer.css";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiSend,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>VELORA</h2>

          <p>
            Timeless shopping for modern lifestyles.
            Curated products designed to elevate your everyday experience.
          </p>

          <div className="social-icons">
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiYoutube /></a>
          </div>

        </div>

        <div className="footer-links">

          <div>

            <h4>Shop</h4>

            <a href="#">All Products</a>
            <a href="#">New Arrivals</a>
            <a href="#">Collections</a>

          </div>

          <div>

            <h4>Customer Care</h4>

            <a href="#">Contact Us</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQs</a>

          </div>

          <div>

            <h4>About Us</h4>

            <a href="#">Our Story</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>

          </div>

          <div>

            <h4>Stay Connected</h4>

            <p>Subscribe for exclusive offers.</p>

            <div className="newsletter">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                <FiSend />
              </button>

            </div>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>© 2026 VELORA. All Rights Reserved.</p>

      </div>

    </footer>
  );
}

export default Footer;