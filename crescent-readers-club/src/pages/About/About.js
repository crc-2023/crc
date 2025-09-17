import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page section">
      <h1>About Crescent Readers Club</h1>
      <p>
        Crescent Readers Club is a community for book lovers, poets, and storytellers.
        We host regular readings, discussions, workshops, and produce CresPulse — our newsletter of articles and essays.
      </p>

      <div className="about-grid">
        <div className="card-block">
          <h3>Our Mission</h3>
          <p>To build an inclusive space where readers discover new voices and share insights.</p>
        </div>
        <div className="card-block">
          <h3>Vision</h3>
          <p>A connected, curious reading community celebrating literature, culture, and conversation.</p>
        </div>
        <div className="card-block">
          <h3>What We Do</h3>
          <p>Events, podcasts, newsletters, and curated reading lists.</p>
        </div>
      </div>
    </div>
  );
}
