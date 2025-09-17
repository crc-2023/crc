import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { formatDate } from '../../utils/formatDate';

export default function EventCard({ event }) {
  return (
    <article className="card">
      <img src={event.image} alt={event.title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{event.title}</h3>
        <p className="card-meta">{formatDate(event.date)} • {event.location}</p>
        <p className="card-excerpt">{event.excerpt}</p>
        <div className="card-actions">
          <Link to={`/events/${event.id}`} className="btn btn-sm">View</Link>
          <button className="btn btn-outline">Register</button>
        </div>
      </div>
    </article>
  );
}
