// Navbar.js
import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-20 bg-white shadow-md z-40">
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8 overflow-hidden w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="ml-2 font-bold text-lg uppercase text-red-800">
              <img className="w-20 h-20" src={logo} alt="logo"/>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 font-medium text-gray-700">
              <li>
                <Link to="/category/भारत" className="hover:text-blue-600 transition-colors">
                  भारत
                </Link>
              </li>
              <li>
                <Link to="/category/अंतरराष्ट्रीय" className="hover:text-blue-600 transition-colors">
                  अंतरराष्ट्रीय
                </Link>
              </li>
              <li>
                <Link to="/category/राष्ट्रीय" className="hover:text-blue-600 transition-colors">
                  राष्ट्रीय
                </Link>
              </li>
              <li>
                <Link to="/category/राज्य" className="hover:text-blue-600 transition-colors">
                  राज्य
                </Link>
              </li>
              <li>
                <Link to="/category/राजनीति" className="hover:text-blue-600 transition-colors">
                  राजनीति
                </Link>
              </li>
              <li>
                <Link to="/category/शिक्षा" className="hover:text-blue-600 transition-colors">
                  शिक्षा
                </Link>
              </li>
              <li>
                <Link to="/category/रोजगार" className="hover:text-blue-600 transition-colors">
                  रोजगार
                </Link>
              </li>
              <li>
                <Link to="/category/पर्यटन" className="hover:text-blue-600 transition-colors">
                  पर्यटन
                </Link>
              </li>
              <li>
                <Link to="/category/खेल" className="hover:text-blue-600 transition-colors">
                  खेल
                </Link>
              </li>
              <li>
                <Link to="/category/मौसम" className="hover:text-blue-600 transition-colors">
                  मौसम
                </Link>
              </li>
              <li>
                <Link to="/category/जायका" className="hover:text-blue-600 transition-colors">
                  जायका
                </Link>
              </li>
              <li>
                <Link to="/category/स्वास्थ्य" className="hover:text-blue-600 transition-colors">
                  स्वास्थ्य
                </Link>
              </li>
              <li>
                <Link to="/category/व्यापार" className="hover:text-blue-600 transition-colors">
                  व्यापार
                </Link>
              </li>
              <li>
                <Link to="/podcast" className="hover:text-blue-600 transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-600 transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search and Menu Buttons */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden md:flex text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-6 w-6" />
            </button>

            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={handleOverlayClick}
            />
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white w-4/5 max-w-full overflow-auto z-30">
              <div className="container mx-auto px-4 py-6">
                <nav className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                  <Link
                    to="/category/भारत"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    भारत
                  </Link>
                  <Link
                    to="/category/अंतरराष्ट्रीय"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    अंतरराष्ट्रीय
                  </Link>
                  <Link
                    to="/category/राष्ट्रीय"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    राष्ट्रीय
                  </Link>
                  <Link
                    to="/category/राज्य"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    राज्य
                  </Link>
                  <Link
                    to="/category/राजनीति"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    राजनीति
                  </Link>
                  <Link
                    to="/category/शिक्षा"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    शिक्षा
                  </Link>
                  <Link
                    to="/category/रोजगार"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    रोजगार
                  </Link>
                  <Link
                    to="/category/पर्यटन"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    पर्यटन
                  </Link>
                  <Link
                    to="/category/खेल"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    खेल
                  </Link>
                  <Link
                    to="/category/मौसम"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    मौसम
                  </Link>
                  <Link
                    to="/category/जायका"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    जायका
                  </Link>
                  <Link
                    to="/category/स्वास्थ्य"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    स्वास्थ्य
                  </Link>
                  <Link
                    to="/category/व्यापार"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                  >
                    व्यापार
                  </Link>
                  <Link
                    to="/category/podcast"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    Podcast
                  </Link>
                  <Link
                    to="/category/blog"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    Blogs
                  </Link>
                </nav>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Navbar;
