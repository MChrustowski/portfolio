import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-8">
            <Text>
              Copyright © {new Date().getFullYear()}
              <br />
              Michał Chrustowski
            </Text>
          </div>
          <div className="col col-lg-3">
            <SocialIcons>
              <a href="mailto:chrustowski.m@gmail.com">
                <i className="fas fa-envelope" />
              </a>
              <a href="https://github.com/mchrustowski" target="_blank">
                <i className="fab fa-github" />
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-linkedin-in" />
              </a>
            </SocialIcons>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px 0 20px 0;
  margin-top: 3em;
  box-shadow: 0px 0px 6px 0px rgba(229, 229, 229, 0.5);
`;

const Text = styled.div`
  font-family: "Armata", sans-serif;
  font-size: 0.8em;
  color: #848484;
  line-height: 1.5;
  margin-left: 1em;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  i {
    margin-right: 15px;
    font-size: 1.5em;
    color: #848484;
    cursor: pointer;
    &:hover {
      color: #2a95d0;
    }
  }
`;
