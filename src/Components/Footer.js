// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="footer-section">
            <h3 className="footer-title">MediCare</h3>
            <p className="footer-description">Providing quality healthcare services to our community.</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <p className="footer-contact">123 Hospital Street</p>
            <p className="footer-contact">City, State 12345</p>
            <p className="footer-contact">Phone: (123) 456-7890</p>
            <p className="footer-contact">Email: info@medicare.com</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
