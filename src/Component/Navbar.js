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
            <img
              className="h-10"
              src="/api/placeholder/40/40"
              alt="Logo"
            />
            <span className="ml-2 font-bold text-lg text-gray-800">
              NationFirst9
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 font-medium text-gray-700">
              <li><a href="/" className="hover:text-blue-600 transition-colors">भारत</a></li>
              <li><a href="/Foreign" className="hover:text-blue-600 transition-colors">विदेश</a></li>
              <li><a href="/मनोरंजन" className="hover:text-blue-600 transition-colors">मनोरंजन</a></li>
              <li><a href="/खेल" className="hover:text-blue-600 transition-colors">खेल</a></li>
              <li><a href="/podcast" className="hover:text-blue-600 transition-colors">पॉडकास्ट</a></li>
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

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-20 left-0 right-0 bg-gray-100 border-t border-b border-gray-300 z-50">
            <div className="container mx-auto px-4 py-2">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search news, articles, or topics..."
              />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={handleOverlayClick}
          />
          
          {/* Menu Content */}
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-white overflow-y-auto z-30">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Navigation */}
              <nav className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                <a href="/" className="block text-lg font-medium text-gray-900 hover:text-blue-600">भारत</a>
                <a href="/Foreign" className="block text-lg font-medium text-gray-900 hover:text-blue-600">विदेश</a>
                <a href="/मनोरंजन" className="block text-lg font-medium text-gray-900 hover:text-blue-600">मनोरंजन</a>
                <a href="/खेल" className="block text-lg font-medium text-gray-900 hover:text-blue-600">खेल</a>
                <a href="/podcast" className="block text-lg font-medium text-gray-900 hover:text-blue-600">पॉडकास्ट</a>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
