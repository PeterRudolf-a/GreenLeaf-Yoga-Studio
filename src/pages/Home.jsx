import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

const services = [
    {
        title: 'Relaxation',
        description: 'Experience deep relaxation and stress relief with our guided yoga sessions.',
        icon: '🧘‍♂️',
    },
    {
        title: 'Flexibility',
        description: 'Improve your flexibility and mobility through regular practice.',
        icon: '🤸‍♀️',
    },
    {
        title: 'Health',
        description: 'Boost your overall health and wellness with our holistic approach.',
        icon: '🌱',
    },
];

const featuredClasses = [
    {
        title: 'Morning Flow',
        description: 'Start your day with energy and positivity.',
        image: '/images/morning-flow.jpg',
    },
    {
        title: 'Yin Yoga',
        description: 'Slow-paced, deep stretching for relaxation.',
        image: '/images/yin-yoga.jpg',
    },
    {
        title: 'Power Yoga',
        description: 'Dynamic and challenging for strength and stamina.',
        image: '/images/power-yoga.jpg',
    },
];

const Home = () => (
    <div>
        <Hero
            backgroundImage="/images/hero-bg.jpg"
            title="Welcome to GreenLeaf Yoga Studio"
            buttonText="Join a Class"
            buttonLink="/classes"
        />

        <section style={{ padding: '3rem 0', background: '#f7fafc' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Benefits</h2>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap'
            }}>
                {services.map((service) => (
                    <div key={service.title} style={{
                        background: '#fff',
                        borderRadius: '1rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                        padding: '2rem',
                        width: '260px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section style={{ padding: '3rem 0' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Classes</h2>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap'
            }}>
                {featuredClasses.map((cls) => (
                    <Card
                        key={cls.title}
                        title={cls.title}
                        description={cls.description}
                        image={cls.image}
                    />
                ))}
            </div>
        </section>
    </div>
);

export default Home;