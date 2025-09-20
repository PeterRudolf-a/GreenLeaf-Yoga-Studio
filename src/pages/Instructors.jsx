import React from 'react';
import Card from '../components/Card';

export default function Instructors() {
  return (
    <div className="page">
      <h1>Meet Our Instructors</h1>
      <div className="card-grid">
        <Card
          image="/assets/instructor-anna.jpg"
          title="Anna Lee"
          description="Specializes in Vinyasa Flow and beginner-friendly sessions."
        >
          <a href="https://instagram.com/anna" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </Card>
        <Card
          image="/assets/instructor-ravi.jpg"
          title="Ravi Kumar"
          description="Expert in meditation, mindfulness, and restorative yoga."
        >
          <a href="https://instagram.com/ravi" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </Card>
        <Card
          image="/assets/instructor-sofia.jpg"
          title="Sofia Martinez"
          description="Focuses on strength, alignment, and breathwork."
        >
          <a href="https://instagram.com/sofia" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </Card>
      </div>
    </div>
  );
}
