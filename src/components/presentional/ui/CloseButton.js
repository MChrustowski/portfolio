import React from "react";
import styled from "styled-components";

export default props => {
  return <Icon className="fas fa-times" onClick={props.closeModal} />;
};

const Icon = styled.i`
  z-index: 4;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 25px;
  cursor: pointer;
  color: #2b2b2b;
  background-color: rgba(238, 238, 238, 0.5);
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(238, 238, 238, 1);
  }
`;
