import React from 'react';
import posts from '../../data/postsData';
import './Podcast.css';

export default function Podcast() {
  return (
    <div className="section">
      <h1>Podcast</h1>
      <p>Audio and video conversations hosted by Crescent Readers Club.</p>

      <div className="grid">
        {posts.slice(0,6).map(p => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.title} style={{width:120, height:90, objectFit:'cover'}}/>
            <div style={{padding:12}}>
              <h4>{p.title}</h4>
              <p className="muted">{new Date(p.date).toLocaleDateString()}</p>
              <p style={{marginTop:6}}>{p.excerpt}</p>
              <button className="btn btn-sm">Play (placeholder)</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
