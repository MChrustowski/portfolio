import React, { Component } from "react";
import ReactModal from "react-modal";

import styled from "styled-components";

class Modal extends Component {
  render() {
    const { children, modalIsOpen, closeModal } = this.props;
    return (
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Example Modal">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <Container>{children}</Container>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default Modal;

const Container = styled.div`
  background-color: #fff;
  padding: 1em;
`;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(20, 20, 20, .9)",
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    background: "transparent",
    border: 0,
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};
