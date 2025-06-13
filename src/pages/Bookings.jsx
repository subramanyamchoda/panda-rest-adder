import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const senderId = localStorage.getItem('senderId');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('https://panda-rest-server.onrender.com/booking/get');
        console.log('Fetched from server:', res.data.bookings);

        const userBookings = res.data.bookings.filter(
          (booking) => booking.sender?._id === senderId
        );

        setBookings(userBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    if (senderId) fetchBookings();
  }, [senderId]);

  return (
    <div className="min-h-screen px-6 py-10  text-white">
      <h1 className="text-4xl font-extrabold text-center text-emerald-400 mb-12">
        🍽️ My Table Bookings
      </h1>

      {bookings.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 mt-16 text-lg"
        >
          😔 No bookings found for your account.
        </motion.p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map((booking, index) => (
            <motion.div
              key={booking._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg transition duration-300"
            >
              {/* Restaurant Info */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-emerald-300">
                  🍴 {booking.restaurantId?.name || 'Unnamed Restaurant'}
                </h2>
                <p className="text-sm text-gray-300">{booking.restaurantId?.address}</p>
              </div>

              {/* Table Info */}
              <div className="text-sm space-y-1 mb-4">
                <p>🪑 <strong>Table No:</strong> {booking.tableId?.tableno || 'N/A'}</p>
                <p>🏷️ <strong>Seating Type:</strong> {booking.tableId?.sittingtype || 'N/A'}</p>
                <p>👥 <strong>Seats:</strong> {booking.tableId?.sittingnos || 'N/A'}</p>
              </div>

              {/* Booking Date & Time */}
              <div className="text-sm text-gray-300 space-y-1 mb-4">
                <p>📅 <strong>Date:</strong> {booking.bookingDate}</p>
                <p>⏰ <strong>Time:</strong> {booking.bookingTime}</p>
              </div>

              {/* User Info */}
              <div className="text-sm text-gray-400 border-t border-gray-600 pt-3 mt-3">
                <p>🙋 <strong>User:</strong> {booking.userId?.name || 'N/A'}</p>
                <p>📧 <strong>Email:</strong> {booking.userId?.email || 'N/A'}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
