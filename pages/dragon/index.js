import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { beaconFetcher } from "../../utils/api";
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
      {years.map((year) => (
        <CoverArt key={year.year}>
          <Image src={year.coverArt.url} layout='fill' objectFit='cover' />
          <ArtWrapper>
            <Link href={`/beacon/${year.year}`}>
              <a>{year.year}</a>
            </Link>
          </ArtWrapper>
        </CoverArt>
      ))}
    </Container>
  );
};

export const getStaticProps = async () => {
  // Get the landing frontmatter
  const { landings } = await beaconFetcher(landingQuery);

  // Get the years
  const { years } = await beaconFetcher(allYearsQuery);

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
    padding: 0.5rem 1rem;
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
  margin: 0 auto;
`;

const CoverArt = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: -10vh;
  padding-top: 10vh;
  background: var(--black);
`;

const ArtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 4;
  /* linear gradient background */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );

  a {
    text-decoration: none;
    color: white;
    font-weight: 900;
    font-size: clamp(2.5rem, 6vw, 4rem);
    transition: ease-in-out 0.2s;

    :hover {
      color: var(--accent);
      transform: scale(1.05);
    }
  }
`;

const CurrentIssue = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 60%;

  @media (max-width: 800px) {
    max-height: 100%;
  }
`;

const CurrentCover = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 250px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
