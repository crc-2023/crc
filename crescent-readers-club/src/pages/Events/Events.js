import React from 'react';
import events from '../../data/eventsData';
import EventCard from '../../components/Card/EventCard';
import './Events.css';

export default function Events() {
  return (
    <div className="section">
      <h1>Events & Activities</h1>
      <p>Explore past and upcoming sessions, workshops, and readings.</p>
      <div className="grid">
        {events.map(e => <EventCard key={e.id} event={e} />)}
      </div>
    </div>
  );
}
