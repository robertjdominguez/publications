import Image from "next/image";
import Link from "next/link";
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
          At The Altamont School, we embrace the importance of student voice
          through written and visual works. We strive to provide a safe
          environment for student self-expression. Below, you'll find our three
          student publications and our students' excellent work.
        </p>
        <Gallery>
          <Item>
            <h2>The Acta Diurna</h2>
            <p>
              A school newspaper with information about student life, sports,
              and happenings on the hill.
            </p>
            <Link href='/acta-diurna'>
              <a>Read &rarr;</a>
            </Link>
          </Item>
          <Item>
            <h2>The Beacon</h2>
            <p>
              Our academic journal and newest publication documenting the
              feelings and beliefs of the times.
            </p>
            <Link href='/beacon'>
              <a>Read &rarr;</a>
            </Link>
          </Item>
          <Item>
            <h2>The Dragon</h2>
            <p>
              Our annual literary publication and oldest tradition of
              cataloguing students' creative expressions.
            </p>
            <Link href='/dragon'>
              <a>Read &rarr;</a>
            </Link>
          </Item>
        </Gallery>
      </div>
    </LandingWrapper>
  );
}

const LandingWrapper = styled.div`
  display: grid;
  place-items: center center;
  min-height: 100vh;
  margin-top: -10vh;
  padding-top: 10vh;
  color: white;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url("./landing_bg.jpeg");
  background-size: cover;
  background-position: center;

  h1 {
    font-size: var(--hero);
    font-weight: 400;
    margin-bottom: 1vh;

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
  margin-top: 5vh;
  place-items: center center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  min-height: 100%;
  border: solid 1px white;
  border-radius: 5px;
  text-align: center;

  h2 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
    background: var(--dark-grey);
    border-radius: 2px;
    transition: all 0.2s ease-in-out;
    margin-top: 4vh;
    padding: 0.5rem 1rem;

    &:hover {
      background: var(--light-grey);
    }
  }
`;
