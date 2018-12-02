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
        Hi, I'm <span>Michał</span>, a front-end developer from{" "}
        <span>Poland</span>. I'm a geoinformation student, it's my final year of
        studies. After graduation, I would like to work as full-time web
        developer.{" "}
        <span>
          IT changes every day, but for now I'm focused on JavaScript and React
          (Native also)
        </span>
        . I've launched <span>WorkoutPlanner</span> which is a workout log app
        for android users. I'm glad to say that the app has{" "}
        <span>over one thousand</span> active users.
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
    margin-top: 2em;
    padding: 0 1em 0 1em;
    text-align: justify;
    line-height: 2.5;
    font-size: 1em;

    span {
      font-weight: bold;
    }
  }
`;
