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
            className="contact-form"
        >
            <input type="hidden" name="form-name" value="contact" />

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

            <label>
                Message
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </label>

            <button type="submit">Send</button>
            <div className="status">{status}</div>
        </form>
    );
};

export default ContactForm;
