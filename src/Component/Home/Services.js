import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://tesodtechnologyfinal.onrender.com/services/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        return response.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      {/* Services Content */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm">
          We provide a wide range of services tailored to meet the needs of modern businesses. Our team of experts 
          ensures that every service we offer is crafted with precision and excellence.
        </p>

        {/* Loading and Error Handling */}
        {loading && (
          <div className="flex justify-center items-center py-6">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        {error && <p className="text-red-600 bg-red-100 p-3 rounded-lg text-sm">{error}</p>}
        
        {/* Services Grid - Added more columns and reduced gap */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Smaller square image at the top */}
              <div className="relative w-full pt-[75%]"> {/* Reduced from 100% to 75% for less height */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/200?text=Service';
                  }}
                />
              </div>

              {/* Content area with reduced padding */}
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-gray-600 text-xs mb-3 flex-grow line-clamp-3">{service.description}</p>
                <button className="bg-blue-600 text-white px-3 py-1 text-xs rounded-md hover:bg-blue-700 transition-colors mt-auto self-center">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;