import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Clock,
  Award,
  ExternalLink,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Serve = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getIconForService = (title) => {
    const titleLower = title?.toLowerCase() || "";

    if (titleLower.includes("development") || titleLower.includes("web")) {
      return <Briefcase className="w-6 h-6 text-white" />;
    } else if (
      titleLower.includes("consultation") ||
      titleLower.includes("strategy")
    ) {
      return <Clock className="w-6 h-6 text-white" />;
    } else {
      return <Award className="w-6 h-6 text-white" />;
    }
  };

  const handleWhatsAppEnquiry = (serviceTitle) => {
    const message = `Hello! Can you tell me more about ${serviceTitle}?`;
    const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleViewAllServices = () => {
    // Replace with your navigation logic
    console.log("Navigate to all services");
  };

  const getCardGradient = (index) => {
    const gradients = [
      "from-blue-600 via-blue-700 to-blue-800",
      "from-sky-500 via-blue-600 to-indigo-700",
      "from-indigo-600 via-blue-700 to-cyan-700",
      "from-blue-700 via-indigo-800 to-slate-800",
      "from-cyan-600 via-blue-700 to-indigo-800",
      "from-blue-800 via-indigo-900 to-slate-900",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24 relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-200 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-sky-200 rounded-full opacity-25 animate-pulse"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-2 mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">
              Premium Services
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-6">
            Exceptional Solutions
          </h2>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            <Star className="w-5 h-5 text-blue-600 fill-current" />
            <div className="w-8 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"></div>
          </div>

          <p className="text-slate-600 max-w-4xl mx-auto text-xl leading-relaxed">
            Transform your business with our cutting-edge digital solutions. We
            craft premium experiences that drive growth and innovation.
          </p>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
              <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 border-l-2 border-r-2 border-indigo-500"></div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 backdrop-blur-sm p-6 mb-8 rounded-xl shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-red-500"
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
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service._id}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${getCardGradient(
                    index
                  )} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500`}
                ></div>

                {/* Main Card */}
                <div className="relative bg-white/95 backdrop-blur-sm border border-blue-100 rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 flex flex-col h-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div
                      className={`bg-gradient-to-r ${getCardGradient(
                        index
                      )} rounded-full p-2 shadow-lg`}
                    >
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>

                  {/* Service Image with Enhanced Overlay */}
                  <div className="relative w-full pt-[60%] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ${
                        hoveredIndex === index
                          ? "scale-110 brightness-110"
                          : "scale-100"
                      }`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/600x400/3B82F6/ffffff?text=Premium+Service";
                      }}
                    />

                    {/* Dynamic Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${getCardGradient(
                        index
                      )} opacity-50 mix-blend-multiply`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-600/20 to-transparent"></div>

                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div
                        className={`bg-gradient-to-r ${getCardGradient(
                          index
                        )} rounded-lg p-3 shadow-xl backdrop-blur-sm`}
                      >
                        {getIconForService(service.title)}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:bg-clip-text transition-all duration-300 min-h-[3rem]">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                      {service.description && service.description.length > 120
                        ? service.description.substring(0, 120) + "..."
                        : service.description}
                    </p>

                    {/* Enquiry Button */}
                    <button
                      onClick={() => handleWhatsAppEnquiry(service.title)}
                      className={`w-full bg-gradient-to-r ${getCardGradient(
                        index
                      )} hover:shadow-2xl hover:shadow-blue-500/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn mt-auto`}
                    >
                      <MessageCircle className="w-5 h-5 group-hover/btn:animate-bounce" />
                      <span>Enquiry Now</span>
                      <ArrowRight className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCardGradient(
                      index
                    )} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Services */}
        {!loading && !error && (
          <div className="mt-20 text-center">
            <Link to="/services">
              {" "}
              <button
                onClick={handleViewAllServices}
                className="relative inline-flex items-center px-10 py-4 overflow-hidden text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-2xl shadow-2xl shadow-blue-500/25 group hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
              >
                {/* Button Glow */}

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>

                <span className="relative flex items-center gap-3 z-10">
                  <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                  View All Services
                  <ExternalLink className="w-5 h-5 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Serve;
