import React from 'react';
import { Award, Users, TrendingUp, Zap } from 'lucide-react';

const WhyChooseTesod = () => {
  const reasons = [
    {
      title: "Experienced Team",
      description: "Led by industry veterans with 15+ years of expertise in development and digital transformation.",
      icon: <Award className="w-12 h-12 text-indigo-600 mb-2" strokeWidth={1.5} />
    },
    {
      title: "Client-Centric Approach",
      description: "Bespoke solutions meticulously crafted to address your unique business challenges and goals.",
      icon: <Users className="w-12 h-12 text-indigo-600 mb-2" strokeWidth={1.5} />
    },
    {
      title: "Transparent Premium Pricing",
      description: "Exceptional value with clear, upfront pricing. No surprises—just world-class service and results.",
      icon: <TrendingUp className="w-12 h-12 text-indigo-600 mb-2" strokeWidth={1.5} />
    },
    {
      title: "Comprehensive Excellence",
      description: "From strategic planning to implementation and beyond, we ensure flawless execution and lasting success.",
      icon: <Zap className="w-12 h-12 text-indigo-600 mb-2" strokeWidth={1.5} />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Leading Businesses Choose <span className="text-indigo-600">Tesod Technology</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 hover:-translate-y-2 transform"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'slideInUp 0.6s ease-out forwards'
              }}
            >
              <div className="mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out relative">
                <div className="absolute inset-0 bg-indigo-100 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform scale-150"></div>
                <div className="relative z-10 p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full group-hover:from-indigo-100 group-hover:to-purple-100 transition-all duration-500">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {reason.description}
              </p>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-200 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseTesod;