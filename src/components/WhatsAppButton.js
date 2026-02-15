import React from 'react';
import './WhatsAppButton.css';

const WHATSAPP_URL = 'https://wa.me/1234567890';

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <span className="whatsapp-icon" aria-hidden>WhatsApp</span>
  </a>
);

export default WhatsAppButton;
