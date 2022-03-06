import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <LandingWrapper>
      <div className='wrapper'>
        <h1>
          The Altamont School <span>Student Publications</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nisi sed consectetur sagittis, nisl nunc aliquet purus,
          eget consectetur nisl nunc eget purus.
        </p>
        <Gallery>
          <Item>
            <h2>The Acta Diurna</h2>
            <p>
              General info about the publication. Little blurb for the visitors.
            </p>
          </Item>
          <Item>
            <h2>The Beacon</h2>
            <p>
              General info about the publication. Little blurb for the visitors.
            </p>
          </Item>
          <Item>
            <h2>The Dragon</h2>
            <p>
              General info about the publication. Little blurb for the visitors.
            </p>
          </Item>
        </Gallery>
      </div>
    </LandingWrapper>
  );
}

const LandingWrapper = styled.div`
  display: grid;
  place-items: center center;
  min-height: 80vh;
  h1 {
    font-size: var(--hero);
    font-weight: 400;

    span {
      color: var(--accent);
      font-weight: 700;
    }
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  place-items: center center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  border: solid 1px var(--black);
  border-radius: 5px;
  text-align: center;
`;
