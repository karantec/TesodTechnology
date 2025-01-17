import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              className="h-10"
              src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png"
              alt="Logo"
            />
            <span className="ml-2 font-bold text-lg text-gray-800">
              NationFirst9
            </span>
          </a>

          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 font-medium text-gray-700">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  भारत
                </a>
              </li>
              <li>
                <a
                  href="#foreign"
                  className="hover:text-blue-600 transition-colors"
                >
                  विदेश
                </a>
              </li>
              <li>
                <a
                  href="#entertainment"
                  className="hover:text-blue-600 transition-colors"
                >
                  मनोरंजन
                </a>
              </li>
              <li>
                <a
                  href="#sports"
                  className="hover:text-blue-600 transition-colors"
                >
                  खेल
                </a>
              </li>
              <li>
                <a
                  href="#science-tech"
                  className="hover:text-blue-600 transition-colors"
                >
                  विज्ञान-टेक्नॉलॉजी
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  className="hover:text-blue-600 transition-colors"
                >
                  सोशल
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="hover:text-blue-600 transition-colors"
                >
                  वीडियो
                </a>
              </li>
              <li>
                <a
                  href="/podcast"
                  className="hover:text-blue-600 transition-colors"
                >
                  पॉडकास्ट
                </a>
              </li>
            </ul>
          </nav>

          {/* Search and Login */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FaSearch className="text-xl" />
            </button>

            {/* Login Button */}
            <a
              href="#login"
              className="border border-blue-600 text-blue-600 rounded-full px-4 py-1 font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Login
            </a>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="bg-gray-100 border-t border-b border-gray-300">
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
    </>
  );
};

export default Navbar;
