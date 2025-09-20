import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="page">
      <Hero />

      {/* Benefits Section */}
      <section>
        <h2>Why Choose GreenLeaf Yoga?</h2>
        <div className="card-grid">
          <Card
            image="/assets/relaxation.jpg"
            title="Relaxation"
            description="Calm your mind and release stress with guided yoga flows."
          />
          <Card
            image="/assets/flexibility.jpg"
            title="Flexibility"
            description="Improve your mobility and posture with consistent practice."
          />
          <Card
            image="/assets/health.jpg"
            title="Health"
            description="Boost physical and mental well-being with holistic routines."
          />
        </div>
      </section>

      {/* Featured Classes */}
      <section>
        <h2>Featured Classes</h2>
        <div className="card-grid">
          <Card
            image="/assets/morning-flow.jpg"
            title="Morning Flow"
            description="Start your day with energy and mindfulness."
          />
          <Card
            image="/assets/power-yoga.jpg"
            title="Power Yoga"
            description="Build strength with dynamic sequences."
          />
          <Card
            image="/assets/restorative.jpg"
            title="Restorative Yoga"
            description="Relax and restore balance with calming poses."
          />
        </div>
      </section>
    </div>
  );
}
