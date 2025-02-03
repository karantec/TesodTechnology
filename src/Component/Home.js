import React from "react";
import PodcastSection from "./PodcastSection";
import BlogSection from "./BlogSection";
import VideoNews from "./VideoSection";
import LatestShow from "./LatestNews";
import BreakingNews from "./BreakingSection";
import HeroSliderWithContent from "./HeroSectionWithSlider";
import PodcastSection1 from "./PodcastSection";
import NewsSection from "./News/HomeNews";



const Home = () => {
  return (
    <div className="relative">
      
  {/* Now it's inside Home, below the navbar */}
    <HeroSliderWithContent />
     
    <NewsSection/>
    <VideoNews />
    <LatestShow />
    <PodcastSection1 />
    <BlogSection />
  </div>
  );
};

export default Home;
