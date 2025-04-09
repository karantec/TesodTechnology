import React from 'react'

import Navbar from './Component/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './Component/Home/Footer'

import NotFound from './Component/Home/Home'

import ContactSection from './Component/Home/Contact'
import InternshipApplication from './Component/Home/Internship'
import Gallery from './Component/Home/Gallery'
import BlogPage from './Component/Home/BlogPage'
import Portfolio from './Component/Home/CaseStudio'
import MainPage from './Component/Home/MainPage'
import JobOpenings from './Component/Home/JobPage'
import Services from './Component/Home/Services'
import AboutUs from './Component/About/About'
import TestimonialsPage from './Component/Home/Testimonial'
import Career from './Component/Home/Career'
import TeamPage from './Component/Home/Team'
import Products from './Component/Home/Product'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/testimonial" element={<TestimonialsPage/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/Internship" element={<Career/>}/>
       <Route path="/career" element={<InternshipApplication/>}/>
       <Route path="/services" element={<Services/>}/>
        <Route path="/job" element={<JobOpenings/>}/>
       <Route path="/gallery" element={<Gallery/>}/>
       <Route path="/blog" element={<BlogPage/>}/>
       <Route path="/case-study" element={<Portfolio/>}/>
        <Route path="/contact" element={<ContactSection/>}/>
        <Route path='/products' element={<Products/>}/>
     
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
