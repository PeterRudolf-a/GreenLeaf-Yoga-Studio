import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Send us a message or visit our studio.</p>

      <ContactForm />

      {/* Dummy Google Maps Embed */}
      <div style={{ marginTop: "2rem" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.727102331948!2d-79.38393428450446!3d43.65322597912182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9aa7e4fcb%3A0x93c5e2a30b7f8b8d!2sToronto%20City%20Hall!5e0!3m2!1sen!2sca!4v1694012345678"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dummy Map"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
