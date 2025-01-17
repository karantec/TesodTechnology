import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "./Component/Home";

import PodcastSections from "./Component/PodcastSections";

const App = () => {

  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<PodcastSections />} />
      </Routes>
    </div>
  );
};

export default App;
