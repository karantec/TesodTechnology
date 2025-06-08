import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  TrendingUp,
  Users,
  Award,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

// Enhanced star rating component
const StarRating = ({ rating = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`star-${i}`}
          className="w-5 h-5 text-amber-500 fill-amber-500"
        />
      ))}

      {hasHalfStar && (
        <StarHalf className="w-5 h-5 text-amber-500 fill-amber-500" />
      )}

      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-star-${i}`} className="w-5 h-5 text-amber-500" />
      ))}
    </div>
  );
};

// Loading skeleton component
const TestimonialSkeleton = () => {
  return (
    <div className="px-3">
      <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 flex flex-col relative overflow-hidden border border-gray-100 animate-pulse">
        {/* Content skeleton */}
        <div className="space-y-3 mb-6 flex-grow">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>

        {/* Star rating skeleton */}
        <div className="flex mb-4 space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-gray-300 rounded"></div>
          ))}
        </div>

        {/* Author info skeleton */}
        <div className="flex items-center mt-auto">
          <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
          <div className="ml-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-3 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Error component
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        Failed to Load Testimonials
      </h3>
      <p className="text-red-600 mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Try Again
      </button>
    </div>
  );
};

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoplayRef = useRef(null);

  // Number of testimonials to show at once based on screen size
  const [itemsToShow, setItemsToShow] = useState(3);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://tesodtechnologyfinal.onrender.com/testimonial/Testimonial"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No testimonials found");
        }

        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError(err.message || "Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Update itemsToShow based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1); // Mobile: Show 1
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Tablet: Show 2
      } else {
        setItemsToShow(3); // Desktop: Show 3
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle autoplay - only if we have testimonials
  useEffect(() => {
    if (!autoplay || loading || error || testimonials.length === 0) return;

    autoplayRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [activeIndex, autoplay, loading, error, testimonials.length]);

  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  const goToPrev = () => {
    if (isAnimating || testimonials.length === 0) return;

    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsToShow) : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating || testimonials.length === 0) return;

    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev >= testimonials.length - itemsToShow ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || testimonials.length === 0) return;

    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchStart - touchEnd) < 50) return; // Minimum swipe distance

    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrev();
    }
  };

  const retryFetch = () => {
    setError(null);
    setLoading(true);
    // Trigger re-fetch by changing a dependency
    window.location.reload();
  };

  return (
    <div className="testimonials-page bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Enhanced Animated Gradient */}
      <header className="relative py-32 overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 bottom-0 right-0 blur-3xl animate-pulse"></div>
          <div className="absolute w-64 h-64 rounded-full bg-blue-400/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 leading-tight text-white tracking-tight">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Clients Say
              </span>
            </h1>
            <p className="text-2xl text-blue-100 font-light mb-4">
              Trusted by businesses worldwide
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the businesses and
              individuals who have transformed their success with our innovative
              solutions and dedicated service.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative">
        {/* Stats Section - First, Enhanced with Animation */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-24 transform -mt-24 relative z-20 border border-gray-100">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="mr-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-5xl font-bold text-gray-800">
                Our Impact in Numbers
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results that speak louder than words. Here's the measurable
              impact we've delivered for our clients across different industries
              and project scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                98%
              </div>
              <div className="text-gray-700 text-xl font-semibold mb-2">
                Client Satisfaction Rate
              </div>
              <p className="text-gray-500 text-sm">
                Based on post-project surveys and feedback
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
                {loading ? "..." : testimonials.length}+
              </div>
              <div className="text-gray-700 text-xl font-semibold mb-2">
                Happy Clients
              </div>
              <p className="text-gray-500 text-sm">
                Across various industries and scales
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                45%
              </div>
              <div className="text-gray-700 text-xl font-semibold mb-2">
                Average Growth for Clients
              </div>
              <p className="text-gray-500 text-sm">
                Measured within 6 months of project completion
              </p>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Project Completion</div>
            </div>
          </div>
        </div>

        {/* Testimonials Section - Second */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-24 border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="mr-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-5xl font-bold text-gray-800">
                Client Success Stories
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our clients' success is our success. Here's what they have to say
              about working with us and the results we've achieved together.
            </p>
          </div>

          {/* Large quote mark decoration */}
          <div className="absolute top-8 left-8 opacity-5">
            <Quote className="w-24 h-24 text-indigo-900" />
          </div>

          {/* Error State */}
          {error && <ErrorMessage message={error} onRetry={retryFetch} />}

          {/* Loading State */}
          {loading && !error && (
            <div className="relative overflow-hidden py-8">
              <div className="flex">
                {[...Array(itemsToShow)].map((_, index) => (
                  <TestimonialSkeleton key={index} />
                ))}
              </div>
            </div>
          )}

          {/* Testimonials slider */}
          {!loading && !error && testimonials.length > 0 && (
            <div
              className="relative overflow-hidden py-8"
              onMouseEnter={pauseAutoplay}
              onMouseLeave={resumeAutoplay}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    activeIndex * (100 / itemsToShow)
                  }%)`,
                  width: `${(testimonials.length / itemsToShow) * 100}%`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial._id}
                    className="px-3"
                    style={{
                      width: `${(100 / testimonials.length) * itemsToShow}%`,
                    }}
                  >
                    <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 flex flex-col relative overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Quote icon */}
                      <div className="absolute -top-2 -right-2 opacity-10">
                        <Quote className="w-16 h-16 text-indigo-600" />
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 italic mb-6 flex-grow text-lg leading-relaxed">
                        "{testimonial.message}"
                      </p>

                      {/* Star rating */}
                      <div className="mb-4">
                        <StarRating rating={5} />
                      </div>

                      {/* Author info */}
                      <div className="flex items-center mt-auto">
                        <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-1 rounded-full shadow-sm">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover"
                            onError={(e) => {
                              e.target.src = "/api/placeholder/80/80";
                            }}
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.position}
                          </p>
                          {testimonial.organization && (
                            <p className="text-xs text-gray-500">
                              {testimonial.organization}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              {testimonials.length > itemsToShow && (
                <>
                  <button
                    onClick={goToPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-indigo-600 hover:text-white transition-colors border border-gray-200"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-indigo-600 hover:text-white transition-colors border border-gray-200"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          )}

          {/* Dot indicators */}
          {!loading && !error && testimonials.length > itemsToShow && (
            <div className="flex justify-center mt-8 space-x-2">
              {[
                ...Array(Math.max(0, testimonials.length - itemsToShow + 1)),
              ].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-indigo-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && testimonials.length === 0 && (
            <div className="text-center py-12">
              <Quote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No testimonials available
              </h3>
              <p className="text-gray-500">
                Check back later for client testimonials.
              </p>
            </div>
          )}
        </div>

        {/* Call to Action Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl animate-pulse"></div>
              <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 bottom-0 right-0 blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-blue-100 text-xl mb-8 leading-relaxed">
                Let's work together to create your own success story. Get in
                touch with our team to discuss how we can help transform your
                business and achieve measurable results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:scale-105">
                  Start Your Project
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-lg hover:scale-105">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
