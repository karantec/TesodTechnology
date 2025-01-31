import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

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
          <a href="/" className="flex items-center">
            <span className="ml-2 font-bold text-lg uppercase text-red-800">
              NationFirst
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 font-medium text-gray-700">
              <li><a href="/भारत" className="hover:text-blue-600 transition-colors">भारत</a></li>
              <li><a href="/अंतरराष्ट्रीय" className="hover:text-blue-600 transition-colors">अंतरराष्ट्रीय</a></li>
              <li><a href="/राष्ट्रीय" className="hover:text-blue-600 transition-colors">राष्ट्रीय</a></li>
              <li><a href="/राज्य" className="hover:text-blue-600 transition-colors">राज्य</a></li>
              <li><a href="/राजनीति" className="hover:text-blue-600 transition-colors">राजनीति</a></li>
              <li><a href="/शिक्षा" className="hover:text-blue-600 transition-colors">शिक्षा</a></li>
              <li><a href="/रोजगार" className="hover:text-blue-600 transition-colors">रोजगार</a></li>
              <li><a href="/पर्यटन" className="hover:text-blue-600 transition-colors">पर्यटन</a></li>
              <li><a href="/खेल" className="hover:text-blue-600 transition-colors">खेल</a></li>
              <li><a href="/मौसम" className="hover:text-blue-600 transition-colors">मौसम</a></li>
              <li><a href="/जायका" className="hover:text-blue-600 transition-colors">जायका</a></li>
              <li><a href="/स्वास्थ्य" className="hover:text-blue-600 transition-colors">स्वास्थ्य</a></li>
              <li><a href="/व्यापार" className="hover:text-blue-600 transition-colors">व्यापार</a></li>
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
              className="flex text-gray-700 hover:text-blue-600 transition-colors z-50"
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
            <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={handleOverlayClick} />
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white w-4/5 max-w-full overflow-auto z-30">
              <div className="container mx-auto px-4 py-6">
                <nav className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                  <a href="/भारत" className="block text-lg font-medium text-gray-900 hover:text-blue-600">भारत</a>
                  <a href="/अंतरराष्ट्रीय" className="block text-lg font-medium text-gray-900 hover:text-blue-600">अंतरराष्ट्रीय</a>
                  <a href="/राष्ट्रीय" className="block text-lg font-medium text-gray-900 hover:text-blue-600">राष्ट्रीय</a>
                  <a href="/राज्य" className="block text-lg font-medium text-gray-900 hover:text-blue-600">राज्य</a>
                  <a href="/राजनीति" className="block text-lg font-medium text-gray-900 hover:text-blue-600">राजनीति</a>
                  <a href="/शिक्षा" className="block text-lg font-medium text-gray-900 hover:text-blue-600">शिक्षा</a>
                  <a href="/रोजगार" className="block text-lg font-medium text-gray-900 hover:text-blue-600">रोजगार</a>
                  <a href="/पर्यटन" className="block text-lg font-medium text-gray-900 hover:text-blue-600">पर्यटन</a>
                  <a href="/खेल" className="block text-lg font-medium text-gray-900 hover:text-blue-600">खेल</a>
                  <a href="/मौसम" className="block text-lg font-medium text-gray-900 hover:text-blue-600">मौसम</a>
                  <a href="/जायका" className="block text-lg font-medium text-gray-900 hover:text-blue-600">जायका</a>
                  <a href="/स्वास्थ्य" className="block text-lg font-medium text-gray-900 hover:text-blue-600">स्वास्थ्य</a>
                  <a href="/व्यापार" className="block text-lg font-medium text-gray-900 hover:text-blue-600">व्यापार</a>
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
