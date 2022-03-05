import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <LandingWrapper>
      <div className='wrapper'>
        <h1>Hello, World!</h1>
      </div>
    </LandingWrapper>
  );
}

const LandingWrapper = styled.div`
  h1 {
    font-size: var(--hero);
  }
`;
