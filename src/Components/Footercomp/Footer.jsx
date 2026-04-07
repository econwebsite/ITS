import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Footer.css";
import logo from "../../assets/footer-logo.png";
import AnimatedButton from "../Button comp/AnimatedButton"
import { message } from "antd";
const Footer = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubscribedOnce, setIsSubscribedOnce] = useState(false);
  const year = new Date().getFullYear();
  const validateEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    try {
      const response = await axios.post('https://api.dental.e-consystems.com/api/validateEmail', { email });
      return (
        (['valid', 'catch-all', 'role-basic'].includes(response.data.status) && !response.data.free_email) ||
        response.data.isValid === true
      );

    } catch (error) {
      console.error('Email validation error:', error);
      return false;
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (isSubscribedOnce) {
      message.warning('You have already subscribed.');
      return;
    }
    setIsProcessing(true);
    setIsComplete(false);
    setIsValid(true);

    if (!email) {
      setIsValid(false);
      setIsProcessing(false);
      return;
    }

    const isValidEmail = await validateEmail();
    if (!isValidEmail) {
      setIsValid(false);
      setIsProcessing(false);
      return;
    }

    try {
      await axios.post('https://api.dental.e-consystems.com/api/emailSubscription', { email });
      message.success('Thank you for subscribing!');
      setEmail('');
      setIsComplete(true);
      setIsSubscribedOnce(true);
    } catch (error) {
      console.error('Subscription error:', error);
      message.error('Subscription failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (isComplete || !isValid) {
      const timer = setTimeout(() => {
        setIsComplete(false);
        setIsValid(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isComplete, isValid]);
  return (
    <div className="footer">
      <div className="footer-overlay">
        <div className="footer-container">
         

          <div className="footer-columns">
            <div className="footer-col left">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/case-study">Case Studies</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/company/contact-us">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col left">
              <h3>Products</h3>
              <ul className="footer-links">
                <li><Link to="/products/anpr-alpr-bullet-cameras">ALPR Cameras</Link></li>
                <li><Link to="/products/ai-vision-box">AI Vision Box</Link></li>
                <li><Link to="/products/license-plate-recognition-software">ALPR SDK</Link></li>
              </ul>
            </div>
                    <div className="footer-col center">
            <h3>Contact Us</h3>
            <p className="footer-address">
              e-con Systems&reg;<br />
              3340 Walnut Avenue, Suite #280,<br />
              Fremont, CA 94538
            </p>

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
                     onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                     onChange={(e) => setEmail(e.target.value)}
                  className={`Footer-emailInput ${!isValid ? 'Footer-inputError' : ''}`}
                  disabled={isSubscribedOnce}
                    required
                  />
                  <AnimatedButton
                  className="footerproceed-btn"
                  text={isProcessing ? 'Please Wait...' : isSubscribedOnce ? 'Subscribed' : 'Proceed'}
                  backgroundColor="#1e2f7a"
                  animationColor="#69ba2f"
                  hoverColor="#69ba2f"
                  type="submit"
                  disabled={isProcessing || isSubscribedOnce}
                />
              </div>
              {!isValid && <p className="Footer-errorMessage">Please enter a valid email address</p>}
              {isComplete && <p className="Footer-successMessage">Thank you for subscribing!</p>}
              </form>
               <div className="footer-logo-row">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', margin: '0', color: 'rgb(216 219 227)' }}>Copyright&copy; {year} e-con Systems&reg;</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
