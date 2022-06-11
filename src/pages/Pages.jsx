import React from "react";
import Header from "../components/header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="profile/*" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default Pages;
