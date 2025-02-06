import React from "react";
import BlogSection from "./BlogSection";
import VideoNews from "./VideoSection";
import LatestShow from "./LatestNews";
import HeroSliderWithContent from "./HeroSectionWithSlider";
// import NewsSection from "./News/HomeNews";
// import NewsSectionOne from "./PodcastSectionOne";
import NewsSectionTwo from "./NewsSectionTwo";
import PodcastSectionOne from "./PodcastSectionOne"


const Home = () => {
  return (
    <div className="relative">
    <HeroSliderWithContent />
    <NewsSectionTwo/>
    <VideoNews />
    <LatestShow />
    <PodcastSectionOne/>
    <BlogSection />
  </div>
  );
};

export default Home;
