import React from "react";
import styled from "styled-components";

export default ({ name, value, handleChange, placeholder }) => {
  return (
    <TextareaStyled
      name={name}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

const TextareaStyled = styled.textarea`
  width: 100%;
  height: 15em;
  margin: 15px 0;
  outline: 0;
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 5px;
  font-family: "Armata", sans-serif;
`;
