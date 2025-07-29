import React from "react";
import "./Footer.css";
import logo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-overlay">
        <div className="footer-container">
          <div className="footer-logo-row">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>

          <div className="footer-columns">
            <div className="footer-col left">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>Home</li>
                <li>Products</li>
                <li>Industries</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="footer-col center">
              <h3>Contact Us</h3>
              <p>
                <a href="tel:+14087667503" style={{ color: "inherit", textDecoration: "none" }}>
                  <i className="ri-phone-fill" style={{ color: "#00aeef" }}></i> +1 408 766 7503
                </a>
              </p>
              <p>
                <a href="mailto:camerasolutions@e-consystems.com" style={{ color: "inherit", textDecoration: "none" }}>
                  <i className="ri-mail-fill" style={{ color: "#00aeef" }}></i> camerasolutions@e-consystems.com
                </a>
              </p>
            </div>
            <div className="footer-col right">
              <h3>Stay Updated</h3>
              <div className="subscribe-box">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
