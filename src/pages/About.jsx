import React from 'react';

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <div className="w-full py-11 bg-cover bg-center">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center animate-bounce">
            About Us
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="py-9 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-white">Welcome to Panda Restaurant</h2>
            <p className="mb-4 text-white">
              At Panda Restaurant, we combine tradition with technology. Our mission is to make dining simple for customers and seamless for restaurant owners.
            </p>
            <p className="mb-4 text-white">
              Whether you're a food lover looking for a great meal or a restaurant manager aiming to organize operations better, our platform is built for you. Add your restaurant, manage tables, and monitor bookings all in one place.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img src="restapp1.jpg" alt="Restaurant view 1" className="rounded-lg w-full h-auto" />
            <img src="restapp2.jpg" alt="Restaurant view 2" className="rounded-lg w-3/4 mt-10" />
            <img src="restapp3.jpg" alt="Restaurant view 3" className="rounded-lg w-3/4 ml-auto" />
            <img src="restapp4.jpg" alt="Restaurant view 4" className="rounded-lg w-full" />
          </div>
        </div>
      </div>

      {/* Feature Explanation Section */}
     <hr className="mt-9 border-2 border-white" />
      {/* Team Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl text-white mb-2">Team Members</h3>
          <h2 className="text-3xl text-white font-bold mb-8">Our Master Chefs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{ name: 'Subbu', image: 'chef3.jpeg' }, { name: 'Sai', image: 'chef1.jpeg' }, { name: 'Ram', image: 'chef2.jpeg' }].map(
              (chef, index) => (
                <div key={index} className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg">
                  <img src={chef.image} alt={chef.name} className="w-full h-72 object-cover" />
                  <div className="bg-white py-4">
                    <h2 className="text-xl font-semibold text-center text-gray-800">{chef.name}</h2>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
