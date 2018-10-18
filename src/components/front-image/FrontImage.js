import React, { Component } from "react";
import styled from "styled-components";

import backgroundImage from "../../assets/images/background.jpg";

class FrontImage extends Component {
  render() {
    return (
      <Image>
        <img src={backgroundImage} alt="front image" />
        <TextContainer>
          <p>Hello, I'm Michal</p>
        </TextContainer>
      </Image>
    );
  }
}

export default FrontImage;

const Image = styled.div`
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

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  p {
    text-align: center;
    font-size: 3em;
    color: #ffffff;
    padding: 20px;
    border: 2px solid #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media screen and (max-width: 500px) {
    p {
      text-align: center;
      font-size: 1.5em;
      color: #ffffff;
      padding: 10px;
      border: 2px solid #ffffff;
    }
  }
`;
