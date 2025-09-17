import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/events', label: 'Events & Activities' },
  { to: '/team', label: 'Our Team' },
  { to: '/podcast', label: 'Podcast' },
  { to: '/crespulse', label: 'CresPulse' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="cr-nav">
      <div className="cr-inner">
        <Link to="/" className="brand">
          <img src="/assets/logo.png" alt="Crescent logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-title">Crescent Readers Club</span>
            <span className="brand-sub">where stories meet moonlight</span>
          </div>
        </Link>

        <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(v => !v)} aria-label="toggle menu">
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
