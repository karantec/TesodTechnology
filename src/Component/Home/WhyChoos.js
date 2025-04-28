import React from 'react';
import { CheckCircle, Shield, DollarSign, HeartHandshake } from 'lucide-react';

const WhyChooseTesod = () => {
  const reasons = [
    {
      title: "Experienced Team",
      description: "Led by industry veterans with 15+ years of expertise in development and digital transformation.",
      icon: <Shield className="w-10 h-10 text-indigo-600 mb-2" strokeWidth={1.5} />
    },
    {
      title: "Client-Centric Approach",
      description: "Bespoke solutions meticulously crafted to address your unique business challenges and goals.",
      icon: <HeartHandshake className="w-10 h-10 text-indigo-600 mb-2" strokeWidth={1.5} />
    },
    {
      title: "Transparent Premium Pricing",
      description: "Exceptional value with clear, upfront pricing. No surprises—just world-class service and results.",
      icon: <DollarSign className="w-10 h-10 text-indigo-600 mb-2" strokeWidth={1.5} />
    },
    {
      title: "Comprehensive Excellence",
      description: "From strategic planning to implementation and beyond, we ensure flawless execution and lasting success.",
      icon: <CheckCircle className="w-10 h-10 text-indigo-600 mb-2" strokeWidth={1.5} />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Leading Businesses Choose <span className="text-indigo-600">Tesod Technology</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group hover:bg-indigo-50"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
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