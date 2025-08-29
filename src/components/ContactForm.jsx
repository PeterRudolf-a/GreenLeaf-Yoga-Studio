import React, { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // For Netlify Forms: add data-netlify="true" and a hidden input
    // For EmailJS: replace with your own EmailJS integration if needed
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(form).toString(),
            });
            if (response.ok) {
                setStatus("Message sent! Thank you.");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send. Please try again.");
            }
        } catch {
            setStatus("Failed to send. Please try again.");
        }
    };

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            style={{ maxWidth: 400, margin: "0 auto" }}
        >
            <input type="hidden" name="form-name" value="contact" />
            <h2>Contact Us</h2>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Message
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <button type="submit">Send</button>
            <div style={{ marginTop: 10 }}>{status}</div>
        </form>
    );
};

export default ContactForm;