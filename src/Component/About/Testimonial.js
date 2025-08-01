import React, { useState, useEffect } from "react";

// Star rating component (fixed rating of 5 since API doesn't provide ratings)
const StarRating = ({ rating = 5 }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-xl ${
          i <= rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

// Testimonial card component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
          onError={(e) => {
            e.target.src = "/api/placeholder/80/80"; // Fallback image
          }}
        />
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.position}</p>
          {testimonial.organization && (
            <p className="text-sm text-gray-500">{testimonial.organization}</p>
          )}
        </div>
      </div>
      <StarRating rating={5} />
      <p className="mt-4 text-gray-700 italic">"{testimonial.message}"</p>
    </div>
  );
};

// Loading component
const LoadingCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-48"></div>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-gray-300 rounded mr-1"></div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://backend.tesodtechnology.com/testimonial/Testimonial"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTestimonials(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleSeeMoreClick = () => {
    if (visibleTestimonials < testimonials.length) {
      setVisibleTestimonials(testimonials.length); // Show all testimonials
    } else {
      alert("All testimonials are now displayed!"); // Simple alert instead of navigation
    }
  };

  const handleLoadMoreClick = () => {
    setVisibleTestimonials((prev) => Math.min(prev + 3, testimonials.length));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">What Our Clients Say</h1>
          <p className="text-xl opacity-90">
            Discover how we've helped businesses achieve their goals
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Error state */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        )}

        {/* Testimonials grid */}
        {!loading && !error && testimonials.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
                <TestimonialCard
                  key={testimonial._id}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {/* Load More / See More buttons */}
            {visibleTestimonials < testimonials.length && (
              <div className="mt-8 text-center space-x-4">
                <button
                  onClick={handleLoadMoreClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
                >
                  Load More
                </button>
                <button
                  onClick={handleSeeMoreClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
                >
                  See All Testimonials
                </button>
              </div>
            )}

            {/* Stats section */}
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-blue-600">
                    {testimonials.length}+
                  </h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-green-600">100%</h3>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-600">5★</h3>
                  <p className="text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Empty state */}
        {!loading && !error && testimonials.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              No testimonials available
            </h2>
            <p className="text-gray-500">
              Check back later for client testimonials.
            </p>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Ready to join our success stories?
          </h2>
          <p className="mb-6 opacity-90">
            Contact us today to discuss how we can help achieve your goals.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
