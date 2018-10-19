import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavLink from "./NavLink";

class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <Logo />
        <NavbarElementsContainer>
          <NavLink name="O MNIE" url="o-mnie" />
          <NavLink name="PROJEKTY" url="projekty" />
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
  padding: 1.5em;
  background: transparent;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  z-index: 4;
  position: absolute;
`;

const NavbarElementsContainer = styled.div`
  display: flex;
`;
