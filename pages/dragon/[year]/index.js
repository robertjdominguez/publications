import styled from "styled-components";
import Link from "next/link";
import { dragonFetcher } from "../../../utils/api";
import {
  allYearsQuery,
  singleYearQuery,
  dragonPagesQuery,
} from "../../../utils/queries";

const index = ({ year, data, pages }) => {
  console.log(pages);
  return (
    <WholePg>
      <Frontmatter bg={`${data.coverArt.url}`}>
        <h1>The Dragon: {year}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.introduction.html }} />
        <Link href={`/dragon/${year}/0`}>
          <a>Enter The Dragon</a>
        </Link>
      </Frontmatter>
    </WholePg>
  );
};

export const getStaticProps = async (ctx) => {
  // Grab the frontmatter for a particular year
  const { year } = await dragonFetcher(singleYearQuery, {
    year: ctx.params.year,
  });

  const { pages } = await dragonFetcher(dragonPagesQuery, {
    year: ctx.params.year,
  });

  return {
    props: {
      data: year,
      year: year.year,
      pages,
    },
  };
};

export const getStaticPaths = async () => {
  // TODO: Don't forget to change the year to a string in the CMS
  const { years } = await dragonFetcher(allYearsQuery);
  return {
    paths: years.map((year) => ({ params: { year: year.year } })),
    fallback: false,
  };
};

export default index;

const Frontmatter = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${(props) =>
    `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),url(${props.bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 2rem;
  min-height: 100vh;
  margin-top: -10vh;
  padding-top: 10vh;

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: white;
    background: var(--dark-grey);
    border-radius: 2px;
    transition: all 0.2s ease-in-out;
    margin-top: 4vh;
    padding: 0.5rem 1rem;
    text-align: center;
    place-self: center center;

    &:hover {
      background: var(--light-grey);
    }
  }
`;

const WholePg = styled.div`
  background: var(--black);
  margin-top: -10vh;
  padding-top: 10vh;
  min-height: 100vh;
`;
