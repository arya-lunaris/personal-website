import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-description">
        Feel free to reach out via email at{' '}
        <a href="mailto:your.email@example.com" className="contact-link">
          your.email@example.com
        </a>{' '}
        or connect with me on LinkedIn.
      </p>
    </section>
  );
};

export default Contact;
