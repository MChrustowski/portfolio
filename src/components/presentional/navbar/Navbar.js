import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavLink from "./NavLink";

import "../../../assets/styles/animations.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnTheTop: null,
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
    const { isOnTheTop } = this.state;
    return (
      <NavbarContainer
        className={
          isOnTheTop !== null && (isOnTheTop ? "fadeOutUp" : "fadeInDown")
        }>
        <Logo />
        <NavbarElementsContainer>
          <NavLink name="ABOUT ME" url="about-me" />
          <NavLink name="PROJEKTY" url="projects" />
          <NavLink name="DOŚWIADCZENIE" url="doswiadczenie" />
          <NavLink name="KONTAKT" url="kontakt" />
        </NavbarElementsContainer>
      </NavbarContainer>
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

const NavbarElementsContainer = styled.div`
  display: flex;
`;
