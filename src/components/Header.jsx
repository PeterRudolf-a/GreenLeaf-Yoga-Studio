import React from 'react';

const Header = () => (
    <header style={{
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '1.5rem 0',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
    }}>
        <h1 style={{ margin: 0, fontFamily: 'Segoe UI, sans-serif', fontWeight: 700 }}>
            GreenLeaf Yoga Studio
        </h1>
        <p style={{ marginTop: '0.5rem', fontSize: '1.2rem', fontFamily: 'Segoe UI, sans-serif' }}>
            Find your balance. Grow with us.
        </p>
        <nav style={{ marginTop: '1rem' }}>
            <a href="#home" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none', fontWeight: 500 }}>Home</a>
            <a href="#classes" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none', fontWeight: 500 }}>Classes</a>
            <a href="#instructors" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none', fontWeight: 500 }}>Instructors</a>
            <a href="#contact" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none', fontWeight: 500 }}>Contact</a>
        </nav>
    </header>
);

export default Header;