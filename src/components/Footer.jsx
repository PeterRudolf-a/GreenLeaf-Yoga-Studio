import React from 'react';

const socialLinks = [
    { href: 'https://facebook.com/greenleafyoga', label: 'Facebook', icon: '🌐' },
    { href: 'https://instagram.com/greenleafyoga', label: 'Instagram', icon: '📸' },
    { href: 'https://twitter.com/greenleafyoga', label: 'Twitter', icon: '🐦' },
];

const Footer = () => (
    <footer style={{
        background: '#2e7d32',
        color: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
        marginTop: '2rem'
    }}>
        <div style={{ marginBottom: '1rem' }}>
            <strong>GreenLeaf Yoga Studio</strong>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
            <span>123 Harmony Lane, Springfield, USA</span>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
            <span>Email: info@greenleafyoga.com | Phone: (555) 123-4567</span>
        </div>
        <div style={{ marginBottom: '1rem' }}>
            {socialLinks.map(link => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#fff',
                        margin: '0 0.5rem',
                        textDecoration: 'none',
                        fontSize: '1.2rem'
                    }}
                    aria-label={link.label}
                >
                    {link.icon}
                </a>
            ))}
        </div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} GreenLeaf Yoga Studio. All rights reserved.
        </div>
    </footer>
);

export default Footer;