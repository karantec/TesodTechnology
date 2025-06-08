import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topRightItems = [
    { name: "Internship", path: "/internship" },
    { name: "Case Study", path: "/case-study" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },

    { name: "Schedule a Meeting", path: "/support-ticket" },
    { name: "Login", path: "/login" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Testimonials", path: "/testimonial" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      {/* Top Header - Premium Style */}
      <div className="hidden md:block bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 py-2 border-b border-gray-200">
        <div className="container mx-auto flex justify-end space-x-6 text-sm px-6">
          {topRightItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-blue-700 font-medium transition-colors duration-200 flex items-center"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Navbar - Premium Style */}
      <nav
        className={`bg-gradient-to-r from-gray-900 to-black text-white transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo and Company Name - Made clickable with Link component and reduced size */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/logo2.png"
              alt="Tesod Technology Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-14 w-24" : "h-16 w-28"
              } group-hover:opacity-90`}
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white group-hover:from-blue-200 group-hover:to-white transition-all duration-200">
                Tesod
              </span>
              <span className="font-light text-base text-blue-200 group-hover:text-blue-100 transition-colors duration-200">
                Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Only visible on large screens (lg and up) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`relative font-medium px-1 py-2 hover:text-blue-300 transition-colors duration-200
                  ${
                    location.pathname === path
                      ? "text-blue-300"
                      : "text-gray-100"
                  }
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 
                  after:transition-all after:duration-300 hover:after:w-full`}
              >
                {name}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-2.5 rounded-md shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium">
              Get Free Quotation
            </button>
          </div>

          {/* Hamburger Menu Toggle - Visible on all screens except large (lg) screens */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none bg-blue-800 bg-opacity-20 p-2 rounded-full transition-colors duration-200 hover:bg-opacity-30"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Menu - Premium Style with Animation */}
        <div
          className={`lg:hidden bg-gradient-to-b from-gray-900 to-black overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`block py-2 border-b border-gray-800 text-white hover:text-blue-300 transition-colors duration-200 ${
                  location.pathname === path ? "text-blue-300" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 font-medium">
                Get Free Quotation
              </button>
            </div>

            {/* Top menu items also included in hamburger for tablet and mobile */}
            <div className="pt-6 mt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-3">Quick Links</p>
              <div className="grid grid-cols-2 gap-2">
                {topRightItems.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="text-sm py-2 text-gray-300 hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
