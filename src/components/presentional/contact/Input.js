import React from "react";
import styled from "styled-components";

export default ({ type, name, value, placeholder, handleChange }) => {
  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  outline: 0;
  padding: 0 10px;
  border: 1px solid #ececec;
  background-color: #ffffff;
  border-radius: 5px;
  font-family: "Armata", sans-serif;
  font-size: 0.9em;
`;
