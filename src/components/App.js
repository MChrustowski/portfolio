import React from "react";
import styled from "styled-components";

import reactIcon from "../assets/images/react-icon.png";

const App = () => {
  return (
    <Container>
      <img src={reactIcon} alt="React logo" />
      <Header>React Redux Starter</Header>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  color: red;
  font-size: 30px;
  text-align: center;
`;
