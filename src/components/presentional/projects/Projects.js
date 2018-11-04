import React, { Component } from "react";
import styled from "styled-components";

import withModal from "./withModal";
import Modal from "../ui/Modal";
import { projects } from "./list";
import Header from "../ui/Header";
import SingleProject from "./SingleProject";
import Gallery from "./single-project/Gallery";
import ProjectButton from "./single-project/ProjectButton";
import Description from "./single-project/Description";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShortInformations: 0,
    };

    this.renderProjects = this.renderProjects.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
  }

  handleMouseEvent(id) {
    this.setState({
      displayShortInformations: id,
    });
  }

  renderProjects() {
    const { modalIsOpen, openModal, closeModal } = this.props;
    return (
      <ListContainer>
        {projects.map(project => (
          <SingleProject
            key={project.order}
            {...project}
            displayShortInformations={this.state.displayShortInformations}
            handleMouseEvent={this.handleMouseEvent}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
            project={project}
          />
        ))}
      </ListContainer>
    );
  }
  render() {
    const { modalIsOpen, closeModal, project } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <Container>
              <Header>PROJECTS</Header>
              {this.renderProjects()}
            </Container>
            {modalIsOpen && (
              <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <Gallery screenshots={project.screenshots} />
                <Description
                  name={project.name}
                  description={project.description}
                  technologies={project.technologies}
                  libraries={project.libraries}
                />
                <ProjectButton url={project.url} />
              </Modal>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withModal(Projects);

const Container = styled.div`
  margin-top: 2em;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
