// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  const [sender, setSender] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sender")) || null;
    } catch (error) {
      console.error("Error parsing sender from localStorage:", error);
      return null;
    }
  });

  useEffect(() => {
    if (sender) {
      localStorage.setItem("sender", JSON.stringify(sender));
    } else {
      localStorage.removeItem("sender");
      localStorage.removeItem("senderId");
    }
  }, [sender]);

  return (
    <Router>
      <Navbar sender={sender} setSender={setSender} />
      <AppRoutes sender={sender} setSender={setSender} />
      <Footer />
    </Router>
  );
};

export default App;
