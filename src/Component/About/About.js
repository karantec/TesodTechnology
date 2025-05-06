import React from "react";

const AboutUs = () => {
  return (
    <div className="about-page bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Enhanced Animated Gradient */}
      <header className="relative py-32 overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 bottom-0 right-0 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight text-white tracking-tight">
              About Tesod{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Technology
              </span>
            </h1>
            <p className="text-2xl text-blue-100 font-light">
              Innovating for a better tomorrow since 2015
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative">
        {/* Our Story Card - Elevated */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-24 transform -mt-24 relative z-20 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="mr-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              At{" "}
              <span className="text-blue-600 font-semibold">
                Tesod Technology Private Limited
              </span>
              , we are committed to revolutionizing the digital landscape with
              cutting-edge{" "}
              <span className="text-blue-600 font-semibold">
                web development, Android app development, and digital marketing
                solutions
              </span>
              . Our expertise spans across multiple domains, ensuring businesses
              achieve their goals with high-performance digital solutions.
            </p>
            <p>
              Founded in 2015, Tesod Technology began with a simple mission: to
              create innovative solutions that solve real-world problems. What
              started as a small team of passionate engineers has grown into a
              leading technology company trusted by businesses worldwide.
            </p>
            <p>
              Through dedication to excellence and customer-focused innovation,
              we've established ourselves as pioneers in digital transformation.
              Our journey continues as we push the boundaries of what's
              possible.
            </p>
          </div>
        </div>

        {/* Mission Statement - Refined */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 inline-block relative">
              Our Mission
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 shadow-inner relative overflow-hidden">
            {/* Decorative Quote Marks */}
            <div className="absolute top-6 left-8 text-blue-200 opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388a.5.5 0 0 1-.447-.276l-.939-1.878a.5.5 0 0 1 .447-.724H12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3.134a.5.5 0 0 1-.106.307l-2.291 3.151A1 1 0 0 0 5 11h7a1 1 0 0 0 1-1zm-6 1a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612a.5.5 0 0 1-.447-.276l-.939-1.878a.5.5 0 0 1 .447-.724H6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v3.134a.5.5 0 0 1-.106.307L.893 9.592A1 1 0 0 0 1 11h5z" />
              </svg>
            </div>

            <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center relative z-10 font-light">
              At Tesod Technology, we are committed to developing cutting-edge
              solutions that empower businesses to thrive in the digital age. We
              believe in technology that is{" "}
              <span className="text-blue-600 font-medium">accessible</span>,{" "}
              <span className="text-indigo-600 font-medium">sustainable</span>,
              and makes a{" "}
              <span className="text-purple-600 font-medium">
                positive impact
              </span>{" "}
              on society.
            </p>
          </div>
        </div>

        {/* Services Section - Premium Layout */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 inline-block relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Development Card */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg
                    className="w-16 h-16 text-white relative z-10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
                  </svg>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                    Web Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Custom websites and web applications tailored to your
                    business needs with responsive design and optimal
                    performance.
                  </p>
                </div>
                <div className="px-8 pb-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                  <p className="text-blue-600 font-medium flex items-center">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>

            {/* Android App Development Card */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="h-32 bg-gradient-to-r from-indigo-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg
                    className="w-16 h-16 text-white relative z-10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path>
                  </svg>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                    Android App Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Native and cross-platform mobile applications that deliver
                    exceptional user experiences and robust functionality.
                  </p>
                </div>
                <div className="px-8 pb-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                  <p className="text-indigo-600 font-medium flex items-center">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>

            {/* Digital Marketing Card */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="h-32 bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg
                    className="w-16 h-16 text-white relative z-10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                    Digital Marketing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive digital marketing strategies to increase your
                    online presence, drive traffic, and convert leads.
                  </p>
                </div>
                <div className="px-8 pb-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                  <p className="text-purple-600 font-medium flex items-center">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section - Modern & Premium */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 inline-block relative">
              Our Values
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-1 mb-6">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Innovation Value */}
              <div className="p-10 border-r border-gray-100 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <svg
                      className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                    Innovation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We constantly push boundaries and explore new possibilities
                    to create solutions that make a difference.
                  </p>
                </div>
              </div>

              {/* Customer Success Value */}
              <div className="p-10 border-r border-gray-100 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                    <svg
                      className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                    Customer Success
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We prioritize customer satisfaction, ensuring that every
                    solution meets the needs and goals of our clients.
                  </p>
                </div>
              </div>

              {/* Integrity Value */}
              <div className="p-10 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                    <svg
                      className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                    Integrity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We operate with transparency, accountability, and honesty in
                    every aspect of our business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section - New Addition */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 inline-block relative">
              Client Testimonials
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-12 shadow-inner">
            <div className="max-w-4xl mx-auto">
              <svg
                className="w-12 h-12 text-blue-300 mb-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>

              <p className="text-2xl font-light text-gray-700 leading-relaxed mb-6">
                Tesod Technology transformed our digital presence completely.
                Their team developed a cutting-edge web platform that increased
                our conversions by 40% and a mobile app that our customers love.
                Their attention to detail and customer-focused approach exceeded
                our expectations.
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <p className="text-gray-600">CEO, Global Solutions Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - New Addition */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl"></div>
              <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 bottom-0 right-0 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Experience?
              </h2>
              <p className="text-blue-100 text-xl mb-8">
                Let's collaborate to create innovative solutions that drive your
                business forward.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white text-blue-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                  Contact Us
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
