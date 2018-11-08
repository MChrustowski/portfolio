import React from "react";
import styled from "styled-components";

import "../../../assets/styles/animations.css";

export default props => {
  const {
    name,
    logo,
    technologies,
    order,
    handleMouseEvent,
    displayShortInformations,
    openModal,
    project,
  } = props;

  const projectShortInformations = order === displayShortInformations;
  return (
    <Container
      onMouseEnter={handleMouseEvent.bind(this, order)}
      onMouseLeave={handleMouseEvent.bind(this, 0)}
      onMouse={projectShortInformations}>
      {projectShortInformations ? (
        <div onClick={openModal.bind(this, project)} className="fadeIn">
          <h4>{name}</h4>
          <TechContainer>
            {technologies.map(t => (
              <i className={t.icon} />
            ))}
          </TechContainer>
          <ReadMore>Read more...</ReadMore>
        </div>
      ) : (
        <img src={logo} alt="logo" className="img-fluid" />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 1.5em;
  margin: 1em;
  background-color: #ffffff;
  width: 20em;
  height: 10em;
  display: flex;
  align-items: center;
  border: 1px solid #ececec;
  cursor: pointer;
  font-family: "Armata", sans-serif;

  &:hover {
    background-color: rgba(43, 43, 43, 0.9);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  i {
    font-size: 1.2em;
    margin: 0.2em;
  }
`;

const ReadMore = styled.div`
  text-align: center;
  font-size: 0.9em;
  margin-top: 0.7em;
  color: #0086ff;
`;

export { Container };
