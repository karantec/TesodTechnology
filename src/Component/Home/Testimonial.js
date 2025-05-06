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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header section */}
      {/* <header className="bg-white text-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            What Our Clients Say
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Don't just take our word for it. Hear from the businesses and
            individuals who have transformed their success with our solutions.
          </p>
        </div>
      </header> */}

      {/* Main testimonials carousel */}
      <div className="max-w-6xl mx-auto px-4 py-16 relative">
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
                <div className="h-full bg-white rounded-2xl shadow-lg p-8 flex flex-col relative overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  {/* Quote icon */}
                  <div className="absolute -top-2 -right-2 opacity-10">
                    <Quote className="w-16 h-16 text-indigo-600" />
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 italic mb-6 flex-grow">
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
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-indigo-600 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-indigo-600 hover:text-white transition-colors"
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

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
            <div className="text-gray-700">Client Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">250+</div>
            <div className="text-gray-700">Projects Completed</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">45%</div>
            <div className="text-gray-700">Average Growth for Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
