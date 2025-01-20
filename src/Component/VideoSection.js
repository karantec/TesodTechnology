import React from "react";

const VideoNews = () => {
  return (
    <section className="bg-[#0A1930] py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Video Section */}
        <div className="relative w-full md:w-2/3">
          {/* YouTube Video */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.youtube.com/embed/_hfuIR1kJmQ?si=EWOMwivWnC0kqa2h"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Play Button Overlay */}
          <div className="absolute bottom-4 left-4 bg-blue-500 text-white p-2 rounded-full flex items-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
            <span className="ml-2 text-sm font-semibold">01:28</span>
          </div>
        </div>

        {/* News Description */}
        <div className="w-full md:w-1/3 md:pl-6 mt-6 md:mt-0 text-white">
          <h3 className="text-base sm:text-lg font-bold flex items-center">
            <span className="mr-2">📹</span> News of the Day, Hindi News India
          </h3>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            News of the day, Hindi News India | Rahul Bharat Jodo Nyay Yatra
            News.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-4">
            32 minutes ago | 01:28 min
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoNews;
