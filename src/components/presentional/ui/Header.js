import React from "react";
import styled from "styled-components";

export default ({ children }) => {
  return <H2>{children}</H2>;
};

const H2 = styled.h2`
  margin-bottom: 0.7em;
  text-align: center;
  font-family: "Armata", sans-serif;
`;

export { H2 };
