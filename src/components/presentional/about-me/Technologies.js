import React from "react";
import styled from "styled-components";

import TechItem from "./TechItem";

export default () => {
  const technologies = [
    {
      name: "HTML",
      icon: "devicon-html5-plain colored",
      rate: "★★★★",
      lack: "★",
    },
    {
      name: "CSS",
      icon: "devicon-css3-plain colored",
      rate: "★★★★",
      lack: "★",
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain colored",
      rate: "★★★★",
      lack: "★",
    },
    {
      name: "React",
      icon: "devicon-react-plain colored",
      rate: "★★★★",
      lack: "★",
    },
    {
      name: "Sass",
      icon: "devicon-sass-plain colored",
      rate: "★★★",
      lack: "★★",
    },
    {
      name: "Bootstrap",
      icon: "devicon-bootstrap-plain colored",
      rate: "★★★",
      lack: "★★",
    },
    {
      name: "Ruby",
      icon: "devicon-ruby-plain colored",
      rate: "★★",
      lack: "★★★",
    },
    {
      name: "Ruby on Rails",
      icon: "devicon-rails-plain colored",
      rate: "★★",
      lack: "★★★",
    },
  ];
  return (
    <Container>
      <h2>TECHNOLOGIES</h2>
      <table className="table">
        <tbody>
          {technologies.map(item => (
            <TechItem
              key={item.name}
              icon={item.icon}
              name={item.name}
              rate={item.rate}
              lack={item.lack}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2em;
  text-align: center;
  font-family: "Armata", sans-serif;
  h2 {
    margin-bottom: 0.7em;
  }
  i {
    font-size: 1.5em;
  }
`;
