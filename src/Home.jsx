import NavBar from "./components/navbar/NavBar";
import Brands from "./pages/brands/Brands";
import Showcase from "./pages/showcase/Showcase";
import Features from "./pages/features/Features";
import HowItWorks from "./pages/howitworks/HowItWorks";
import Ratings from "./pages/ratings/Ratings";
import Transfer from "./pages/transfer/Transfer";
import FAQ from "./pages/faq/FAQ";
import Subscribe from "./pages/subscribe/Subscribe";
import { useState, useEffect } from "react";

function Home({ toggleDarkMode }) {
  return (
    <>
      <Showcase />
      <Brands />
      <Features />
      <HowItWorks />
      <Transfer />
      <Ratings />
      <FAQ />
      <Subscribe />
    </>
  );
}

export default Home;
