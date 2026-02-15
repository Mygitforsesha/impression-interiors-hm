import React from 'react';
import './Footer.css';

const INSTAGRAM_URL = 'https://www.instagram.com/';
const MAIL_TO = 'mailto:hello@impression.com';
const WHATSAPP_URL = 'https://wa.me/1234567890';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-brand">Impression by HM</p>
        <p className="footer-tagline">Luxury interior design</p>
        <div className="footer-social" aria-label="Contact and social links">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
            <span className="footer-social-icon footer-icon-insta" aria-hidden />
            <span className="footer-social-label">Instagram</span>
          </a>
          <a href={MAIL_TO} className="footer-social-link" aria-label="Email us">
            <span className="footer-social-icon footer-icon-mail" aria-hidden />
            <span className="footer-social-label">Mail</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
            <span className="footer-social-icon footer-icon-whatsapp" aria-hidden />
            <span className="footer-social-label">WhatsApp</span>
          </a>
        </div>
        <p className="footer-copy">&copy; {year} Impression by HM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
