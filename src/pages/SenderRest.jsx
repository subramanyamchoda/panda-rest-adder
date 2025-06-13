import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SenderRest = () => {
  const [sender, setSender] = useState(null);
  const [loading, setLoading] = useState(true);

  const senderId = localStorage.getItem('senderId');

  useEffect(() => {
    const fetchSender = async () => {
      try {
        const res = await axios.get(`https://panda-rest-server.onrender.com/sender/${senderId}`);
        if (res.data?.sender) {
          setSender(res.data.sender);
        } else {
          console.warn("Sender not found in response.");
        }
      } catch (err) {
        console.error("Failed to fetch sender:", err);
      } finally {
        setLoading(false);
      }
    };

    if (senderId) {
      fetchSender();
    } else {
      console.warn("senderId not found in localStorage");
      setLoading(false);
    }
  }, [senderId]);

  if (loading) return <p className="text-white text-center mt-10">Loading restaurant info...</p>;
  if (!sender?.restaurants?.length) return <p className="text-white text-center mt-10">No restaurants found.</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Restaurants</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sender.restaurants.map((rest, idx) => (
          <motion.div
            key={rest._id || idx}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="text-white space-y-2 mb-4">
              <h3 className="text-xl font-semibold">{rest.name}</h3>
              <p><strong>Address:</strong> {rest.address || 'N/A'}</p>
            </div>

            {rest.images?.length > 0 && (
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                useKeyboardArrows
                dynamicHeight
              >
                {rest.images.map((img, imgIdx) => (
                  <div key={imgIdx}>
                    <img
                      src={`data:${img.contentType};base64,${img.data}`}
                      alt={`Restaurant ${rest.name} Image ${imgIdx + 1}`}
                      className="rounded-lg object-cover max-h-[300px] mx-auto"
                    />
                  </div>
                ))}
              </Carousel>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SenderRest;
