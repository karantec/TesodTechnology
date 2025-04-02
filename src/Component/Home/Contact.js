import React, { useState } from 'react';
import axios from 'axios';
import { MapPin, Mail, MessageCircle, Phone, Home } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify'; // Importing toast functions
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the toast

const ContactSection = () => {
  // Form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8000/contact/create', formData);
      setSubmissionStatus('Message sent successfully!');
      
      // Show toast on success
      toast.success('Your message has been sent!');

      // Clear form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmissionStatus('Failed to send message. Please try again.');
      
      // Show toast on error
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white shadow-lg">
      {/* Google Maps Iframe */}
      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113966.78628093463!2d83.410435!3d26.793412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1742854370245!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container px-6 py-16 mx-auto">
        <div className="text-center mb-16">
          <p className="font-medium text-blue-700 text-lg tracking-wide uppercase">Contact Us</p>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 leading-tight">Get in Touch with Our Team</h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {[{ icon: <Mail className="w-8 h-8 text-blue-600" />, title: "Email", description: "Direct communication channel", contact: "Click Here.." },
              { icon: <MessageCircle className="w-8 h-8 text-blue-600" />, title: "Live Chat", description: "Instant support available", contact: "Start new chat" },
              { icon: <Home className="w-8 h-8 text-blue-600" />, title: "Office Address", description: "Our physical location", contact: "160 Sonaura, Bujurg, Campierganj Gorakhpur-273158 Uttar Pradesh India" },
              { icon: <Phone className="w-8 h-8 text-blue-600" />, title: "Phone Number", description: "Call us anytime", contact: "+91 7392813136" }].map((method, index) => (
                <div key={index} className="p-6 bg-blue-50 rounded-3xl">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                    {method.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3">{method.title}</h2>
                  <p className="text-base text-gray-600 mb-2">{method.description}</p>
                  <p className="text-base text-blue-700 font-semibold break-words">{method.contact}</p>
                </div>
              ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-3 text-base text-gray-700 font-semibold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-5 py-3 text-base text-gray-700 bg-gray-50 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block mb-3 text-base text-gray-700 font-semibold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-5 py-3 text-base text-gray-700 bg-gray-50 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-3 text-base text-gray-700 font-semibold">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 text-base text-gray-700 bg-gray-50 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block mb-3 text-base text-gray-700 font-semibold">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 text-base text-gray-700 bg-gray-50 rounded-xl border border-gray-300 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300 ease-in-out"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Submission Status */}
            {submissionStatus && (
              <div className="mt-4 text-center">
                <p className={`text-lg ${submissionStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                  {submissionStatus}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer /> {/* This is required to display the toasts */}
    </section>
  );
};

export default ContactSection;
