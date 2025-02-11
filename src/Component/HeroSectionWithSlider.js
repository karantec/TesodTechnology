import React, { useEffect, useRef, useState } from "react";

const HeroSliderWithContent = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Fetch slider data from the API endpoint
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("https://bbc-newsbackend-2yyf.onrender.com/api/news/News");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSlides(data.data); // Ensure slides is an array
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSlides();
  }, []);

  // Set up auto-slide interval only when there are slides available
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides]);

  // Scroll to the correct slide whenever currentSlide changes
  useEffect(() => {
    if (sliderRef.current && slides.length > 0) {
      sliderRef.current.scrollTo({
        left: currentSlide * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide, slides]);

  // Ensure that slides is an array before attempting to map over it
  if (!Array.isArray(slides)) {
    return <div>Error: The slides data is not an array</div>;
  }

  return (
    <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] bg-gray-200 ">
      <div
        ref={sliderRef}
        className="flex w-full h-full transition-all duration-700 overflow-x-hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full opacity-90 h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide.thumbnailUrl || slide.newImage?.[0]})`, // Use appropriate image field
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-white mr-36 p-4 sm:p-6 lg:p-8 rounded-md w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
              <h2 className="text-2xl mt-96 text-white sm:text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-center">
                {slide.title}
              </h2>
              <p className="text-md text-black sm:text-base md:text-lg text-center">
                {slide.content || slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for Navigation */}
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
