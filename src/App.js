import React from 'react'

import Navbar from './Component/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './Component/Home/Footer'

import NotFound from './Component/Home/Home'

import ContactSection from './Component/Home/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<NotFound/>} />
        <Route path="/contact" element={<ContactSection/>}/>
     
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
