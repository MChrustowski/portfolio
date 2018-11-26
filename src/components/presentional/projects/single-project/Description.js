import React from "react";
import styled from "styled-components";

import Libraries from "./Libraries";

export default props => {
  const { name, description, technologies, libraries } = props;
  return (
    <Container>
      <TitleTechContainer>
        <Title>{name}</Title>
        <Icons>
          {technologies.map(t => (
            <i key={t.icon} className={t.icon} />
          ))}
        </Icons>
      </TitleTechContainer>
      <Description>{description}</Description>
      {libraries && <Libraries libraries={libraries} />}
    </Container>
  );
};

export { Title, Icons, Description };

const Container = styled.div`
  margin: 1em;
  margin-bottom: 0;
  padding: 2em;
  @media only screen and (max-width: 500px) {
    padding: 0.5em;
  }
`;

const TitleTechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
  @media only screen and (max-width: 500px) {
    display: block;
  }
`;

const Title = styled.div`
  font-size: 1.5em;
  font-family: "Armata", sans-serif;
  font-weight: bold;

  @media only screen and (max-width: 500px) {
    font-size: 1.3em;
  }
`;

const Description = styled.div`
  text-align: justify;
  line-height: 2;
  @media only screen and (max-width: 500px) {
    text-align: left;
  }
`;

const Icons = styled.div`
  i {
    margin-right: 0.5em;
    font-size: 1.8em;
  }
  @media only screen and (max-width: 500px) {
    i {
      font-size: 1.2em;
    }
  }
`;
