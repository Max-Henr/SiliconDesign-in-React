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
  // const [darkMode, setDarkmode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkmode((toggle) => !toggle);
  // };

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <>
      {/* <NavBar toggleDarkMode={toggleDarkMode} /> */}
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
