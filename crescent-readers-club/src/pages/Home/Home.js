import React from 'react';
import Banner from '../../components/Banner/Banner';
import EventCard from '../../components/Card/EventCard';
import PostCard from '../../components/Card/PostCard';
import events from '../../data/eventsData';
import posts from '../../data/postsData';
import './Home.css';

export default function Home() {
  const upcoming = events.slice(0, 3);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="home-page">
      <Banner />
      <section className="section">
        <h2>Upcoming Events</h2>
        <div className="grid">
          {upcoming.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </section>

      <section className="section">
        <h2>From CresPulse</h2>
        <div className="grid">
          {recentPosts.map(p => <PostCard key={p.id} post={p} />)}
        </div>
      </section>
    </div>
  );
}
