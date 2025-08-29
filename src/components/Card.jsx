import React from 'react';

const Card = ({ image, title, subtitle, description, children }) => (
    <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        maxWidth: 320,
        background: '#fff',
        overflow: 'hidden',
        margin: '16px auto'
    }}>
        {image && (
            <img
                src={image}
                alt={title}
                style={{ width: '100%', height: 180, objectFit: 'cover' }}
            />
        )}
        <div style={{ padding: '16px' }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '1.25rem', color: '#2e7d32' }}>{title}</h3>
            {subtitle && (
                <h4 style={{ margin: '0 0 8px', fontSize: '1rem', color: '#388e3c', fontWeight: 400 }}>
                    {subtitle}
                </h4>
            )}
            <p style={{ margin: '0 0 12px', color: '#555', fontSize: '0.95rem' }}>{description}</p>
            {children}
        </div>
    </div>
);

export default Card;