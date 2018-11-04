import React from "react";
import styled from "styled-components";

export default props => {
  const { url } = props;
  const isGitHubLink = url.includes("github.com");
  console.log("isgithub", isGitHubLink);
  return (
    <Button
      className="btn btn-block"
      style={
        isGitHubLink
          ? { backgroundColor: "#363636" }
          : { backgroundColor: "#3EBB00" }
      }>
      <a href={url} target="_blank">
        {" "}
        {isGitHubLink ? "GitHub" : "Google Play"}
      </a>
    </Button>
  );
};

const Button = styled.button`
  font-family: "Armata", sans-serif;
  font-weight: bold;
  padding: 0.7em;
  background-color: red;
  border-radius: 0;

  outline: none;

  &:hover {
    opacity: 0.9;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
