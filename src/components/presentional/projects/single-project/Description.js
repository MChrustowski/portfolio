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
      <Libraries libraries={libraries} />
    </Container>
  );
};

export { Title, Icons, Description };

const Container = styled.div`
  margin: 1em;
  margin-bottom: 0;
  padding: 2em;
`;

const TitleTechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-family: "Armata", sans-serif;
  font-weight: bold;
`;

const Description = styled.div`
  text-align: justify;
  line-height: 1.5;
`;

const Icons = styled.div`
  i {
    margin-right: 0.5em;
    font-size: 1.8em;
  }
`;
