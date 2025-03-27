import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact/Contact";
import Dealers from "./Pages/Dealers/Dealers";
import AuthPage from "./Pages/Auth/AuthPage";
import { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  const location = useLocation();
  const endpoint = location.pathname;

    useEffect(()=>{
      window.scrollTo(0,0);
    },[location])
  // console.log(location.pathname, "END POINT");

  return (
      <>
        {endpoint !== '/auth' && <Navbar />}
        <Routes>
          <Route exact path="/auth" element={<AuthPage />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/dealers" element={<Dealers />} />
          {/* Add more routes here */}
        </Routes>
        {endpoint !== '/auth' && <Footer />}
      </>
  );
}

export default App;
