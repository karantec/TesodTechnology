import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-20 z-50 bg-white shadow-md">
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
                  href="/Foreign"
                  className="hover:text-blue-600 transition-colors"
                >
                  विदेश
                </a>
              </li>
              <li>
                <a
                  href="/मनोरंजन"
                  className="hover:text-blue-600 transition-colors"
                >
                  मनोरंजन
                </a>
              </li>
              <li>
                <a
                  href="/खेल"
                  className="hover:text-blue-600 transition-colors"
                >
                  खेल
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

          {/* Search and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              className="hidden md:block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FaSearch className="text-xl" />
            </button>

            {/* Hamburger Menu */}
            <button
              className="text-gray-700 text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
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

      {/* Expanded Hamburger Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white text-black z-40 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold text-lg mb-2">क्षेत्र</h3>
                <ul>
                  <li>अफ्रीका</li>
                  <li>एशिया</li>
                  <li>यूरोप</li>
                  <li>लैटिन अमेरिका</li>
                  <li>मध्य पूर्व</li>
                  <li>उत्तर अमेरिका</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">विषय</h3>
                <ul>
                  <li>जलवायु</li>
                  <li>समानता</li>
                  <li>स्वास्थ्य</li>
                  <li>माइग्रेशन</li>
                  <li>प्रौद्योगिकी</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">श्रेणियाँ</h3>
                <ul>
                  <li>व्यवसाय</li>
                  <li>पर्यावरण</li>
                  <li>मानवाधिकार</li>
                  <li>खेल</li>
                  <li>संस्कृति</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
