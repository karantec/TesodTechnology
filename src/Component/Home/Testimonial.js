import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, StarHalf } from "lucide-react";

// Sample testimonial data
const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    image: "/api/placeholder/80/80",
    content:
      "Working with this team transformed our online presence completely. Their attention to detail and commitment to quality exceeded our expectations. We saw a 40% increase in customer engagement within just two months.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, StartUp Innovations",
    image: "/api/placeholder/80/80",
    content:
      "As a startup founder, I needed a partner who understood my vision and could work within our budget constraints. This company delivered beyond what I thought possible and became an essential part of our success story.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    image: "/api/placeholder/80/80",
    content:
      "I was hesitant about investing in professional services, but it's been the best decision for my business. Their team was responsive, creative, and truly cared about helping my business grow.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Williams",
    role: "Project Manager, Enterprise Solutions",
    image: "/api/placeholder/80/80",
    content:
      "We've worked with many vendors over the years, but none have provided the level of expertise and dedication that we experienced here. They're now our go-to partner for all our projects.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Director of Operations, HealthLife",
    image: "/api/placeholder/80/80",
    content:
      "In our industry, compliance and attention to detail are critical. This team not only understood our unique requirements but provided solutions that were both innovative and fully compliant with industry standards.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "E-commerce Manager",
    image: "/api/placeholder/80/80",
    content:
      "Our online sales have increased by 65% since implementing their recommendations. Their team took the time to understand our products and customers, resulting in a strategy that really worked for us.",
    rating: 4,
  },
];

// Enhanced star rating component
const StarRating = ({ rating }) => {
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

const TestimonialsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoplayRef = useRef(null);

  // Number of testimonials to show at once based on screen size
  const [itemsToShow, setItemsToShow] = useState(3);

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

  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return;

    autoplayRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [activeIndex, autoplay]);

  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  const goToPrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev === 0 ? testimonialData.length - itemsToShow : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev === testimonialData.length - itemsToShow ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;

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
    if (touchStart - touchEnd > 100) {
      // Swipe left
      goToNext();
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right
      goToPrev();
    }
  };

  return (
    <div className="testimonials-page bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Enhanced Animated Gradient */}
      <header className="relative py-32 overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 bottom-0 right-0 blur-3xl"></div>
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
              Don't just take our word for it. Hear from the businesses and individuals 
              who have transformed their success with our innovative solutions and dedicated service.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative">
        {/* Testimonials Section - Elevated */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-24 transform -mt-24 relative z-20 border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="mr-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800">Client Success Stories</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our clients' success is our success. Here's what they have to say about working with 
              Tesod Technology and the results we've achieved together.
            </p>
          </div>

          {/* Large quote mark decoration */}
          <div className="absolute top-8 left-8 opacity-5">
            <Quote className="w-24 h-24 text-indigo-900" />
          </div>

          {/* Testimonials slider */}
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
                transform: `translateX(-${activeIndex * (100 / itemsToShow)}%)`,
                width: `${(testimonialData.length / itemsToShow) * 100}%`,
              }}
            >
              {testimonialData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="px-3"
                  style={{
                    width: `${(100 / testimonialData.length) * itemsToShow}%`,
                  }}
                >
                  <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 flex flex-col relative overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    {/* Quote icon */}
                    <div className="absolute -top-2 -right-2 opacity-10">
                      <Quote className="w-16 h-16 text-indigo-600" />
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 italic mb-6 flex-grow text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Star rating */}
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Author info */}
                    <div className="flex items-center mt-auto">
                      <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-1 rounded-full shadow-sm">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
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
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(testimonialData.length - itemsToShow + 1)].map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-indigo-600 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* Stats Section - Enhanced */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 inline-block relative">
              Our Impact in Numbers
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">98%</div>
              <div className="text-gray-700 text-lg font-medium">Client Satisfaction Rate</div>
              <p className="text-gray-500 text-sm mt-2">Based on post-project surveys</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">250+</div>
              <div className="text-gray-700 text-lg font-medium">Projects Completed</div>
              <p className="text-gray-500 text-sm mt-2">Across various industries</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">45%</div>
              <div className="text-gray-700 text-lg font-medium">Average Growth for Clients</div>
              <p className="text-gray-500 text-sm mt-2">Measured within 6 months</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl"></div>
              <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 bottom-0 right-0 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-blue-100 text-xl mb-8">
                Let's work together to create your own success story. Get in touch with our team 
                to discuss how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white text-blue-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                  Start Your Project
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
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