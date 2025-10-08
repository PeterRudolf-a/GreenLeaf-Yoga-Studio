import React from 'react';
import Card from '../components/Card';

import annaImg from '../assets/instructor-anna.jpeg';
import raviImg from '../assets/instructor-ravi.jpeg';
import sofiaImg from '../assets/instructor-sofia.jpeg';

export default function Instructors() {
  return (
    <div className="page">
      <h1>Meet Our Instructors</h1>
      <div className="card-grid">
        <Card
          image={annaImg}
          title="Anna Lee"
          description="Specializes in Vinyasa Flow and beginner-friendly sessions."
        >
          <a href="https://instagram.com/anna" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </Card>
        <Card
          image={raviImg}
          title="Ravi Kumar"
          description="Expert in meditation, mindfulness, and restorative yoga."
        >
          <a href="https://instagram.com/ravi" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </Card>
        <Card
          image={sofiaImg}
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
