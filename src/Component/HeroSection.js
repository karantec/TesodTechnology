import React from "react";
import { FaBullhorn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <header
      className="relative min-h-screen bg-gray-800 bg-cover bg-center flex flex-col justify-center items-center text-white mt-24"
      style={{
        backgroundImage: `url('https://via.placeholder.com/1920x1080')`,
        height: "calc(100vh - 96px)",
      }}
    >
      <div className="p-8 text-center max-w-4xl w-full mx-4 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Advertise with NationFirst News
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          Reach millions of readers with your message. Contact us today to feature your brand on our platform.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-2">
          <FaBullhorn className="text-lg" />
          <span>Learn More</span>
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
