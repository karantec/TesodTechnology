import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Clock,
  Award,
  ExternalLink,
  Filter,
} from "lucide-react";

const Works = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  // Define categories
  const categories = [
    "All",
    "Apps",
    "Website",
    "Softwares",
    "Logo",
    "Google ads",
    "InstaAds",
    "Facebook ads",
    "Seo",
    "Other digital marketing services",
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://tesodtechnologyfinal.onrender.com/services/"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();
        setServices(data.slice(0, 6)); // Show only first 6 services
        setFilteredServices(data.slice(0, 6)); // Initialize filtered services
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Filter services based on category
  const filterServices = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredServices(services);
      return;
    }

    // This is a simulation of filtering since we don't know the exact structure of your service objects
    // Adjust this logic based on how categories are actually stored in your service objects
    const filtered = services.filter((service) => {
      const serviceTitle = service.title?.toLowerCase() || "";
      const serviceDescription = service.description?.toLowerCase() || "";
      const categoryLower = category.toLowerCase();

      return (
        serviceTitle.includes(categoryLower) ||
        serviceDescription.includes(categoryLower)
      );
    });

    setFilteredServices(filtered.length > 0 ? filtered : services);
  };

  const getIconForService = (title) => {
    const titleLower = title?.toLowerCase() || "";

    if (titleLower.includes("development") || titleLower.includes("web")) {
      return <Briefcase className="w-6 h-6 text-indigo-600" />;
    } else if (
      titleLower.includes("consultation") ||
      titleLower.includes("strategy")
    ) {
      return <Clock className="w-6 h-6 text-indigo-600" />;
    } else {
      return <Award className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Works</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-8">
            We deliver exceptional, tailored solutions to elevate your business
            in the digital landscape. Our expert team ensures precision,
            innovation, and excellence in every project.
          </p>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Filter className="w-5 h-5 text-indigo-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">
                Filter by Category
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => filterServices(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-indigo-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-md shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredServices.length > 0 ? (
                filteredServices.map((service, index) => (
                  <div
                    key={service._id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Service Image with Overlay */}
                    <div className="relative w-full pt-[60%] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ${
                          hoveredIndex === index ? "scale-110" : "scale-100"
                        }`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/600x400?text=Premium+Service";
                        }}
                      />
                      {/* Premium Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center mb-4">
                        {getIconForService(service.title)}
                        <h3 className="text-xl font-bold text-gray-800 ml-2">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-6 flex-grow line-clamp-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-16">
                  <p className="text-gray-500 text-lg">
                    No services found in this category. Try another filter.
                  </p>
                </div>
              )}
            </div>

            {filteredServices.length === 0 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => filterServices("All")}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Show All Services
                </button>
              </div>
            )}
          </>
        )}

        {/* View All Services */}
        {!loading && !error && filteredServices.length > 0 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate("/services")}
              className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white bg-indigo-600 rounded-md shadow-md group hover:bg-indigo-800 transition-all duration-300"
            >
              <span className="relative flex items-center">
                P View All Services
                <ExternalLink className="ml-2 w-5 h-5" />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;
