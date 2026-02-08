import React from 'react';
import './TrustBadges.css';

const TrustBadges = () => {
  const badges = [
    {
      id: 1,
      icon: '⭐',
      title: 'Premium Quality',
      description: 'Curated selection of high-quality artwork'
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction or your money back'
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Secure Checkout',
      description: 'Bank-level encryption for all transactions'
    },
    {
      id: 4,
      icon: '🚚',
      title: 'Fast Shipping',
      description: 'Free shipping on orders over $50'
    },
    {
      id: 5,
      icon: '💬',
      title: '24/7 Support',
      description: 'Expert customer service always available'
    },
    {
      id: 6,
      icon: '🎁',
      title: 'Loyalty Rewards',
      description: 'Earn points with every purchase'
    }
  ];

  return (
    <section className="trust-badges" id="trust">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Trusted by thousands of art enthusiasts worldwide
          </p>
        </div>
        <div className="badges-grid">
          {badges.map((badge) => (
            <div key={badge.id} className="badge-card">
              <div className="badge-icon-wrapper">
                <div className="badge-icon">{badge.icon}</div>
              </div>
              <h3 className="badge-title">{badge.title}</h3>
              <p className="badge-description">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
