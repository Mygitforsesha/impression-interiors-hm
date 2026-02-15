import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission (e.g. email API or WhatsApp)
    const text = `Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    const whatsapp = `https://wa.me/1234567890?text=${encodeURIComponent(text)}`;
    window.open(whatsapp, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact-heading">Book a Free Consultation</h2>
        <p className="contact-sub">Tell us about your space. We’ll get back within 24 hours.</p>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="contact-label">
            <span className="contact-label-text">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your name"
              required
              autoComplete="name"
            />
          </label>
          <label className="contact-label">
            <span className="contact-label-text">Phone</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="contact-input"
              placeholder="+1 234 567 8900"
              required
              autoComplete="tel"
            />
          </label>
          <label className="contact-label">
            <span className="contact-label-text">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="contact-input contact-textarea"
              placeholder="Brief description of your project..."
              rows={4}
              required
            />
          </label>
          <button type="submit" className="contact-submit">
            Book Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
