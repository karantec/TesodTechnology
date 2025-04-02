import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Serve = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://tesodtechnologyfinal.onrender.com/services/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        return response.json();
      })
      .then((data) => {
        setServices(data.slice(0, 3)); // Show only first 3 services
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
        
        {/* Services Grid - Display only 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Service Image */}
              <div className="relative w-full pt-[75%]">
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

              {/* Service Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-3">{service.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition-colors mt-auto self-center">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-8">
          <button 
            onClick={() => navigate('/services')} 
            className="bg-blue-600 text-white px-6 py-2 text-sm rounded-md hover:bg-blue-700 transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Serve;