import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

export default ({ name, url }) => {
  return (
    <LinkStyle smooth to={`/#${url}`}>
      {name}
    </LinkStyle>
  );
};

export const LinkStyle = styled(Link)`
  font-family: "Armata", sans-serif;
  font-size: 2em;
  padding: 5px;
  font-weight: bold;
  color: #ffffff;
  &:hover {
    color: #ffffff;
    text-decoration: none;
    transition: border 0.6s linear;
  }
`;
