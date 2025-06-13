import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const Dashboard = ({ sender, setSender }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sender) navigate("/login");
  }, [sender, navigate]);

  const handleLogout = async () => {
    try {
      await axios.post("https://panda-rest-server.onrender.com/sender/logout", {}, { withCredentials: true });
      localStorage.removeItem("sender");
      localStorage.removeItem("senderId");
      setSender(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 w-full max-w-2xl text-center text-white"
      >
        {sender ? (
          <>
           <motion.img
              src={sender.avatar}
              alt={sender.name}
              className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />


            <motion.h2
              className="text-3xl font-bold mb-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Welcome, {sender.name}!
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-6 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {sender.email}
            </motion.p>

            <motion.div
              className="grid sm:grid-cols-2 gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/bookings"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
              >
                🗓️ <span className="text-sm sm:text-base">Users' Table Bookings</span>
              </Link>

              <Link
                to="/senderrest"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
              >
                🍽️ <span className="text-sm sm:text-base">Your Restaurants</span>
              </Link>

              <Link
                to="/sendertables"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
              >
                🪑 <span className="text-sm sm:text-base">Your Tables</span>
              </Link>

              <button
                onClick={handleLogout}
                className="bg-rose-600 hover:bg-rose-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
              >
                🔒 <span className="text-sm sm:text-base">Logout</span>
              </button>
            </motion.div>
          </>
        ) : (
          <p className="text-lg text-white">Please log in to view your dashboard.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
