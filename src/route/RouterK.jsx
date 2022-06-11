import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';

const RouterK = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default RouterK