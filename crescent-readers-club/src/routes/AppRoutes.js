import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Events from '../pages/Events/Events';
import EventDetails from '../pages/Events/EventDetails';
import Team from '../pages/Team/Team';
import Podcast from '../pages/Podcast/Podcast';
import CresPulse from '../pages/CresPulse/CresPulse';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/team" element={<Team />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/crespulse" element={<CresPulse />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
