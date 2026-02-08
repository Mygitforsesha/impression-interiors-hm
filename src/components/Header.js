import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-icon">🎨</span>
            <span className="logo-text">ArtWork</span>
          </div>
          <ul className="nav-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#shipping">Shipping</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cta-button-nav">Shop Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
