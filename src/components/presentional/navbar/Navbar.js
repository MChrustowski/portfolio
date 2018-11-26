import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavLink from "./NavLink";
import NavLinkSmallScreens from "./NavLinkSmallScreens";

import "../../../assets/styles/animations.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnTheTop: null,
      burgerMenuIsOpen: null,
    };

    this.renderBurgerMenu = this.renderBurgerMenu.bind(this);
    this.openBurgerMenu = this.openBurgerMenu.bind(this);
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

  openBurgerMenu() {
    this.setState(prevState => ({
      burgerMenuIsOpen: !prevState.burgerMenuIsOpen,
    }));
  }

  renderBurgerMenu() {
    const { burgerMenuIsOpen } = this.state;
    if (burgerMenuIsOpen !== null) {
      return (
        <NavbarElementsContainerSmallScreens
          className={burgerMenuIsOpen ? "slideInDown" : "slideOutUp"}>
          <hr />
          <NavLinkSmallScreens name="ABOUT ME" url="about-me" />
          <br />
          <NavLinkSmallScreens name="PROJECTS" url="projects" />
          <br />
          <NavLinkSmallScreens name="CONTACT" url="contact" />
        </NavbarElementsContainerSmallScreens>
      );
    }
  }

  render() {
    const { isOnTheTop } = this.state;
    return (
      <NavbarContainer
        className={
          isOnTheTop !== null && (isOnTheTop ? "fadeOutUp" : "fadeInDown")
        }>
        <Logo zIndex={11} />
        <NavbarElementsContainer>
          <NavLink name="ABOUT ME" url="about-me" />
          <NavLink name="PROJECTS" url="projects" />
          <NavLink name="CONTACT" url="contact" />
        </NavbarElementsContainer>
        <BurgerIcon onClick={this.openBurgerMenu}>
          <i className="fas fa-bars" />
        </BurgerIcon>
        {this.renderBurgerMenu()}
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
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const BurgerIcon = styled.div`
  margin: 0;
  font-size: 1.4em;
  cursor: pointer;
  z-index: 11;
  @media only screen and (min-width: 601px) {
    display: none;
  }
`;

const NavbarElementsContainerSmallScreens = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(43, 43, 43, 0.9);
  width: 100vw;
  height: auto;
  padding: 1em;
  padding-top: 4em;
  transition: background-color 10000ms linear;

  hr {
    background-color: #585858;
    margin-top: 0;
  }
`;
