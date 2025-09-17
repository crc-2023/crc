import React from 'react';
import posts from '../../data/postsData';
import PostCard from '../../components/Card/PostCard';
import './CresPulse.css';

export default function CresPulse() {
  return (
    <div className="section">
      <h1>CresPulse</h1>
      <p>Newsletters, essays, and articles from our contributors.</p>
      <div className="grid">
        {posts.map(p => <PostCard key={p.id} post={p} />)}
      </div>
    </div>
  );
}
