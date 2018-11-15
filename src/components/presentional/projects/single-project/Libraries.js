import React from "react";
import styled from "styled-components";

export default props => {
  const { libraries } = props;
  return (
    <Container>
      <Header>Additional libraries</Header>
      <LibrariesContainer>
        {libraries.map(name => (
          <LibraryTag key={name}>{name}</LibraryTag>
        ))}
      </LibrariesContainer>
    </Container>
  );
};

export { Header, LibraryTag };

const Container = styled.div`
  margin-top: 4em;
`;

const Header = styled.div`
  font-family: "Armata", sans-serif;
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const LibrariesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LibraryTag = styled.div`
  font-family: "Armata", sans-serif;
  padding: 0.5em;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 0.3em;
  font-size: 0.8em;
`;
