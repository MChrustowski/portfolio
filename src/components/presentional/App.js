import React from "react";

import "../../assets/styles/main.css";
import Navbar from "./navbar/Navbar";
import FrontImage from "./front-image/FrontImage";

import AboutMe from "./about-me/AboutMe";
import Projects from "./projects/Projects";

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
        <div id="doswiadczenie" style={{ height: "100vh", color: "red" }}>
          Doświadczenie
        </div>
      </div>
    </div>
  );
};

export default App;
