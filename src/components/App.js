import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import reactIcon from "../assets/images/react-icon.png";
import "../assets/styles/main.css";

const App = props => {
  return (
    <Container>
      <img src={reactIcon} alt="React logo" />
      <Header>React Redux Starter</Header>
      {props.posts.map(post => (
        <div key={post.id} id="list-element">
          {post.title}
        </div>
      ))}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(App);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  color: red;
  font-size: 30px;
  font-family: Arial;
  text-align: center;
  margin: 10px;
`;
