import React, { useEffect, useRef, useState } from "react";

const OurWorkVideo = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && videoLoaded) {
          // Play video when it comes into view
          const iframe = videoRef.current;
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              "*"
            );
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [videoLoaded]);

  const handleIframeLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      id="our-work"
    >
      {/* Abstract background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-56 h-56 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-24 right-40 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
      </div>

      {/* Content container with elevated z-index */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Our Work</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            See how we've helped businesses transform their digital presence and
            achieve outstanding results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative pb-16 h-0 overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-101"
            style={{ paddingBottom: "56.25%" }}
          >
            {/* Video overlay with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 rounded-lg pointer-events-none"></div>

            <iframe
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZqoZOkputgc?si=MEqhTEY3ffjHJnos&start=6&enablejsapi=1&rel=0&modestbranding=1&mute=1"
              title="Our Work Showcase"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={handleIframeLoad}
            ></iframe>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-100 italic text-xl mb-8 font-light">
              "Our team is dedicated to delivering projects that exceed
              expectations and drive real business value."
            </p>
            <button className="bg-white text-indigo-900 hover:bg-indigo-100 transition-colors duration-300 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-20 left-10 w-64 h-64 border border-white/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-white/10 rounded-full"></div>
    </section>
  );
};

export default OurWorkVideo;
