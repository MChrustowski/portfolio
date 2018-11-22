import React from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../ui/Header";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      content: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, content } = this.state;

    if (email && content) {
      axios
        .post("https://formcarry.com/s/wugGTOpLY0g", this.state, {
          headers: { Accept: "application/json" },
        })
        .then(response => {
          this.setState({
            email: "",
            content: "",
          });
          return toast.success("Thanks, the message was sent!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        })
        .catch(error => {
          return toast.error(error.message, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });
    }
  }

  render() {
    const { email, content } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-8">
            <Container>
              <ToastContainer
                position="bottom-center"
                type="info"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
              />
              <Header>CONTACT</Header>
              <form onSubmit={this.handleSubmit}>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  handleChange={this.handleChange}
                />
                <Textarea
                  name="content"
                  value={content}
                  handleChange={this.handleChange}
                  placeholder="Message"
                />
                <Button name="SEND MESSAGE" />
              </form>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

const Container = styled.div`
  margin: 2em 0;
  padding: 0 10px;
`;
