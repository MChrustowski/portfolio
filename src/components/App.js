import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import reactIcon from "../assets/images/react-icon.png";

const App = props => {
  return (
    <Container>
      <img src={reactIcon} alt="React logo" />
      <Header>React Redux Starter</Header>
      {props.posts.map(post => (
        <div key={post.id}>{post.title}</div>
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
  text-align: center;
`;
