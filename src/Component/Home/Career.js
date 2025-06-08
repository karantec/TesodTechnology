import React, { useState } from "react";

const InternshipPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    year: "",
    internshipType: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi! I'm interested in the internship program at Tesod Technology.
        
Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
College: ${formData.college}
Course: ${formData.course}
Year: ${formData.year}
Internship Type: ${formData.internshipType}
Cover Letter: ${formData.coverLetter}`;

    const whatsappUrl = `https://wa.me/+91 8737831726?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleUpcomingApply = () => {
    const message =
      "Hi! I'm interested in applying for the upcoming Winter internship program (October 2025). Please let me know the application process and requirements.";
    const whatsappUrl = `https://wa.me/+91 8737831726?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
            <span className="text-sm font-semibold">🚀 Join Our Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tesod Technology
            <span className="block text-yellow-300">Internship Program</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Launch your career with hands-on experience in cutting-edge
            technology. Build real projects, learn from industry experts, and
            shape the future of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Apply Now
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Schedule
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Internship Schedule */}
      <section id="schedule" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Internship Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer internship programs throughout the year. Here's our
              current schedule:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Current Internship */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Current
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Summer Internship 2025
                </h3>
                <p className="text-green-700 font-semibold mb-4">
                  June 2025 - August 2025
                </p>
                <p className="text-gray-600 mb-6">
                  3-month intensive program focusing on web development, mobile
                  app development, and AI/ML projects. Currently accepting
                  applications!
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 mr-2 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Duration: 12 weeks
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 mr-2 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Stipend: ₹15,000/month
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 mr-2 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Certificate provided
                </div>
              </div>
            </div>

            {/* Upcoming Internship */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Upcoming
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Winter Internship 2025
                </h3>
                <p className="text-blue-700 font-semibold mb-4">
                  October 2025 - December 2025
                </p>
                <p className="text-gray-600 mb-6">
                  Advanced internship program with focus on emerging
                  technologies like blockchain, IoT, and advanced AI
                  applications.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Duration: 12 weeks
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Stipend: ₹18,000/month
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Certificate + LOR provided
                </div>
              </div>
              <button
                onClick={handleUpcomingApply}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                Apply for Winter Internship
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Apply for Summer Internship
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll contact you via WhatsApp within
              24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label
                    htmlFor="college"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    College/University *
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Your college name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Course/Degree *
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="e.g., B.Tech CSE, BCA, MCA"
                  />
                </div>
                <div>
                  <label
                    htmlFor="year"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Current Year *
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Final Year">Final Year</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="internshipType"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Preferred Internship Domain *
                </label>
                <select
                  id="internshipType"
                  name="internshipType"
                  value={formData.internshipType}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                >
                  <option value="">Select Domain</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="AI/ML">AI/ML</option>
                  <option value="Data Science">Data Science</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Why do you want to join our internship program? *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Tell us about your interests, skills, and what you hope to learn during the internship..."
                />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-blue-700">
                    After submitting this form, you'll be redirected to WhatsApp
                    where we'll continue the application process.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Submit Application via WhatsApp
                <svg
                  className="ml-3 h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              What You'll Gain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our internship program is designed to provide comprehensive
              learning and real-world experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Real Projects
              </h3>
              <p className="text-gray-600">
                Work on actual client projects and contribute to live
                applications used by thousands of users.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Mentorship
              </h3>
              <p className="text-gray-600">
                Get guidance from experienced developers and industry
                professionals throughout your internship journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Certification
              </h3>
              <p className="text-gray-600">
                Receive industry-recognized certificates and letters of
                recommendation to boost your career prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Technologies You'll Learn
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get hands-on experience with the latest technologies and tools
              used in the industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", color: "bg-blue-100 text-blue-600" },
              { name: "Node.js", color: "bg-green-100 text-green-600" },
              { name: "Python", color: "bg-yellow-100 text-yellow-600" },
              { name: "MongoDB", color: "bg-green-100 text-green-600" },
              { name: "Flutter", color: "bg-blue-100 text-blue-600" },
              { name: "AI/ML", color: "bg-purple-100 text-purple-600" },
              { name: "AWS", color: "bg-orange-100 text-orange-600" },
              { name: "Docker", color: "bg-blue-100 text-blue-600" },
              { name: "Git", color: "bg-red-100 text-red-600" },
              { name: "JavaScript", color: "bg-yellow-100 text-yellow-600" },
              { name: "Figma", color: "bg-pink-100 text-pink-600" },
              { name: "Firebase", color: "bg-orange-100 text-orange-600" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${tech.color} mb-3`}
                >
                  <span className="font-bold text-lg">
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-gray-800">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Who can apply for the internship?
              </h3>
              <p className="text-gray-600">
                Students from any year (1st to Final year) pursuing B.Tech, BCA,
                MCA, or related computer science degrees can apply. We also
                welcome students from other backgrounds who have a passion for
                technology.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Is the internship remote or in-office?
              </h3>
              <p className="text-gray-600">
                We offer both remote and hybrid options. You can choose to work
                completely remotely or visit our office 2-3 times per week based
                on your preference and project requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                What is the selection process?
              </h3>
              <p className="text-gray-600">
                After applying through WhatsApp, you'll have a brief technical
                interview followed by a coding assignment. Selected candidates
                will then have a final interview with our technical team.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Will I get a certificate?
              </h3>
              <p className="text-gray-600">
                Yes! All successful interns receive an industry-recognized
                certificate of completion and a letter of recommendation from
                our technical team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students who have kickstarted their careers with
            Tesod Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <button
              onClick={() => {
                const message =
                  "Hi! I have some questions about the internship program. Can you help me?";
                const whatsappUrl = `https://wa.me/8737831726?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Ask Questions
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;
