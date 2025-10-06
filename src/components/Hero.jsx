import React from 'react';

const heroStyle = {
    backgroundImage: 'url("/assets/yoga-hero-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#fff',
    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
    position: 'relative',
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(34, 139, 34, 0.4)', // green overlay
    zIndex: 1,
};

const contentStyle = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
};

const buttonStyle = {
    marginTop: '2rem',
    padding: '0.75rem 2rem',
    fontSize: '1.2rem',
    background: '#228B22',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    transition: 'background 0.2s',
};

const Hero = () => (
    <section style={heroStyle}>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
            <h1>Welcome to GreenLeaf Yoga Studio</h1>
            <p>Find your balance, strength, and peace with our expert-led yoga classes.</p>
            <button
                style={buttonStyle}
                onClick={() => window.location.href = '/classes'}
                aria-label="Join a Class"
            >
                Join a Class
            </button>
        </div>
    </section>
);

export default Hero;