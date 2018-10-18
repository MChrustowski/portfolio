import React from "react";

import "../assets/styles/main.css";
import Navbar from "./navbar/Navbar";
import FrontImage from "./front-image/FrontImage";

const App = props => {
  return (
    <div>
      <Navbar />
      <FrontImage />
    </div>
  );
};

export default App;
