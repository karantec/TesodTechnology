import React from "react";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";

import Footer from "./Footer";
import PodcastSection from "./PodcastSection";
import BlogSection from "./BlogSection";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <ProductsSection />
      <ProductsSection />
      <ProductsSection />
      <ProductsSection />
       <PodcastSection/>
       <BlogSection/>
      <Footer />
    </div>
  );
};

export default Home;
