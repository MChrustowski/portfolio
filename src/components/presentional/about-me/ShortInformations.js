import React from "react";
import styled from "styled-components";

import Header from "../ui/Header";
import authorImage from "../../../assets/images/avatar.jpg";

export default () => {
  return (
    <Container>
      <Header>ABOUT ME</Header>
      <img src={authorImage} alt="Author image" />
      <p>
        Sed mollis est in lorem sodales vestibulum. Mauris et sodales velit.
        Curabitur posuere quis ex sit amet tempor. Quisque tincidunt, orci in
        euismod vestibulum, neque odio porta dolor, eget scelerisque orci mi eu
        metus. Aliquam erat volutpat. Vivamus vel porta nulla, at dignissim
        sapien ł ó ź ź ś .
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2em;
  text-align: center;
  font-family: "Armata", sans-serif;
  img {
    width: 10em;
    border-radius: 200px;
  }
  p {
    margin-top: 1.5em;
    padding: 0 1em 0 1em;
    text-align: justify;
    line-height: 2;
    font-size: 1em;
  }
  /* @media only screen and (max-width: 990px) {
    width: 100%;
  } */
`;
