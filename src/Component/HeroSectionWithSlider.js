import React, { useEffect, useRef, useState } from "react";

const HeroSliderWithContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const slides = [
    {
      image: "https://www.krrda.in/wp-content/uploads/2024/10/today-breaking-news.webp",
      title: "Breaking News",
      description: "Stay updated with the latest news and stories happening around the world.",
    },
    {
      image: "https://www.krrda.in/wp-content/uploads/2024/10/today-breaking-news.webp",
      title: "World Events",
      description: "Explore events shaping the future of nations and societies globally.",
    },
    {
      image: "https://www.krrda.in/wp-content/uploads/2024/10/today-breaking-news.webp",
      title: "Entertainment",
      description: "Catch up with the latest trends in movies, music, and pop culture.",
    },
    {
      image: "https://www.krrda.in/wp-content/uploads/2024/10/today-breaking-news.webp",
      title: "Sports Updates",
      description: "Get the latest updates from the world of sports and competitions.",
    },
  ];

  // Automatically change slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Scroll slider to the current slide
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-gray-200">
      {/* Slider Container */}
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

      {/* Navigation Dots */}
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
