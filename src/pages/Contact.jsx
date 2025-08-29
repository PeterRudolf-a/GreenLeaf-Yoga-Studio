import React from 'react';
import ContactForm from '../components/ContactForm';

const GOOGLE_MAPS_EMBED_URL =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019273798905!2d-122.41941548468193!3d37.77492977975937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0b0b0b%3A0x0!2sGreenLeaf%20Yoga%20Studio!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus';

const Contact = () => (
    <div className="contact-page" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <h1>Contact GreenLeaf Yoga Studio</h1>
        <p>
            We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <ContactForm />
        <h2>Our Location</h2>
        <div style={{ borderRadius: 8, overflow: 'hidden', marginTop: 16 }}>
            <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="GreenLeaf Yoga Studio Location"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
);

export default Contact;