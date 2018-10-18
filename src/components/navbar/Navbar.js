import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";

class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <Logo />
        <NavbarElementsContainer>
          <div>O mnie</div>
          <div>Projekty</div>
          <div>Doświadczenie</div>
          <div>Kontakt</div>
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
  div {
    margin-left: 1em;
  }
`;
