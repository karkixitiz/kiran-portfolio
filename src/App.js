import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavMenu from "./components/NavMenu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          {/*  replace by switch tag */}
          <Route path="/about" element={<About />} />
          {/* replace by component */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
