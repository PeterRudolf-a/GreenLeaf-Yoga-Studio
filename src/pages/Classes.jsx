import React from 'react';
import Card from '../components/Card';

import morningFlowImg from '../assets/morning-flow.jpg';
import powerYogaImg from '../assets/power-yoga.jpg';
import restorativeImg from '../assets/restorative.jpg';

export default function Classes() {
  const classes = [
    {
      image: morningFlowImg,
      title: 'Morning Flow',
      subtitle: 'Monday · 7:00 AM',
      description: 'Start your week with energy and mindfulness.',
      instructor: 'Anna Lee',
    },
    {
      image: powerYogaImg,
      title: 'Power Yoga',
      subtitle: 'Wednesday · 6:00 PM',
      description: 'Build strength and flexibility with dynamic sequences.',
      instructor: 'Ravi Kumar',
    },
    {
      image: restorativeImg,
      title: 'Restorative Yoga',
      subtitle: 'Friday · 5:00 PM',
      description: 'Relax, release tension, and restore balance.',
      instructor: 'Sofia Martinez',
    },
  ];

  return (
    <div className="page">
      <h1>Class Schedule</h1>
      <div className="card-grid">
        {classes.map((yogaClass, index) => (
          <Card
            key={index}
            image={yogaClass.image}
            title={yogaClass.title}
            subtitle={yogaClass.subtitle}
            description={`${yogaClass.description} — Instructor: ${yogaClass.instructor}`}
          >
            <button className="btn">Book Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
