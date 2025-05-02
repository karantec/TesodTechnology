import React, { useEffect, useRef, useState } from 'react';

const OurWorkVideo = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoLoaded) {
          // Play video when it comes into view
          const iframe = videoRef.current;
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
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
      className="py-16 bg-gray-50"
      id="our-work"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work in Action</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See how we've helped businesses transform their digital presence and achieve outstanding results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-16 h-0 overflow-hidden rounded-lg shadow-xl" style={{ paddingBottom: '56.25%' }}>
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
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic mb-6">
              "Our team is dedicated to delivering projects that exceed expectations and drive real business value."
            </p>
            <a 
              href="/portfolio" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkVideo;