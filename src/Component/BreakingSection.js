import React from 'react';

const BreakingNews = () => {
  return (
    <div className="bg-red-600 flex items-center">
      {/* Breaking Label */}
      <div className="bg-red-500 text-white font-bold px-2 py-1">
        BREAKING
      </div>
      {/* Marquee Section */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="text-white text-sm font-bold animate-scroll">
          Pakistan: Ex-Prime Minister Imran Khan convicted of graft
        </div>
        <div className="text-white text-sm font-bold animate-scroll">
          Pakistan: Ex-Prime Minister Imran Khan convicted of graft
        </div>
        <div className="text-white text-sm font-bold animate-scroll">
          Pakistan: Ex-Prime Minister Imran Khan convicted of graft
        </div>
        <div className="text-white text-sm font-bold animate-scroll">
          Pakistan: Ex-Prime Minister Imran Khan convicted of graft
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            display: inline-block;
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BreakingNews;
