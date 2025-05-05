import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Menu,
} from "lucide-react";

export default function EnhancedPremiumCarousel() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showSocialMenu, setShowSocialMenu] = useState(false);

  const carouselRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Fetch data from the carousel API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://tesodtechnologyfinal.onrender.com/crousel"
        );
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      } finally {
        setLoading(false);
        // Trigger animation after data is loaded
        setTimeout(() => setIsLoaded(true), 100);
      }
    };

    fetchSlides();
  }, []);

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      if (!transitioning) {
        handleNext();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length, transitioning]);

  const handleTransition = (callback) => {
    if (transitioning) return;

    setTransitioning(true);
    callback();

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setTransitioning(false);
    }, 700);
  };

  const handleNext = () => {
    handleTransition(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    });
  };

  const handlePrev = () => {
    handleTransition(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    });
  };

  const handleGoToSlide = (index) => {
    if (index === currentIndex) return;

    handleTransition(() => {
      setCurrentIndex(index);
    });
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      if (distance > 0) {
        // Swipe left - go next
        handleNext();
      } else {
        // Swipe right - go prev
        handlePrev();
      }
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Animation classes based on active slide
  const getAnimationClass = (index) => {
    return index === currentIndex && isLoaded
      ? "opacity-100 transform translate-y-0"
      : "opacity-0 transform translate-y-8";
  };

  const toggleSocialMenu = () => {
    setShowSocialMenu(!showSocialMenu);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Slides container with touch events */}
      <div
        ref={carouselRef}
        className="relative w-full h-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === slides.length - 1);
          const isNext =
            index === currentIndex + 1 ||
            (currentIndex === slides.length - 1 && index === 0);

          return (
            <div
              key={slide._id || index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 translate-x-0 z-10"
                  : isPrev
                  ? "opacity-0 -translate-x-full z-0"
                  : isNext
                  ? "opacity-0 translate-x-full z-0"
                  : "opacity-0 translate-x-full z-0"
              }`}
            >
              {/* Image with zoom effect */}
              <div
                className="relative w-full h-full transition-transform duration-10000 ease-linear"
                style={{ transform: isActive ? "scale(1)" : "scale(1.05)" }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlay - combining both styles */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              </div>

              {/* Content container with animation - positioned for mobile and desktop */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                  <div className="max-w-xl text-white text-left mt-8 sm:mt-0">
                    {/* Subtitle with fade-in animation */}
                    <div
                      className={`transition-all duration-700 delay-300 ease-out ${getAnimationClass(
                        index
                      )}`}
                    >
                      <h6 className="text-xs sm:text-sm md:text-base uppercase tracking-widest mb-2 sm:mb-3 inline-block bg-blue-600 bg-opacity-80 px-2 py-1 sm:px-3 rounded">
                        {slide.subtitle || "Featured"}
                      </h6>
                    </div>

                    {/* Title with fade-in animation and responsive text */}
                    <div
                      className={`transition-all duration-700 delay-500 ease-out ${getAnimationClass(
                        index
                      )}`}
                    >
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 tracking-tight line-clamp-2 sm:line-clamp-none">
                        {slide.title}
                      </h1>
                    </div>

                    {/* Divider with animation */}
                    <div
                      className={`transition-all duration-700 delay-700 ease-out ${getAnimationClass(
                        index
                      )}`}
                    >
                      <div className="w-16 sm:w-24 h-1 bg-blue-500 mb-3 sm:mb-6"></div>
                    </div>

                    {/* Description with fade-in animation - hide on smaller screens */}
                    <div
                      className={`transition-all duration-700 delay-900 ease-out ${getAnimationClass(
                        index
                      )}`}
                    >
                      <p className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-4 sm:mb-8 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                        {slide.description}
                      </p>
                    </div>

                    {/* Buttons with animation - stack on mobile with better spacing */}
                    <div
                      className={`transition-all duration-700 delay-1100 ease-out flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ${getAnimationClass(
                        index
                      )}`}
                    >
                      <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-md font-medium text-xs sm:text-sm uppercase tracking-wide hover:shadow-lg transition-all w-full sm:w-auto max-w-xs">
                        {slide.buttonText || "Learn More"}
                      </button>

                      {/* Secondary button with better spacing */}
                      <button className="sm:ml-0 border-2 border-white hover:border-blue-400 hover:text-blue-400 text-white px-4 sm:px-6 py-3 sm:py-3 rounded-md font-medium text-xs sm:text-sm uppercase tracking-wide transition-all w-full sm:w-auto max-w-xs">
                        Our Services
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements - hidden on mobile */}
              <div className="hidden lg:block absolute top-1/4 right-20 w-24 h-24 border-4 border-pink-500 opacity-20"></div>
              <div className="hidden lg:block absolute bottom-1/4 right-40 w-16 h-16 rounded-full border-4 border-white opacity-20"></div>
            </div>
          );
        })}
      </div>

      {/* Navigation arrows - responsive size and position */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 p-2 sm:p-3 md:p-4 rounded-full text-white hover:bg-opacity-60 transition-all duration-300 focus:outline-none z-20 transform hover:scale-110 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 p-2 sm:p-3 md:p-4 rounded-full text-white hover:bg-opacity-60 transition-all duration-300 focus:outline-none z-20 transform hover:scale-110 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Custom indicator dots with progress bars - responsive position */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center space-x-2 sm:space-x-4 z-20">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={index}
              onClick={() => handleGoToSlide(index)}
              className={`transition-all duration-300 h-2 sm:h-3 rounded-full ${
                isActive
                  ? "w-8 sm:w-12 "
                  : "w-2 sm:w-3 bg-white bg-opacity-60 hover:bg-opacity-100"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {isActive && (
                <div className="h-full w-full relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 bg-white bg-opacity-30 w-full animate-progress origin-left"></div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Slide counter - responsive sizing and position */}
      <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-white font-bold z-20 bg-black bg-opacity-30 px-2 py-1 rounded-md">
        <span className="text-xl sm:text-2xl">{currentIndex + 1}</span>
        <span className="text-xs sm:text-sm text-white text-opacity-60 mx-1 sm:mx-2">
          /
        </span>
        <span className="text-xs sm:text-sm text-white text-opacity-60">
          {slides.length}
        </span>
      </div>

      {/* Social media links - collapsed on mobile */}
      <div className="hidden md:flex flex-col absolute right-6 top-1/2 transform -translate-y-1/2 z-10 space-y-4">
        <a
          href="#"
          className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-pink-600 rounded-full flex items-center justify-center transition duration-300"
        >
          <Instagram size={14} color="white" />
        </a>
        <a
          href="#"
          className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-blue-600 rounded-full flex items-center justify-center transition duration-300"
        >
          <Facebook size={14} color="white" />
        </a>
        <a
          href="#"
          className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-blue-600 rounded-full flex items-center justify-center transition duration-300"
        >
          <Twitter size={14} color="white" />
        </a>
      </div>

      {/* Mobile social menu toggle */}
      <div className="md:hidden absolute top-4 right-16 z-20">
        <button
          onClick={toggleSocialMenu}
          className="w-8 h-8 bg-black bg-opacity-40 rounded-full flex items-center justify-center"
          aria-label="Toggle social menu"
        >
          <Menu size={16} color="white" />
        </button>

        {/* Mobile social popup */}
        {showSocialMenu && (
          <div className="absolute top-10 right-0 bg-black bg-opacity-70 p-2 rounded-lg flex space-x-2">
            <a
              href="#"
              className="w-8 h-8 bg-white bg-opacity-20 hover:bg-pink-600 rounded-full flex items-center justify-center transition duration-300"
            >
              <Instagram size={14} color="white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white bg-opacity-20 hover:bg-blue-600 rounded-full flex items-center justify-center transition duration-300"
            >
              <Facebook size={14} color="white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white bg-opacity-20 hover:bg-blue-600 rounded-full flex items-center justify-center transition duration-300"
            >
              <Twitter size={14} color="white" />
            </a>
          </div>
        )}
      </div>

      {/* Scroll down indicator - hidden on smallest screens */}
      <div className="hidden sm:block absolute bottom-24 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <p className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-70">
          Scroll Down
        </p>
        <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full mx-auto flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-progress {
          animation: progress 6s linear;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.2s forwards;
        }

        /* Optimize for mobile */
        @media (max-width: 640px) {
          .animate-progress {
            animation: progress 6s linear;
          }
          .animate-slideUp {
            animation: slideUp 0.6s ease-out 0.1s forwards;
          }
        }
      `}</style>
    </div>
  );
}
