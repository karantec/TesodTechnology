import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import PodcastSections from "./Component/PodcastSections";
import PodcastSectionView from "./Component/PodcastViewSection";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import BlogViewSection from "./Component/BlogViewSection";
import BreakingNews from "./Component/BreakingSection";
import BlogSection from "./Component/BlogSection";
import CardsPage from "./Component/News/Card";
import NewsSectionView from "./Component/NewsViewSection";

const App = () => {
  return (
    <>
      <Navbar />
      <BreakingNews />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<PodcastSections />} />
        <Route path="/podcastview/:id" element={<PodcastSectionView />} />
        <Route path="/blogview/:id" element={<BlogViewSection />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/category/:category" element={<CardsPage />} />
        <Route path="/newsview/:id" element={<NewsSectionView />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
