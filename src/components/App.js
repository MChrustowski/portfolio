import React from "react";

import "../assets/styles/main.css";
import Navbar from "./navbar/Navbar";
import FrontImage from "./front-image/FrontImage";

const App = props => {
  return (
    <div>
      <Navbar />
      <FrontImage />
      <div style={{ backgroundColor: "#ffffff" }}>
        <div id="o-mnie" style={{ height: "100vh", color: "red" }}>
          O mnie
        </div>
        <div id="projekty" style={{ height: "100vh", color: "red" }}>
          Projekty
        </div>
        <div id="doswiadczenie" style={{ height: "100vh", color: "red" }}>
          Doświadczenie
        </div>
      </div>
    </div>
  );
};

export default App;
