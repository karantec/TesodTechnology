import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FullPageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample carousel data - replace with your own images and descriptions
  const slides = [
    {
      image: "https://imgs.search.brave.com/xPWalHAS4364wiBc-YTIlUoRbrt2tDhtksrIWU_safA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9kYXRhLXBhc3N3/b3JkLXNlY3VyaXR5/LWxvY2stZnJlZS1p/bWFnZS5qcGVnP3c9/NjAwJnF1YWxpdHk9/ODA",
      title: "Beautiful Nature",
      description: "Explore the wonders of nature with this stunning landscape view."
    },
    {
      image: "https://imgs.search.brave.com/xPWalHAS4364wiBc-YTIlUoRbrt2tDhtksrIWU_safA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9kYXRhLXBhc3N3/b3JkLXNlY3VyaXR5/LWxvY2stZnJlZS1p/bWFnZS5qcGVnP3c9/NjAwJnF1YWxpdHk9/ODA",
      title: "City Life",
      description: "Experience the vibrant energy of urban architecture and design."
    },
    {
      image: "https://imgs.search.brave.com/xPWalHAS4364wiBc-YTIlUoRbrt2tDhtksrIWU_safA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9kYXRhLXBhc3N3/b3JkLXNlY3VyaXR5/LWxvY2stZnJlZS1p/bWFnZS5qcGVnP3c9/NjAwJnF1YWxpdHk9/ODA",
      title: "Ocean Wonders",
      description: "Dive into the magical world beneath the waves."
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Main carousel container */}
      <div className="relative w-full h-full">
        {/* Images and descriptions */}
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">{slide.title}</h3>
              <p className="text-base md:text-lg mt-2">{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 focus:outline-none z-10 lg:left-8"
        >
          <ChevronLeft size={30} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75 focus:outline-none z-10 lg:right-8"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full focus:outline-none transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
