import React, { Component } from "react";
import ReactModal from "react-modal";

import styled from "styled-components";
import "../../../assets/styles/animations.css";

class Modal extends Component {
  render() {
    const { children, modalIsOpen, closeModal } = this.props;
    return (
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles}>
        <div className="row justify-content-md-center ">
          <div className="col col-lg-8">
            <Container className="fadeInUpBig">{children}</Container>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default Modal;

const Container = styled.div`
  background-color: #fff;
`;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: "rgba(20, 20, 20, .9)",
  },
  content: {
    position: "absolute",
    top: "10px",
    left: "10px",
    right: "10px",
    bottom: "10px",
    background: "transparent",
    border: 0,
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};
