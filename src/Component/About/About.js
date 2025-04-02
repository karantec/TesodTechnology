import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-page bg-gray-50">
      {/* Hero Section with Animated Gradient */}
      <header className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">About Tesod Technology</h1>
          <p className="text-2xl max-w-2xl">Innovating for a better tomorrow since 2015</p>
        </div>
      </header>

      {/* About Section with Card Layout */}
      <section className="container mx-auto px-6 py-16 mt-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 transform -mt-16 relative z-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At <span className="text-blue-600 font-semibold">Tesod Technology Private Limited</span>, we are committed to revolutionizing the digital landscape with cutting-edge <span className="text-blue-600 font-semibold">web development, Android app development, and digital marketing solutions</span>. Our expertise spans across multiple domains, ensuring businesses achieve their goals with high-performance digital solutions.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Founded in 2015, Tesod Technology began with a simple mission: to create innovative solutions that solve real-world problems. What started as a small team of passionate engineers has grown into a leading technology company trusted by businesses worldwide.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through dedication to excellence and customer-focused innovation, we've established ourselves as pioneers in digital transformation. Our journey continues as we push the boundaries of what's possible.
          </p>
        </div>

        {/* Mission Statement with Visual Appeal */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-10 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-16 h-1 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl italic border-l-4 border-blue-500 pl-6">
            "At Tesod Technology, we are committed to developing cutting-edge solutions that empower businesses to thrive in the digital age. We believe in technology that is accessible, sustainable, and makes a positive impact on society."
          </p>
        </div>

        {/* Services Section with Hover Effects */}
        <div className="mb-20">
          <div className="flex items-center mb-10">
            <div className="w-16 h-1 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Web Development</h3>
              <p className="text-gray-600 leading-relaxed">Custom websites and web applications tailored to your business needs with responsive design and optimal performance.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-indigo-500">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Android App Development</h3>
              <p className="text-gray-600 leading-relaxed">Native and cross-platform mobile applications that deliver exceptional user experiences and robust functionality.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Digital Marketing</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive digital marketing strategies to increase your online presence, drive traffic, and convert leads.</p>
            </div>
          </div>
        </div>

        {/* Values Section with Modern Design */}
        <div className="mb-20">
          <div className="flex items-center mb-10">
            <div className="w-16 h-1 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">We constantly push boundaries and explore new possibilities to create solutions that make a difference.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-24 bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M6 7h12v12H6V7z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">Customer Success</h3>
                <p className="text-gray-600 leading-relaxed">We prioritize customer satisfaction, ensuring that every solution meets the needs and goals of our clients.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-24 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">We operate with transparency, accountability, and honesty in every aspect of our business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
