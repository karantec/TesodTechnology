import React, { useEffect, useRef, useState } from "react";

const HeroSliderWithContent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();
    
    const slides = [
      {
        image: "https://img.youtube.com/vi/maF-veTzMIU/hqdefault.jpg",
        title: "दिल्ली चुनाव में चिराग पासवान का चौंकाने वाला एलान LIVE",
        description: "Stay updated with the latest news and stories happening around the world.",
      },
      {
        image: "https://img.youtube.com/vi/maF-veTzMIU/hqdefault.jpg",
        title: "दिल्ली चुनाव में चिराग पासवान का चौंकाने वाला एलान LIVE",
        description: "Stay updated with the latest news and stories happening around the world.",
      },
      {
        image: "https://img.youtube.com/vi/maF-veTzMIU/hqdefault.jpg",
        title: "दिल्ली चुनाव में चिराग पासवान का चौंकाने वाला एलान LIVE",
        description: "Stay updated with the latest news and stories happening around the world.",
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [slides.length]);
  
    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: currentSlide * sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, [currentSlide]);
  
    return (
      <section className="relative w-full h-[600px] overflow-hidden bg-gray-200 mt-20">
        <div
          ref={sliderRef}
          className="flex w-full h-full transition-all duration-700 overflow-x-hidden"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-black bg-opacity-50 text-white p-8 rounded-md w-3/4 md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section>
    );
  };
  
export default HeroSliderWithContent;
