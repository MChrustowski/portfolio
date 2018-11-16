import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavLink from "./NavLink";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnTheTop: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const position = window.scrollY;
      if (position === 0) {
        this.setState({ isOnTheTop: true });
      } else {
        this.setState({ isOnTheTop: false });
      }
    });
  }

  render() {
    const Container = this.state.isOnTheTop
      ? NavbarContainer
      : NavbarContainerNotOnTheTop;
    return (
      <Container>
        <Logo />
        <NavbarElementsContainer>
          <NavLink name="ABOUT ME" url="about-me" />
          <NavLink name="PROJEKTY" url="projects" />
          <NavLink name="DOŚWIADCZENIE" url="doswiadczenie" />
          <NavLink name="KONTAKT" url="kontakt" />
        </NavbarElementsContainer>
      </Container>
    );
  }
}

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  padding: 1em;
  background: transparent;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  z-index: 4;
  position: fixed;
`;

const NavbarContainerNotOnTheTop = styled.div`
  width: 100%;
  padding: 1em;
  background: rgba(43, 43, 43, 0.9);
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  z-index: 4;
  position: fixed;

  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const NavbarElementsContainer = styled.div`
  display: flex;
`;
