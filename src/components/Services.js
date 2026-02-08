import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'Custom Art',
      description: 'Commission unique artwork tailored to your vision. Work directly with our talented artists to create one-of-a-kind pieces.',
      features: ['Personal consultation', 'Multiple revisions', 'Digital preview']
    },
    {
      id: 2,
      icon: '🖼️',
      title: 'Professional Framing',
      description: 'Expert framing services to preserve and enhance your artwork. Choose from premium materials and styles.',
      features: ['Premium materials', 'Custom sizing', 'Protection guarantee']
    },
    {
      id: 3,
      icon: '📱',
      title: 'Digital Prints',
      description: 'High-resolution digital prints ready for instant download. Perfect for modern displays and digital galleries.',
      features: ['4K resolution', 'Instant download', 'Multiple formats']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive art solutions for every need
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
                <div className="service-icon-glow"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-cta">Learn More</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
