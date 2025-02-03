import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "./Component/Home";

import PodcastSections from "./Component/PodcastSections";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import BreakingNews from "./Component/BreakingSection";
import BlogSection from "./Component/BlogSection";
import CardsPage from "./Component/News/Card";

const App = () => {

  return (
    <>
      <Navbar />
      <BreakingNews />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<PodcastSections />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/category/:category" element={<CardsPage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
