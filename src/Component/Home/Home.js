import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

export default function EnhancedPremiumCarousel() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch data from the carousel API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://tesodtechnologyfinal.onrender.com/crousel');
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error('Error fetching carousel data:', error);
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

  // Animation classes based on active slide
  const getAnimationClass = (index) => {
    return index === currentIndex && isLoaded 
      ? 'opacity-100 transform translate-y-0' 
      : 'opacity-0 transform translate-y-8';
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrev = (index === currentIndex - 1) || (currentIndex === 0 && index === slides.length - 1);
          const isNext = (index === currentIndex + 1) || (currentIndex === slides.length - 1 && index === 0);
          
          return (
            <div
              key={slide._id || index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isActive 
                  ? 'opacity-100 translate-x-0 z-10' 
                  : isPrev
                    ? 'opacity-0 -translate-x-full z-0'
                    : isNext
                      ? 'opacity-0 translate-x-full z-0'
                      : 'opacity-0 translate-x-full z-0'
              }`}
            >
              {/* Image with zoom effect */}
              <div 
                className="relative w-full h-full transition-transform duration-10000 ease-linear" 
                style={{transform: isActive ? 'scale(1)' : 'scale(1.05)'}}
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

              {/* Content container with animation - now positioned left with accent colors */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-20">
                  <div className="max-w-xl text-white text-left">
                    {/* Subtitle with fade-in animation */}
                    <div className={`transition-all duration-700 delay-300 ease-out ${getAnimationClass(index)}`}>
                      <h6 className="text-sm md:text-base uppercase tracking-widest mb-3 inline-block bg-blue-600 bg-opacity-80 px-3 py-1 rounded">
                        {slide.subtitle || 'Featured'}
                      </h6>
                    </div>
                    
                    {/* Title with fade-in animation */}
                    <div className={`transition-all duration-700 delay-500 ease-out ${getAnimationClass(index)}`}>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                        {slide.title}
                      </h1>
                    </div>
                    
                    {/* Divider with animation */}
                    <div className={`transition-all duration-700 delay-700 ease-out ${getAnimationClass(index)}`}>
                      <div className="w-24 h-1 bg-blue-500 mb-6"></div>
                    </div>
                    
                    {/* Description with fade-in animation */}
                    <div className={`transition-all duration-700 delay-900 ease-out ${getAnimationClass(index)}`}>
                      <p className="text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
                        {slide.description}
                      </p>
                    </div>
                    
                    {/* Buttons with animation */}
                    <div className={`transition-all duration-700 delay-1100 ease-out ${getAnimationClass(index)}`}>
                      <button className="bg-blue-400 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-sm uppercase tracking-wide hover:shadow-lg transition-all">
                        {slide.buttonText || 'Learn More'}
                      </button>
                      
                      {/* Secondary button */}
                      <button className="ml-4 border border-white hover:border-blue-400 hover:text-blue-700 text-white px-6 py-3 rounded-md font-medium text-sm uppercase tracking-wide transition-all">
                        Our Services
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="hidden md:block absolute top-1/4 right-20 w-24 h-24 border-4 border-pink-500 opacity-20"></div>
              <div className="hidden md:block absolute bottom-1/4 right-40 w-16 h-16 rounded-full border-4 border-white opacity-20"></div>
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-opacity-30 p-4 rounded-full text-white hover:bg-opacity-60 transition-all duration-300 focus:outline-none z-20 transform hover:scale-110 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-opacity-30 p-4 rounded-full text-white hover:bg-opacity-60 transition-all duration-300 focus:outline-none z-20 transform hover:scale-110 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Custom indicator dots with progress bars */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-20">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          
          return (
            <button
              key={index}
              onClick={() => handleGoToSlide(index)}
              className={`transition-all duration-300 h-3 rounded-full ${
                isActive 
                  ? 'w-12 ' 
                  : 'w-3 bg-white bg-opacity-60 hover:bg-opacity-100'
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

      {/* Slide counter - more modern and clean */}
      <div className="absolute top-8 right-8 text-white font-bold z-20">
        <span className="text-2xl">{currentIndex + 1}</span>
        <span className="text-sm text-white text-opacity-60 mx-2">/</span>
        <span className="text-sm text-white text-opacity-60">{slides.length}</span>
      </div>

      {/* Social media links */}
      <div className="hidden md:flex flex-col absolute right-6 top-1/2 transform -translate-y-1/2 z-10 space-y-4">
        <a href="#" className="w-10 h-10 bg-white bg-opacity-20 hover:bg-pink-600 rounded-full flex items-center justify-center transition duration-300">
          <Instagram size={16} color="white" />
        </a>
        <a href="#" className="w-10 h-10 bg-white bg-opacity-20 hover:bg-blue-600 rounded-full flex items-center justify-center transition duration-300">
          <Facebook size={16} color="white" />
        </a>
        <a href="#" className="w-10 h-10 bg-white bg-opacity-20 hover:bg-blue-600 rounded-full flex items-center justify-center transition duration-300">
          <Twitter size={16} color="white" />
        </a>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <p className="text-sm mb-2 opacity-70">Scroll Down</p>
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-progress {
          animation: progress 6s linear;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </div>
  );
}