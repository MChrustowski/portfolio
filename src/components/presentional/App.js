import React from "react";

import "../../assets/styles/main.css";
import Navbar from "./navbar/Navbar";
import FrontImage from "./front-image/FrontImage";

import AboutMe from "./about-me/AboutMe";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const App = props => {
  return (
    <div>
      <Navbar />
      <FrontImage />
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <div id="about-me">
          <AboutMe />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
