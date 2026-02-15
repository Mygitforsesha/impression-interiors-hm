import React, { useState } from "react";
import "./Header.css";
// import logo from "public/assets/logo.png";

const WHATSAPP = "https://wa.me/1234567890";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="header-logo" aria-label="Impression by Hemant Matta - Home">
          <img
            src="/assets/logo.png"
            width={48}
            height={48}
            alt="Impression by Hemant Matta"
            className="header-logo-img"
          />
          <span className="header-logo-text">Impression Interiors</span>
        </a>
        <button
          type="button"
          className="hamburger"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ul className="nav-links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={handleNavClick}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-cta" onClick={handleNavClick}>
                Book Free Consultation
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {menuOpen && (
        <div
          className="nav-backdrop"
          aria-hidden
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
