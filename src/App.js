import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "./Component/Home";

import PodcastSections from "./Component/PodcastSections";
import NewsDetail from "./Component/NewDetail";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import ProductForen from "./Component/NewsForeign";
import Entertainment from "./Component/Entertainment";
import Games from "./Component/Games";
import BreakingNews from "./Component/BreakingSection";

const App = () => {

  return (
    <>
      <Navbar />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<PodcastSections />} />
        <Route path="/detail" element={<NewsDetail />} />
        <Route path="/Foreign" element={<ProductForen />} />
        <Route path="/मनोरंजन" element={<Entertainment />} />
        <Route path="/खेल" element={<Games />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
