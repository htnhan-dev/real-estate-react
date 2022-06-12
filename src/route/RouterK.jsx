import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import Service from '../pages/Service';

const RouterK = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  )
}

export default RouterK