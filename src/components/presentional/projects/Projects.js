import React, { Component } from "react";
import styled from "styled-components";

import { projects } from "./list";
import Header from "../ui/Header";
import SingleProject from "./SingleProject";

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
    return (
      <ListContainer>
        {projects.map(project => (
          <SingleProject
            key={project.order}
            {...project}
            displayShortInformations={this.state.displayShortInformations}
            handleMouseEvent={this.handleMouseEvent}
          />
        ))}
      </ListContainer>
    );
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <Container>
              <Header>PROJECTS</Header>
              {this.renderProjects()}
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

const Container = styled.div`
  margin-top: 2em;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
