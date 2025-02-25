import React, { useState } from "react";
import DealerMap from "../DealerMap/DealerMap";
import Ads from "./Ads";
import Hero from "./Hero";
import HomeCarousel from "./HomeCarousel";
import Testimonials from "./Testimonials";

const Home = () => {


  return (
    <>
    <HomeCarousel/>
    <Hero/>
    <Testimonials/>
    <Ads/>
    </>
  )
}

export default Home





