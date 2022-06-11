import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterK from './route/RouterK';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Start Render Pages */}
          <RouterK />
        {/* End Render Pages */}
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
