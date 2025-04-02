import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample testimonial data
const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    image: "/api/placeholder/80/80",
    content: "Working with this team transformed our online presence completely. Their attention to detail and commitment to quality exceeded our expectations. We saw a 40% increase in customer engagement within just two months.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, StartUp Innovations",
    image: "/api/placeholder/80/80",
    content: "As a startup founder, I needed a partner who understood my vision and could work within our budget constraints. This company delivered beyond what I thought possible and became an essential part of our success story.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    image: "/api/placeholder/80/80",
    content: "I was hesitant about investing in professional services, but it's been the best decision for my business. Their team was responsive, creative, and truly cared about helping my business grow.",
    rating: 4
  },
  {
    id: 4,
    name: "David Williams",
    role: "Project Manager, Enterprise Solutions",
    image: "/api/placeholder/80/80",
    content: "We've worked with many vendors over the years, but none have provided the level of expertise and dedication that we experienced here. They're now our go-to partner for all our projects.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Director of Operations, HealthLife",
    image: "/api/placeholder/80/80",
    content: "In our industry, compliance and attention to detail are critical. This team not only understood our unique requirements but provided solutions that were both innovative and fully compliant with industry standards.",
    rating: 5
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "E-commerce Manager",
    image: "/api/placeholder/80/80",
    content: "Our online sales have increased by 65% since implementing their recommendations. Their team took the time to understand our products and customers, resulting in a strategy that really worked for us.",
    rating: 4
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`text-xl ${i <= rating ? "text-yellow-500" : "text-gray-300"}`}>
        ★
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

// Testimonial card component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 text-gray-700 italic">"{testimonial.content}"</p>
    </div>
  );
};

const TestimonialsPage = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);
  const navigate = useNavigate();  // Using the useNavigate hook from React Router v6

  const handleSeeMoreClick = () => {
    navigate('/testimonials');  // Navigates to the testimonials page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">What Our Clients Say</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses and individuals
            who have transformed their success with our solutions.
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.slice(0, visibleTestimonials).map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* See More button */}
        {visibleTestimonials < testimonialData.length && (
          <div className="mt-8 text-center">
            <button 
              onClick={handleSeeMoreClick} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              See More
            </button>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to join our success stories?</h2>
          <p className="mb-6 text-gray-700">
            Contact us today to discuss how we can help achieve your goals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default TestimonialsPage;
