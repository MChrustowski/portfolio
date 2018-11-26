import React from "react";
import styled from "styled-components";

import logo from "../../../assets/images/logo.png";

export default ({ zIndex }) => {
  return (
    <LogoContainer style={{ zIndex: zIndex }}>
      <img src={logo} alt="logo" />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  img {
    width: 10em;
  }
`;
