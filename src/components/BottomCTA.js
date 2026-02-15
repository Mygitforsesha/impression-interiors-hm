import React from 'react';
import './BottomCTA.css';

const PHONE = 'tel:+1234567890';
const WHATSAPP = 'https://wa.me/1234567890';

const BottomCTA = () => (
  <div className="bottom-cta" role="navigation" aria-label="Quick actions">
    <a href={PHONE} className="bottom-cta-btn" aria-label="Call us">
      <span className="bottom-cta-icon bottom-cta-icon-call" aria-hidden />
      <span className="bottom-cta-label">Call</span>
    </a>
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bottom-cta-btn" aria-label="WhatsApp">
      <span className="bottom-cta-icon bottom-cta-icon-wa" aria-hidden />
      <span className="bottom-cta-label">WhatsApp</span>
    </a>
    <a href="#contact" className="bottom-cta-btn bottom-cta-btn-primary" aria-label="Book free consultation">
      <span className="bottom-cta-label">Book</span>
    </a>
  </div>
);

export default BottomCTA;
