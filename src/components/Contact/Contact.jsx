import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-description">
        Feel free to reach out via email at{' '}
        <a href="mailto:arya.ram.dev@outlook.com" className="contact-link">
          arya.ram.dev@outlook.com
        </a>{' '}
        or connect with me on{' '}
        <a href="https://www.linkedin.com/in/example-profile" className="contact-link" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>.
      </p>
    </section>
  );
};

export default Contact;
