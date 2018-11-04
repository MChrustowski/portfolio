import React, { Component } from "react";

export default Component => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modalIsOpen: false,
        project: {},
      };

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
    openModal(project) {
      this.setState({ project, modalIsOpen: true });
    }
    closeModal() {
      this.setState({ project: {}, modalIsOpen: false });
    }
    render() {
      console.log(this.state.project);
      return (
        <Component
          modalIsOpen={this.state.modalIsOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
          project={this.state.project}
        />
      );
    }
  };
};
