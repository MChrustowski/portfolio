import React, { Component } from "react";

export default Component => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modalIsOpen: false,
      };

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
      this.setState({ modalIsOpen: true });
    }
    closeModal() {
      this.setState({ modalIsOpen: false });
    }
    render() {
      return (
        <Component
          modalIsOpen={this.state.modalIsOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
      );
    }
  };
};
