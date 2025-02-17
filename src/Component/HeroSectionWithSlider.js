import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HeroCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("https://bbc-newsbackend-2yyf.onrender.com/api/news/News");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSlides(data.data.slice(0, 4)); // Ensure only 4 slides
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSlides();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return <div>Error: No slides available</div>;
  }

  return (
    <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] bg-gray-200 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.thumbnailUrl || slide.newImage?.[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-opacity-50 text-white p-6 sm:p-8 md:p-12 w-2/3 sm:w-1/2 lg:w-1/3 rounded-md ml-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg">{slide.content || slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
    </section>
  );
};

export default HeroCarousel;
