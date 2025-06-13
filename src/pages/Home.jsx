import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ sender }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (sender) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="overflow-x-hidden flex flex-col min-h-screen text-white ">
      {/* Hero Section */}
      <div className="py-16 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* Text Area */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Simplify Restaurant Operations
          </h1>
          <p className="text-gray-300 mb-4 text-base md:text-lg leading-relaxed">
            Add your restaurant profile and configure table layouts with ease.
          </p>
          <p className="text-gray-300 mb-4 text-base md:text-lg leading-relaxed">
            Manage table bookings and view real-time reservations.
          </p>
          <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
            Streamline your entire restaurant operation from one powerful dashboard.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleGetStarted}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Image Area */}
        <div className="md:w-1/2">
          <img
            src="11.png"
            alt="Restaurant Illustration"
            className="w-[300px] md:w-[450px] lg:w-[500px] mx-auto slow-spin"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-5 border-2 border-white" />

      {/* Features Section */}
      <div className="backdrop-blur-md py-12 px-6 lg:px-20 text-center text-white mt-1">
        <h2 className="text-3xl font-semibold mb-6">Why Use Our Platform?</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Add Restaurants</h3>
            <p className="text-sm text-gray-300">
              Seamlessly register your restaurant and get discovered by potential diners.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Table Management</h3>
            <p className="text-sm text-gray-300">
              Define your table setup for quick and easy reservations tailored to your layout.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Booking Overview</h3>
            <p className="text-sm text-gray-300">
              View, track, and manage all your reservations in real-time from your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
