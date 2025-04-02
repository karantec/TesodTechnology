import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseTesod = () => {
  const reasons = [
    {
      title: "Experienced Team",
      description: "Led by experts in development and digital marketing.",
      icon: <CheckCircle className="text-blue-500" />
    },
    {
      title: "Client-Centric Approach",
      description: "Customized solutions tailored to business needs.",
      icon: <CheckCircle className="text-blue-500" />
    },
    {
      title: "Affordable & Transparent Pricing",
      description: "No hidden costs, just quality services.",
      icon: <CheckCircle className="text-blue-500" />
    },
    {
      title: "End-to-End Support",
      description: "From project inception to final delivery, we ensure 100% satisfaction.",
      icon: <CheckCircle className="text-blue-500" />
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Tesod Technology?
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-xl">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTesod;