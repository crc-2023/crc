import React from 'react';
import { useParams, Link } from 'react-router-dom';
import events from '../../data/eventsData';
import { formatDate } from '../../utils/formatDate';

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => String(e.id) === String(id));
  if (!event) return <div className="section"><h2>Event not found</h2><Link to="/events">Back</Link></div>;

  return (
    <div className="section">
      <h1>{event.title}</h1>
      <p className="muted">{formatDate(event.date)} • {event.location}</p>
      <img src={event.image} alt={event.title} style={{maxWidth:700, width:'100%', borderRadius:12, margin:'16px 0'}}/>
      <p>{event.description}</p>
      <button className="btn">Register (placeholder)</button>
    </div>
  );
}
