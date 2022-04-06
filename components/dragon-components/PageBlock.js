import { useState } from "react";
import styled from "styled-components";

const PageBlock = ({ pages, pageNumber }) => {
  return (
    <Container>
      <Page bg={pages[pageNumber].backgroundColor.hex}>
        <h2>{pages[pageNumber].entries[0].title}</h2>
      </Page>
    </Container>
  );
};

export default PageBlock;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
`;

export const Page = styled.div`
  display: grid;
  width: 100%;
  height: 90vh;
  background: ${(props) => props.bg};
`;

export const LayoutOne = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  grid-template-areas:
    "one" "one" "empty" "two" "two"
    "one" "one" "three" "two" "two"
    "four" "four" "three" "five" "five"
    "four" "four" "empty" "five" "five";
  border: solid 1px red;
`;
