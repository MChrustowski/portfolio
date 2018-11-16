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
  font-size: 1em;
  margin-left: 1.5em;
  padding: 5px;
  border: 1px solid transparent;

  color: #ffffff;

  &:hover {
    color: #ffffff;
    text-decoration: none;
    border: 1px solid #ffffff;
  }
`;
