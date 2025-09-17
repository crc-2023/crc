import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="section" style={{textAlign:'center', padding:40}}>
      <h1>404 — Page not found</h1>
      <p>Looks like you took a wrong turn.</p>
      <Link to="/" className="btn">Back to home</Link>
    </div>
  );
}
