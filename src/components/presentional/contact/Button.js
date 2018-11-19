import React from "react";
import styled from "styled-components";

export default ({ name }) => {
  return <Button className="btn btn-block">{name}</Button>;
};

const Button = styled.button`
  background-color: #0086ff;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;
