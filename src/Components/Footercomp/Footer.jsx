import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";
import logo from "../../assets/footer-logo.png";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const validateEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    try {
      const response = await axios.post(
        'https://api.dental.e-consystems.com/api/validateEmail',
        { email }
      );
      return (
        ['valid', 'catch-all', 'role-basic'].includes(response.data.status) &&
        !response.data.free_email
      );
    } catch (error) {
      console.error('Email validation error:', error);
      return false;
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!email) {
      setIsValid(false);
      setMessage('Please enter an email address.');
      return;
    }

    const isValidEmail = await validateEmail();
    if (!isValidEmail) {
      setIsValid(false);
      setMessage('Please enter a valid business email address.');
      return;
    }

    try {
      await axios.post('https://api.dental.e-consystems.com/api/emailSubscription', { email });
      setEmail('');
      setIsValid(true);
      setMessage('Thank you for subscribing!');
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Subscription failed. Please try again.');
    }
  };

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
              <form onSubmit={handleSubscribe}>
                <div className="subscribe-box">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={!isValid ? "input-error" : ""}
                    required
                  />
                  <button type="submit">Subscribe</button>
                </div>
                {message && (
                  <p style={{ color: isValid ? 'green' : 'white', fontSize: '13px', marginTop: '5px' }}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
