import React from "react";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";

import Footer from "./Footer";
import PodcastSection from "./PodcastSection";
import BlogSection from "./BlogSection";
import Navbar from "./Navbar";
import VideoNews from "./VideoSection";
import LatestShow from "./LatestNews";
import BreakingNews from "./BreakingSection";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <BreakingNews/>
      <ProductsSection />
    
      <ProductsSection />
      <VideoNews/>
      <LatestShow/>
    
      <ProductsSection />
      <ProductsSection />
       <PodcastSection/>
       <BlogSection/>
      <Footer />
    </div>
  );
};

export default Home;
