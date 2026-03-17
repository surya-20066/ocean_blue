import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Story from "../components/Story";
import HotelInfo from "../components/HotelInfo";
import Slideshow from "../components/Slideshow";
import Suites from "../components/Suites";
import Dining from "../components/Dining";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Story />
      <HotelInfo />
      <Slideshow />
      <Suites />
      <Testimonials />
      <Dining />
      <Location />
    </Layout>
  );
};

export default Home;
