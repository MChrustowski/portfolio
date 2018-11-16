import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-8">
            <Text>
              MADE IN POLAND 🇵🇱
              <br />
              MICHAŁ CHRUSTOWSKI
            </Text>
          </div>
          <div className="col col-lg-3">
            <SocialIcons>
              <i className="fas fa-envelope-square" />
              <i className="fab fa-github-square" />
              <i className="fab fa-linkedin" />
            </SocialIcons>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #2b2b2b;
  padding: 20px 0 20px 0;
  margin-top: 3em;
`;

const Text = styled.div`
  font-family: "Armata", sans-serif;
  font-size: 0.8em;
  color: #6a6a6a;
  line-height: 1.5;
  margin-left: 1em;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  i {
    margin-right: 15px;
    font-size: 2.5em;
    color: #6a6a6a;
    cursor: pointer;
    &:hover {
      color: #2a95d0;
    }
  }
`;
