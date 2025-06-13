// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AddRest from '../pages/AddRest';
import Bookings from '../pages/Bookings';
import SenderTables from '../pages/SenderTables';
import SenderRest from '../pages/SenderRest';
import NotFound from '../components/NotFound';

const AppRoutes = ({ sender, setSender }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/restaurants" element={<AddRest />} />
      <Route path="/sendertables" element={<SenderTables />} />
      <Route path="/senderrest" element={<SenderRest />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/login" element={<Login setSender={setSender} />} />
      <Route path="/dashboard" element={<Dashboard sender={sender} setSender={setSender} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
