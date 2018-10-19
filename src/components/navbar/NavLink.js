import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

export default ({ name, url }) => {
  return (
    <div>
      <LinkStyle smooth to={`/#${url}`}>
        {name}
      </LinkStyle>
    </div>
  );
};

const LinkStyle = styled(Link)`
  font-family: "Armata", sans-serif;
  font-size: 1.1em;
  margin-left: 1.5em;
  padding-bottom: 5px;
  color: #ffffff;

  &:hover {
    color: #ffffff;
    text-decoration: none;
    border-bottom: 2px solid #ffffff;
  }
`;
