import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: ['Featured Art', 'Custom Art', 'Digital Prints', 'Framing Services'],
    about: ['Our Story', 'Artists', 'Gallery', 'Blog'],
    support: ['Contact Us', 'FAQs', 'Shipping Info', 'Returns'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility']
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🎨</span>
              <span className="logo-text">ArtWork</span>
            </div>
            <p className="footer-description">
              Bringing premium artwork to your space. Experience the future of art commerce.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="Pinterest">📌</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Shop</h3>
            <ul className="footer-links">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">About</h3>
            <ul className="footer-links">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} ArtWork Landing. All rights reserved.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">🔒 Secure</span>
            <span className="footer-badge">✓ Verified</span>
            <span className="footer-badge">⭐ Premium</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
