import React from 'react';
import './ReturnsPolicy.css';

const ReturnsPolicy = () => {
  return (
    <section className="returns-policy" id="returns">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Returns & Exchange Policy</h2>
          <p className="section-subtitle">
            We want you to be completely satisfied with your purchase
          </p>
        </div>
        <div className="policy-content">
          <div className="policy-card">
            <div className="policy-icon">↩️</div>
            <h3>30-Day Returns</h3>
            <p>
              Return any item within 30 days of delivery for a full refund. 
              Items must be in original condition with all packaging.
            </p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">🔄</div>
            <h3>Easy Exchanges</h3>
            <p>
              Not the right size or style? Exchange for a different item 
              within 60 days. We'll cover return shipping.
            </p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">💰</div>
            <h3>Full Refund</h3>
            <p>
              Receive a full refund to your original payment method within 
              5-7 business days after we receive your return.
            </p>
          </div>
          <div className="policy-card">
            <div className="policy-icon">📦</div>
            <h3>Free Return Shipping</h3>
            <p>
              We provide prepaid return labels for all returns and exchanges. 
              Just print, pack, and drop off at any carrier location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnsPolicy;
