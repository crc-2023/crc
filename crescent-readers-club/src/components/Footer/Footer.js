import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="cr-footer">
      <div className="cr-container footer-inner">
        <div className="footer-left">
          <img src="/assets/logo.png" alt="logo" className="f-logo" />
          <div>
            <div className="f-title">Crescent Readers Club</div>
            <small className="f-sub">Nurturing readers, one moonlit story at a time.</small>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <strong>Explore</strong>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/crespulse">CresPulse</a></li>
            </ul>
          </div>

          <div>
            <strong>Contact</strong>
            <ul>
              <li>hello@crescentreaders.club</li>
              <li>Twitter: @crescentread</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Crescent Readers Club • All rights reserved.</small>
      </div>
    </footer>
  );
}
