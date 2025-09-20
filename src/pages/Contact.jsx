import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Send us a message or visit our studio.</p>

      <div className="contact-grid">
        <ContactForm />
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="GreenLeaf Yoga Studio Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
