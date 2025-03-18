import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".mobile-menu")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <section className="relative w-[100%] h-[80vh] bg-gradient-to-b from-blue-100 to-blue-500 overflow-hidden">
      {/* Background image */}
      <img
        src="Home.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      />

      {/* Desktop Navigation */}
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 hidden md:flex items-center  bg-opacity-90 rounded-full px-6 py-2 shadow-md z-10">
        {["About Us", "Portfolio", "Services", "Products", "Contact Us"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-blue-600"
            >
              {item}
            </a>
          )
        )}
      </nav>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-container absolute top-6 left-6 z-30 md:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="bg-white bg-opacity-90 p-2 rounded-full shadow-md"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 left-0 h-[80vh]  bg-opacity-95 shadow-lg z-40 w-64 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="p-2">
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          {["About Us", "Portfolio", "Services", "Products", "Contact Us"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="text-lg font-medium text-gray-800 hover:text-blue-600 border-b border-gray-200 pb-2"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl md:text-6xl lg:text-[100px] font-bold font-sans text-black mb-4">
          Supercharge Your <br />
        
        </h1>
        <p className="text-blue-900 text-6xl py-6 font-bold">Business</p>
        <p className="text-2xl md:text-[15px] lg:text-[32px] font-medium text-black mb-8">
          Fueling Growth Through Tailored Solutions
        </p>
        <button className="bg-[#464BF9] font-inter text-white font-medium py-3 px-6 md:px-8 rounded-full shadow-lg transition duration-300">
          Get in touch
        </button>
      </div>

      {/* Scroll Down Indicator (Hidden on Mobile) */}
      <div className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 text-center hidden sm:block">
        <img
          src="mouse.png"
          alt="Scroll Down"
          className="h-[50px] w-[50px] md:h-[66px] md:w-[66px] mx-auto animate-bounce"
        />
        <p className="text-[12px] md:text-[13px] mb-2">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
