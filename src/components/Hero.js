import React, { useState } from 'react';
import './Hero.css';

/* Portrait hero: replace with your image (WebP in public/ preferred for performance). */
const HERO_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80';

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        {!imgError && (
          <img
            src={HERO_IMAGE}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="hero-bg-img"
            onError={() => setImgError(true)}
          />
        )}
        <div className="hero-bg-overlay" aria-hidden />
      </div>
      <div className="hero-content container">
        <h1 className="hero-headline">Luxury interiors, crafted for you.</h1>
        <a href="#contact" className="hero-cta">
          Book Free Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
