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
    <div className="services-page bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Enhanced Animated Gradient */}
      <header className="relative py-32 overflow-hidden bg-gradient-to-r from-green-700 via-teal-700 to-cyan-800">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 bottom-0 right-0 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight text-white tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-cyan-200">
                Services
              </span>
            </h1>
            <p className="text-2xl text-green-100 font-light">
              Comprehensive solutions designed to elevate your business
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container with elevated card effect */}
      <div className="container mx-auto px-6 relative">
        {/* Services Section - Elevated */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-24 transform -mt-24 relative z-20 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="mr-4">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Professional Services</h2>
              <p className="text-gray-600 mt-2">
                We provide a wide range of services tailored to meet the needs of modern businesses. 
                Our team of experts ensures that every service we offer is crafted with precision and excellence.
              </p>
            </div>
          </div>

          {/* Loading and Error Handling */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}
          
          {/* Services Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.length > 0 ? (
                services.map((service) => (
                  <div
                    key={service._id}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1"
                  >
                    {/* Service image */}
                    <div className="relative w-full pt-[60%] overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/300x200/10b981/ffffff?text=Service';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content area */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                        <button className="w-full bg-teal-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
                          Enquiry Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center py-12">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-gray-400 mx-auto mb-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <p className="text-gray-500 text-lg">No services available at the moment.</p>
                    <p className="text-gray-400 text-sm mt-2">Please check back later.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Additional CTA Section */}
        {services.length > 0 && (
          <div className="mb-24">
            <div className="bg-gradient-to-r from-green-700 via-teal-700 to-cyan-800 rounded-2xl p-12 text-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl"></div>
                <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 bottom-0 right-0 blur-3xl"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Need a Custom Solution?
                </h2>
                <p className="text-green-100 text-xl mb-8">
                  Our team is ready to discuss your specific requirements and create 
                  tailored solutions that perfectly fit your business needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-3 bg-white text-teal-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                    Get Quote
                  </button>
                  <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;