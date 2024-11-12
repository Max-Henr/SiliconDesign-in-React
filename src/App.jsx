import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import PrimaryButton from "./components/buttons/primarybutton/PrimaryButton";

function App() {
  const [darkMode, setDarkmode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode((toggle) => !toggle);
  };

  const toggleMenu = () => {
    setMobileMenu((toggle) => !toggle);
    console.log("toggle menu");
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <NavBar toggleDarkMode={toggleDarkMode} toggleMenu={toggleMenu} />
      <div className={`mobileMenu ${mobileMenu ? "open" : ""}`}>
        <div className="container menu-flex">
          <Link to="/" onClick={toggleMenu} className="mobile-menu-link">
            Features
          </Link>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className="mobile-menu-link">
            Contact
          </NavLink>
          <PrimaryButton
            btnText="Sign in / up"
            btnIcon={"fa-regular fa-user"}
          />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>© 2024 Silicon. All rights reserved. Credit MadrasThemes</footer>
    </BrowserRouter>
  );
}

export default App;
