import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

export default ({ name, url }) => {
  return (
    <LinkStyle smooth to={`/#${url}`}>
      <p>{name}</p>
    </LinkStyle>
  );
};

export const LinkStyle = styled(Link)`
  font-family: "Armata", sans-serif;
  font-size: 1.1em;
  margin-left: 1.5em;

  color: #ffffff;

  &:hover {
    color: #ffffff;
    text-decoration: none;
    border-bottom: 2px dashed #ffffff;
  }
`;
