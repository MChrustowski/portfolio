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
        <MoreInformationsContainer
          onClick={openModal.bind(this, project)}
          className="fadeIn">
          <h4>{name}</h4>
          <TechContainer>
            {technologies.map(t => (
              <i key={t.icon} className={t.icon} />
            ))}
          </TechContainer>
          <ReadMore>Read more...</ReadMore>
        </MoreInformationsContainer>
      ) : (
        <img
          src={logo}
          alt="logo"
          className="img-fluid"
          onClick={openModal.bind(this, project)}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 1.5em;
  margin: 0.5em;
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
  }

  @media only screen and (max-width: 767px) {
    width: 14em;
    height: 7em;
    /* margin: 5px; */
  }
  @media only screen and (max-width: 509px) {
    width: 22em;
    height: 11em;
    margin: 5px;
  }
`;

const MoreInformationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20em;
  height: 10em;
  @media only screen and (max-width: 767px) {
    width: 14em;
    height: 7em;
    h4 {
      font-size: 1em;
    }
  }
  @media only screen and (max-width: 509px) {
    width: 22em;
    height: 11em;
    h4 {
      font-size: 1.5em;
    }
  }
`;

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  i {
    font-size: 1.2em;
    margin: 0.2em;
  }
  @media only screen and (max-width: 767px) {
    i {
      font-size: 1em;
      margin: 0.2em;
    }
  }
  @media only screen and (max-width: 509px) {
    i {
      font-size: 1.4em;
      margin: 0.2em;
    }
  }
`;

const ReadMore = styled.button`
  text-align: center;
  font-size: 0.9em;
  margin-top: 0.9em;
  padding: 0.5em;
  border-radius: 5px;
  border: 1px solid #0086ff;
  color: #0086ff;
  background-color: transparent;

  &:hover {
    background-color: #0086ff;
    color: #ffffff;
    cursor: pointer;

    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;

    @keyframes pulse {
      0% {
        transform: scale3d(1, 1, 1);
      }
      50% {
        transform: scale3d(1.05, 1.05, 1.05);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 0.3em 1em;
    font-size: 0.7em;
  }
  @media only screen and (max-width: 509px) {
    padding: 0.5em 1em;
    font-size: 0.9em;
  }
`;

export { Container };
