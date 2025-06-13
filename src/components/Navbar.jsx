import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ sender, setSender }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("sender");
    localStorage.removeItem("senderId");
    setSender(null);
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-cover bg-center text-white py-4 px-6 md:px-12 lg:px-20 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="tlogo.jpg" alt="logo" className="w-10 h-10 rounded-xl object-cover" />
            <Link to="/" className="text-xl font-bold">Panda Restaurants </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-2xl">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>

            {!sender ? (
              <Link to="/login" className="text-white hover:text-gray-300" id="loginLink">Login</Link>
            ) : (
              <>
                <Link to="/restaurants" className="text-white hover:text-gray-300">Add</Link>
                <Link to="/bookings" className="text-white hover:text-gray-300">Bookings</Link>
                <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-red-300 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 px-6 pb-4 space-y-3 text-xl  backdrop-blur-sm rounded-md underline">
            <Link to="/" className="block text-white hover:text-gray-300 " onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-white hover:text-gray-300 " onClick={() => setMenuOpen(false)}>About</Link>

            {!sender ? (
              <Link to="/login" className="block text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Login</Link>
            ) : (
              <>
                <Link to="/restaurants" className="block text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Add</Link>
                <Link to="/bookings" className="block text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Bookings</Link>
                <Link to="/dashboard" className="block text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left text-white hover:text-red-300 underline"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>
      <hr className="border-2 border-white" />
    </>
  );
};

export default Navbar;
