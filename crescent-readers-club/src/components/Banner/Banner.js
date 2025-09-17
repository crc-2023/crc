import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-inner">
        <div className="banner-copy">
          <h1>Welcome to Crescent Readers Club</h1>
          <p>Join a community of curious readers, lively discussions, and moonlit storytelling.</p>
          <a className="btn" href="/crespulse">Explore CresPulse</a>
        </div>
        <div className="banner-art">
          <img src="/assets/banner.jpg" alt="banner" />
        </div>
      </div>
    </section>
  );
}
