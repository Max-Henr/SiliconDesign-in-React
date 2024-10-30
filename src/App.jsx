import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [darkMode, setDarkmode] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode((toggle) => !toggle);
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
      <NavBar toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
