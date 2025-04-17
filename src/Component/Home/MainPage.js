import React from 'react'
import NotFound from './Home'

import WhyChooseTesod from './WhyChoos'
import Serve from './Serve'
import TesodCallbackForm from './RequestCallback'
import TestimonialsPage from './Testimonial'
import Blogtwo from './BlogPagetwo'
import Gallerytwo from './Gallerytwo'


const MainPage = () => {
  return (
    <div>

        <NotFound/>
        <WhyChooseTesod/>
        <Serve/>
        <TesodCallbackForm/>
        <TestimonialsPage/>
        <Blogtwo/>
        <Gallerytwo/>
        {/* Uncomment the following line to include DescriptiveCards component */}
        {/* <DescriptiveCards/> */}
      
    </div>
  )
}

export default MainPage
