import React from 'react';
import './Card.css';

export default function TeamCard({ person }) {
  return (
    <div className="team-card">
      <img src={person.image} alt={person.name} />
      <h4>{person.name}</h4>
      <small className="muted">{person.role}</small>
      <p>{person.bio}</p>
      <div className="team-links">
        {person.linkedIn && <a href={person.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>}
      </div>
    </div>
  );
}
