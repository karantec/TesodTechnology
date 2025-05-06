import React from "react";
import NotFound from "./Home";

import WhyChooseTesod from "./WhyChoos";
import Serve from "./Serve";
import TesodCallbackForm from "./RequestCallback";
import TestimonialsPage from "./Testimonial";
import Blogtwo from "./BlogPagetwo";
import Gallerytwo from "./Gallerytwo";
import Carousel from "./Home";
import OurWorkVideo from "./OurWorkVideo";
import Works from "./OurWork";

const MainPage = () => {
  return (
    <div>
      <Carousel />
      <WhyChooseTesod />
      <Serve />
      <Works />
      <TesodCallbackForm />
      <OurWorkVideo />
      <TestimonialsPage />
      <Blogtwo />
      <Gallerytwo />
      {/* Uncomment the following line to include DescriptiveCards component */}
      {/* <DescriptiveCards/> */}
    </div>
  );
};

export default MainPage;
