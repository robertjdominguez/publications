import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { dragonFetcher, truncate } from "../../utils/api";
import { allYearsQuery, landingQuery } from "../../utils/queries";

const index = ({ frontMatter, years }) => {
  return (
    <Container>
      <LandingWrapper>
        <Landing>
          <Info>
            <h1>The Dragon</h1>
            <div dangerouslySetInnerHTML={{ __html: frontMatter }} />
            <p>
              Below, you can find each year's publication, starting with the
              most recent. Simply click a year to see its contents.
            </p>
          </Info>
        </Landing>
      </LandingWrapper>
      <YearWrapper>
        {years.map((year) => (
          <Year>
            <ImageContainer>
              <Image src={year.coverArt.url} layout='fill' objectFit='cover' />
            </ImageContainer>
            <Meta>
              <h2>{year.year}</h2>
              <aside
                dangerouslySetInnerHTML={{
                  __html: truncate(year.introduction.html, 500),
                }}
              />
              <Link href={`/dragon/years/${year.slug}`} scroll={false}>
                <a>View Issue &rarr;</a>
              </Link>
            </Meta>
          </Year>
        ))}
      </YearWrapper>
    </Container>
  );
};

export const getStaticProps = async () => {
  // Get the landing frontmatter
  const { landings } = await dragonFetcher(landingQuery);

  // Get the years
  const { years } = await dragonFetcher(allYearsQuery);

  return {
    props: {
      frontMatter: landings[0]?.frontMatter.html,
      years,
    },
  };
};

export default index;

const LandingWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  margin-top: -10vh;
  padding: 10vh 20px;
  background-image: url("./dragon-bg.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    font-size: clamp(2rem, 3vw, 3rem);
    margin-top: 0;
  }

  a {
    text-decoration: none;
    color: white;
    margin-top: 4vh;
    transition: ease-in-out 0.2s;
    padding: 0.5rem 2rem;
    border: solid 1px white;
    margin-right: auto;

    &:hover {
      border: solid 1px var(--accent);
      color: var(--accent);
    }
  }
`;

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 80px;
  row-gap: 0px;
  place-items: center center;
  max-width: 1200px;
  margin-top: 20vh;
  margin-left: auto;
  margin-right: auto;
  color: white;
`;

const YearWrapper = styled.div`
  aside:nth-child(even) {
    div {
      order: 1;
    }
  }

  @media (max-width: 600px) {
    aside:nth-child(even) {
      div {
        order: 0;
      }
    }
  }
`;

const Year = styled.aside`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 80px;
  margin: 5vh 0;
  padding: 4vh;
`;

const Meta = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;

  p {
    font-size: 0.9rem;
  }

  h2 {
    margin: 0;
    color: var(--gold);
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    font-weight: 800;
  }

  a {
    text-decoration: none;
    color: white;
    margin-top: 8vh;
    background: var(--gold);
    transition: ease-in-out 0.2s;
    padding: 0.5rem 1rem;
    margin-left: auto;
    margin-top: auto;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);
  margin-top: -10vh;
  padding-top: 10vh;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  box-shadow: var(--norm-shadow);
  transition: ease-in-out 0.2s;

  img {
    border-radius: 20px;
  }

  &:hover {
    box-shadow: var(--lg-shadow);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
