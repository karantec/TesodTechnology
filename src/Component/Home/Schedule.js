import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
} from "lucide-react";

const Schedule = () => {
  const [isEmbedded, setIsEmbedded] = useState(false);

  const handleScheduleClick = () => {
    setIsEmbedded(true);
  };

  const handleDirectLink = () => {
    window.open("https://calendly.com/tesodtechnology/30min", "_blank");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-auto">
      {!isEmbedded ? (
        <div className="min-h-screen py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 py-20">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 p-6 rounded-full shadow-2xl">
                    <Calendar className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
                Schedule Your
                <br />
                <span className="text-5xl md:text-6xl">Success Meeting</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your technology vision into reality. Book a
                personalized consultation with our experts and discover how we
                can accelerate your business growth.
              </p>

              <div className="flex justify-center items-center space-x-6 mb-12">
                <div className="flex items-center space-x-2 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-gray-600 font-medium">
                  Trusted by 500+ businesses
                </span>
              </div>
            </div>

            {/* Meeting Details Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  30 Minutes
                </h3>
                <p className="text-gray-600 text-lg">
                  Focused discussion tailored to your needs
                </p>
              </div>

              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert Consultation
                </h3>
                <p className="text-gray-600 text-lg">
                  One-on-one with our technology specialists
                </p>
              </div>

              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Free Strategy Session
                </h3>
                <p className="text-gray-600 text-lg">
                  No commitment, maximum value
                </p>
              </div>
            </div>

            {/* What You'll Get Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 mb-20 border border-white/30">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                What You'll Get From This Call
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Comprehensive Needs Assessment
                      </h4>
                      <p className="text-gray-600 text-lg">
                        Deep dive into your business challenges and technology
                        requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Custom Solution Blueprint
                      </h4>
                      <p className="text-gray-600 text-lg">
                        Tailored technology roadmap designed specifically for
                        your goals
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        ROI & Timeline Analysis
                      </h4>
                      <p className="text-gray-600 text-lg">
                        Clear understanding of investment and expected returns
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Actionable Next Steps
                      </h4>
                      <p className="text-gray-600 text-lg">
                        Concrete action plan to move your project forward
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Join hundreds of successful businesses who've accelerated their
                growth with our technology solutions.
              </p>

              <div className="space-y-6">
                <button
                  onClick={handleScheduleClick}
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center mx-auto space-x-3"
                >
                  <span>Book Your Free Strategy Call</span>
                  <ArrowRight className="w-6 h-6" />
                </button>

                <button
                  onClick={handleDirectLink}
                  className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg underline underline-offset-4"
                >
                  Open scheduling page in new tab
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col py-8 px-6">
          <div className="max-w-6xl mx-auto h-full flex flex-col">
            {/* Header for embedded view */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 rounded-t-3xl text-center">
              <h2 className="text-3xl font-bold mb-3">
                Book Your Strategy Session
              </h2>
              <p className="text-xl opacity-90">
                Choose the perfect time for your consultation
              </p>
            </div>

            {/* Calendly Embed */}
            <div className="bg-white rounded-b-3xl shadow-2xl flex-1 flex flex-col">
              <div className="flex-1 p-8">
                <div className="relative w-full h-full">
                  <iframe
                    src="https://calendly.com/tesodtechnology/30min?embed_domain=localhost&embed_type=Inline"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule Meeting"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>

              <div className="text-center p-6 border-t border-gray-100">
                <button
                  onClick={() => setIsEmbedded(false)}
                  className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg flex items-center justify-center mx-auto space-x-2 hover:bg-indigo-50 px-6 py-3 rounded-xl transition-all duration-200"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>Back to details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
