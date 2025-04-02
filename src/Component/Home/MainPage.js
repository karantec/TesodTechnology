import React from 'react'
import NotFound from './Home'

import WhyChooseTesod from './WhyChoos'
import Serve from './Serve'
import TesodCallbackForm from './RequestCallback'
import TestimonialsPage from './Testimonial'

const MainPage = () => {
  return (
    <div>

        <NotFound/>
        <WhyChooseTesod/>
        <Serve/>
        <TesodCallbackForm/>
        <TestimonialsPage/>
        {/* <DescriptiveCards/> */}
      
    </div>
  )
}

export default MainPage
