import React from 'react';
import './PaymentMethods.css';

const PaymentMethods = () => {
  const paymentMethods = [
    { id: 1, name: 'Credit Cards', icon: '💳', description: 'Visa, Mastercard, Amex' },
    { id: 2, name: 'PayPal', icon: '🔵', description: 'Secure PayPal checkout' },
    { id: 3, name: 'Apple Pay', icon: '🍎', description: 'Quick & secure payment' },
    { id: 4, name: 'Google Pay', icon: '📱', description: 'One-tap checkout' },
    { id: 5, name: 'Cryptocurrency', icon: '₿', description: 'BTC, ETH, USDC' },
    { id: 6, name: 'Bank Transfer', icon: '🏦', description: 'Direct bank transfer' }
  ];

  return (
    <section className="payment-methods" id="payment">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Secure Payment Methods</h2>
          <p className="section-subtitle">
            Your transactions are protected with industry-leading security
          </p>
        </div>
        <div className="payment-grid">
          {paymentMethods.map((method) => (
            <div key={method.id} className="payment-card">
              <div className="payment-icon">{method.icon}</div>
              <h3 className="payment-name">{method.name}</h3>
              <p className="payment-description">{method.description}</p>
            </div>
          ))}
        </div>
        <div className="security-badge">
          <div className="badge-icon">🔒</div>
          <div className="badge-content">
            <h3>256-bit SSL Encryption</h3>
            <p>All payments are processed securely with bank-level encryption</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
