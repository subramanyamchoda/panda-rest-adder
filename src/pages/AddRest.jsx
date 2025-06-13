import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const AddRest = () => {
  const [activeForm, setActiveForm] = useState('restaurant');
  const [restaurant, setRestaurant] = useState({ name: '', address: '', images: [] });
  const [restaurantPreviewImages, setRestaurantPreviewImages] = useState([]);
  const [restaurantImageError, setRestaurantImageError] = useState(null);
  const [tables, setTables] = useState({ tableno: '', sittingtype: '', sittingnos: '', images: [] });
  const [tablePreviewImages, setTablePreviewImages] = useState([]);
  const [tableImageError, setTableImageError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const token = localStorage.getItem("token");

  const handleMultiImageChange = (e, setImageState, setPreviewState, setErrorState) => {
    setErrorState(null);
    const files = Array.from(e.target.files);

    if (files.length === 0) {
      setErrorState('Please upload at least 1 image!');
      setImageState(prev => ({ ...prev, images: [] }));
      setPreviewState([]);
      return;
    }

    if (files.length > 5) {
      setErrorState('You can upload a maximum of 5 images!');
      setImageState(prev => ({ ...prev, images: [] }));
      setPreviewState([]);
      e.target.value = '';
      return;
    }

    setImageState(prev => ({ ...prev, images: files }));
    const previewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewState(previewUrls);
  };

  const handleRestaurantChange = e => {
    const { name, value } = e.target;
    setRestaurant(prev => ({ ...prev, [name]: value }));
  };

  const handleTableChange = e => {
    const { name, value } = e.target;
    setTables(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    return () => {
      restaurantPreviewImages.forEach(url => URL.revokeObjectURL(url));
      tablePreviewImages.forEach(url => URL.revokeObjectURL(url));
    };
  }, [restaurantPreviewImages, tablePreviewImages]);

  const validateRestaurantForm = () => {
    const { name, address, images } = restaurant;
    if (!name || !address) {
      setError('Please fill in all required fields!');
      return false;
    }
    if (images.length === 0) {
      setError('At least one image is required!');
      return false;
    }
    return true;
  };

  const sendRestaurant = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!validateRestaurantForm()) {
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('name', restaurant.name);
    formData.append('address', restaurant.address);
    restaurant.images.forEach(img => formData.append('images', img));
const token = localStorage.getItem("token");
    try {
       const response = await axios.post('https://panda-rest-server.onrender.com/restaurant/send', formData, {
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "multipart/form-data"
  }
});



      setSuccess(response.data.message);
      setRestaurant({ name: '', address: '', images: [] });
      setRestaurantPreviewImages([]);
      e.target.reset();
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const sendTable = async (e) => {
    e.preventDefault();

    if (tables.images.length === 0) {
      setTableImageError('Please upload at least 1 image for the table.');
      return;
    }

    const formData = new FormData();
    Object.entries(tables).forEach(([key, value]) => {
      if (key === 'images') {
        value.forEach(img => formData.append('images', img));
      } else {
        formData.append(key, value);
      }
    });

    try {
      await axios.post('https://panda-rest-server.onrender.com/tables/send', formData, {
                 headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
      });

      alert('Table added!');
      setTables({ tableno: '', sittingtype: '', sittingnos: '', images: [] });
      setTablePreviewImages([]);
    } catch (err) {
      alert(`Failed to add table. Error: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen  text-white font-sans">
      {/* Sidebar */}
      <aside className="md:w-72 w-full bg-gray-900/80 p-6 border-b md:border-r md:border-b-0 border-white/10">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Adding Details Entries</h2>
        <div className="space-y-4">
          <button
            onClick={() => setActiveForm('restaurant')}
            className={`w-full px-4 py-3 rounded-lg transition ${activeForm === 'restaurant'
                ? 'bg-emerald-600 shadow-lg'
                : 'bg-white/10 hover:bg-white/20'
              }`}
          >
            ➕ Add Restaurant
          </button>
          <button
            onClick={() => setActiveForm('table')}
            className={`w-full px-4 py-3 rounded-lg transition ${activeForm === 'table'
                ? 'bg-emerald-600 shadow-lg'
                : 'bg-white/10 hover:bg-white/20'
              }`}
          >
            🪑 Add Table
          </button>
        </div>
      </aside>

      {/* Main Form Area */}
      <main className="flex-1 flex items-center justify-center p-6 sm:p-10">
        {activeForm === 'restaurant' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-center text-2xl font-semibold mb-6 text-emerald-300">
              Add Restaurant
            </h2>
            <form onSubmit={sendRestaurant} className="space-y-5">
              <input
                type="text"
                name="name"
                value={restaurant.name}
                onChange={handleRestaurantChange}
                placeholder="Restaurant Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <input
                type="text"
                name="address"
                value={restaurant.address}
                onChange={handleRestaurantChange}
                placeholder="Address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) =>
                  handleMultiImageChange(
                    e,
                    setRestaurant,
                    setRestaurantPreviewImages,
                    setRestaurantImageError
                  )
                }
                className="text-sm file:bg-emerald-600 file:text-white file:rounded file:px-4 file:py-1 file:mr-3 file:border-none bg-gray-800 text-white"
              />
              {restaurantImageError && (
                <p className="text-red-400 text-sm">{restaurantImageError}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {restaurantPreviewImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-16 h-16 rounded object-cover border border-white/10"
                    alt="Preview"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 transition py-2 rounded-lg font-semibold"
              >
                {loading ? 'Submitting...' : 'Submit Restaurant'}
              </button>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && <p className="text-green-400 text-sm">{success}</p>}
            </form>
          </motion.div>
        )}

        {activeForm === 'table' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-center text-2xl font-semibold mb-6 text-emerald-300">
              Add Table
            </h2>
            <form onSubmit={sendTable} className="space-y-5">
              <input
                type="number"
                name="tableno"
                value={tables.tableno}
                onChange={handleTableChange}
                placeholder="Table Number"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <input
                type="text"
                name="sittingtype"
                value={tables.sittingtype}
                onChange={handleTableChange}
                placeholder="Seating Type"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <input
                type="number"
                name="sittingnos"
                value={tables.sittingnos}
                onChange={handleTableChange}
                placeholder="Number of Seats"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) =>
                  handleMultiImageChange(
                    e,
                    setTables,
                    setTablePreviewImages,
                    setTableImageError
                  )
                }
                className="text-sm file:bg-emerald-600 file:text-white file:rounded file:px-4 file:py-1 file:mr-3 file:border-none bg-gray-800 text-white"
              />
              {tableImageError && (
                <p className="text-red-400 text-sm">{tableImageError}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {tablePreviewImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-16 h-16 rounded object-cover border border-white/10"
                    alt="Preview"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 transition py-2 rounded-lg font-semibold"
              >
                Submit Table
              </button>
            </form>
          </motion.div>
        )}
      </main>
    </div>
  );

};

export default AddRest;
