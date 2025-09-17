import React from 'react';
import team from '../../data/teamData';
import TeamCard from '../../components/Card/TeamCard';
import './Team.css';

export default function Team() {
  return (
    <div className="section">
      <h1>Our Team</h1>
      <p>Meet the people running the crescent.</p>
      <div className="grid">
        {team.map(t => <TeamCard key={t.id} person={t} />)}
      </div>
    </div>
  );
}
