import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-brand">Impression by HM</p>
        <p className="footer-tagline">Luxury interior design</p>
        <p className="footer-copy">&copy; {year} Impression by HM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
