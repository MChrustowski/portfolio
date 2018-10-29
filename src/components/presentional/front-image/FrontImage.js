import React, { Component } from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

import particlesConfiguration from "./particles-configuration";
import backgroundImage from "../../../assets/images/background.jpg";

class FrontImage extends Component {
  render() {
    return (
      <Image>
        <img src={backgroundImage} alt="front image" />
        <Particles params={particlesConfiguration} />
      </Image>
    );
  }
}

export default FrontImage;

const Image = styled.div`
  height: 100vh;
  img {
    position: absolute;
    z-index: -1;
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 1024px) {
    img {
      left: 50%;
      margin-left: -512px;
    }
  }
`;
