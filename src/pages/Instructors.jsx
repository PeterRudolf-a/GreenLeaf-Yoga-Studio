import React from 'react';
import Card from '../components/Card';

// Sample data for instructors
const instructors = [
    {
        name: 'Sofia Lee',
        photo: '/images/instructors/sofia.jpg',
        bio: 'Certified yoga instructor with 10+ years of experience in Hatha and Vinyasa yoga.',
        social: 'https://instagram.com/sofia.yoga'
    },
    {
        name: 'Raj Patel',
        photo: '/images/instructors/raj.jpg',
        bio: 'Specializes in mindfulness and meditation. Passionate about holistic wellness.',
        social: 'https://facebook.com/rajpatel.yoga'
    },
    {
        name: 'Emily Chen',
        photo: '/images/instructors/emily.jpg',
        bio: 'Expert in restorative yoga and prenatal classes. Loves helping beginners.',
        social: 'https://twitter.com/emilychenyoga'
    },
    // Add more instructors as needed
];

const Instructors = () => (
    <div style={{ padding: '2rem' }}>
        <h1>Meet Our Instructors</h1>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
            }}
        >
            {instructors.map((inst, idx) => (
                <Card key={idx}>
                    <img
                        src={inst.photo}
                        alt={inst.name}
                        style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '8px 8px 0 0'
                        }}
                    />
                    <div style={{ padding: '1rem' }}>
                        <h2 style={{ margin: '0 0 0.5rem 0' }}>{inst.name}</h2>
                        <p style={{ margin: '0 0 1rem 0', color: '#555' }}>{inst.bio}</p>
                        <a
                            href={inst.social}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#2e8b57',
                                textDecoration: 'none',
                                fontWeight: 'bold'
                            }}
                        >
                            Connect
                        </a>
                    </div>
                </Card>
            ))}
        </div>
    </div>
);

export default Instructors;