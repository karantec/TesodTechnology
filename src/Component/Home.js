import React from "react";
import PodcastSection from "./PodcastSection";
import BlogSection from "./BlogSection";
import VideoNews from "./VideoSection";
import LatestShow from "./LatestNews";
import BreakingNews from "./BreakingSection";
import HeroSliderWithContent from "./HeroSectionWithSlider";
import ProductForeign from "./ProductsSectionforeign";
import ProductIndia from "./ProductsSectionIndia";

const Home = () => {
  return (
    <div className="relative">
      
  {/* Now it's inside Home, below the navbar */}
    <HeroSliderWithContent />
    
    <ProductIndia />
    <ProductForeign />
    <VideoNews />
    <LatestShow />
    <PodcastSection />
    <BlogSection />
  </div>
  );
};

export default Home;
