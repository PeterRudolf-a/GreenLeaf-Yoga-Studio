import React from 'react';
import Card from '../components/Card';

export default function Classes() {
  const classes = [
    {
      image: '/assets/morning-flow.jpg',
      title: 'Morning Flow',
      subtitle: 'Monday · 7:00 AM',
      description: 'Start your week with energy and mindfulness.',
      instructor: 'Anna Lee',
    },
    {
      image: '/assets/power-yoga.jpg',
      title: 'Power Yoga',
      subtitle: 'Wednesday · 6:00 PM',
      description: 'Build strength and flexibility with dynamic sequences.',
      instructor: 'Ravi Kumar',
    },
    {
      image: '/assets/restorative.jpg',
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
