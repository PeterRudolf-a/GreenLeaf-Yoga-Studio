import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

import relaxationImg from '../assets/relaxation.jpg';
import flexibilityImg from '../assets/flexibility.jpg';
import healthImg from '../assets/health.jpg';
import morningFlowImg from '../assets/morning-flow.jpg';
import powerYogaImg from '../assets/power-yoga.jpg';
import restorativeImg from '../assets/restorative.jpg';

export default function Home() {
  return (
    <div className="page">
      <Hero />

      {/* Benefits Section */}
      <section>
        <h2>Why Choose GreenLeaf Yoga?</h2>
        <div className="card-grid">
          <Card
            image={relaxationImg}
            title="Relaxation"
            description="Calm your mind and release stress with guided yoga flows."
          />
          <Card
            image={flexibilityImg}
            title="Flexibility"
            description="Improve your mobility and posture with consistent practice."
          />
          <Card
            image={healthImg}
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
            image={morningFlowImg}
            title="Morning Flow"
            description="Start your day with energy and mindfulness."
          />
          <Card
            image={powerYogaImg}
            title="Power Yoga"
            description="Build strength with dynamic sequences."
          />
          <Card
            image={restorativeImg}
            title="Restorative Yoga"
            description="Relax and restore balance with calming poses."
          />
        </div>
      </section>
    </div>
  );
}
