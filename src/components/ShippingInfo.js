import React from 'react';
import './ShippingInfo.css';

const ShippingInfo = () => {
  const shippingOptions = [
    {
      id: 1,
      name: 'Standard Shipping',
      time: '5-7 Business Days',
      price: 'Free',
      icon: '📦'
    },
    {
      id: 2,
      name: 'Express Shipping',
      time: '2-3 Business Days',
      price: '$9.99',
      icon: '🚀'
    },
    {
      id: 3,
      name: 'Overnight',
      time: 'Next Business Day',
      price: '$19.99',
      icon: '⚡'
    },
    {
      id: 4,
      name: 'International',
      time: '7-14 Business Days',
      price: 'From $15.99',
      icon: '🌍'
    }
  ];

  return (
    <section className="shipping-info" id="shipping">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Shipping & Delivery</h2>
          <p className="section-subtitle">
            Fast and reliable shipping options to get your artwork to you
          </p>
        </div>
        <div className="shipping-grid">
          {shippingOptions.map((option) => (
            <div key={option.id} className="shipping-card">
              <div className="shipping-icon">{option.icon}</div>
              <h3 className="shipping-name">{option.name}</h3>
              <p className="shipping-time">{option.time}</p>
              <p className="shipping-price">{option.price}</p>
            </div>
          ))}
        </div>
        <div className="shipping-features">
          <div className="feature-item">
            <span className="feature-icon">📍</span>
            <div>
              <h4>Real-Time Tracking</h4>
              <p>Track your order from warehouse to your door</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <div>
              <h4>Secure Packaging</h4>
              <p>Professional packaging ensures safe delivery</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📞</span>
            <div>
              <h4>24/7 Support</h4>
              <p>Our team is always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
