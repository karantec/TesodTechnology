import React, { useState, useEffect, useRef } from 'react';

// Sample testimonial data
const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    image: "/api/placeholder/80/80",
    content: "Working with this team transformed our online presence completely. Their attention to detail and commitment to quality exceeded our expectations. We saw a 40% increase in customer engagement within just two months.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, StartUp Innovations",
    image: "/api/placeholder/80/80",
    content: "As a startup founder, I needed a partner who understood my vision and could work within our budget constraints. This company delivered beyond what I thought possible and became an essential part of our success story.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    image: "/api/placeholder/80/80",
    content: "I was hesitant about investing in professional services, but it's been the best decision for my business. Their team was responsive, creative, and truly cared about helping my business grow.",
    rating: 4
  },
  {
    id: 4,
    name: "David Williams",
    role: "Project Manager, Enterprise Solutions",
    image: "/api/placeholder/80/80",
    content: "We've worked with many vendors over the years, but none have provided the level of expertise and dedication that we experienced here. They're now our go-to partner for all our projects.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Director of Operations, HealthLife",
    image: "/api/placeholder/80/80",
    content: "In our industry, compliance and attention to detail are critical. This team not only understood our unique requirements but provided solutions that were both innovative and fully compliant with industry standards.",
    rating: 5
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "E-commerce Manager",
    image: "/api/placeholder/80/80",
    content: "Our online sales have increased by 65% since implementing their recommendations. Their team took the time to understand our products and customers, resulting in a strategy that really worked for us.",
    rating: 4
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          className={`text-xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

// Testimonial card component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 my-8 h-full flex flex-col">
      <div className="mb-4 flex-grow">
        <div className="text-6xl text-gray-200 font-serif">"</div>
        <p className="italic text-gray-700">{testimonial.content}</p>
      </div>
      <StarRating rating={testimonial.rating} />
      <div className="flex items-center mt-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

// YouTube video component with autoplay on scroll
const YouTubeVideo = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoLoaded) {
          // Play video when it comes into view
          const iframe = videoRef.current;
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoLoaded]);

  const handleIframeLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="relative pb-16 h-0 overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '56.25%' }}>
        <iframe
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ZqoZOkputgc?si=MEqhTEY3ffjHJnos&start=6&enablejsapi=1&rel=0&modestbranding=1&mute=1"
          title="Client Testimonial Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

// Testimonial Carousel
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 3;
  const maxIndex = testimonialData.length - maxVisible;

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(maxIndex, prevIndex + 1));
  };

  const handleDotClick = (index) => {
    // Ensure dots correspond to proper positions
    const dotIndex = Math.min(index, maxIndex);
    setCurrentIndex(dotIndex);
  };

  return (
    <div className="relative">
      {/* Navigation buttons */}
      <button 
        onClick={handlePrev} 
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        aria-label="Previous testimonial"
      >
        <span className="text-2xl font-bold">&#x2039;</span>
      </button>
      
      <div className="flex overflow-hidden">
        <div 
          className="flex transition-transform duration-300" 
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {testimonialData.map(testimonial => (
            <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={handleNext} 
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        aria-label="Next testimonial"
      >
        <span className="text-2xl font-bold">&#x203A;</span>
      </button>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 mb-8">
        {Array.from({ length: Math.min(testimonialData.length - maxVisible + 1, 5) }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to testimonial set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  return (
    <div className="w-full">
      {/* Header section */}
      <header className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">What Our Clients Say</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses and individuals
            who have transformed their success with our solutions.
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* YouTube Video section - above testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">See Our Impact in Action</h2>
          <YouTubeVideo />
        </div>

        {/* Testimonials Carousel */}
        <TestimonialCarousel />

        {/* Call to action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to join our success stories?</h2>
          <p className="mb-6 text-gray-700">
            Contact us today to discuss how we can help achieve your goals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;