import styled from "styled-components";
import Link from "next/link";
import { beaconFetcher } from "../../../utils/api";
import {
  allYearsQuery,
  singleYearQuery,
  yearlyEntriesQuery,
} from "../../../utils/queries";

const index = ({ year, data, entries }) => {
  return (
    <Main>
      <Wrapper>
        <Frontmatter>
          <h1>The Beacon: {year}</h1>
          <img src={`${data.coverArt.url}`} />
          <div dangerouslySetInnerHTML={{ __html: data.introduction.html }} />
        </Frontmatter>
        <Gallery>
          <Deets>
            <h2>Submissions</h2>
            <p>
              Below you'll find the contents of this year's Beacon.
              Alternatively,{" "}
              {data.hardcopy != null && (
                <a href={data.hardcopy.url} target='_blank'>
                  click here to view a PDF of the entire publication.
                </a>
              )}
            </p>
          </Deets>
          {entries.map((entry) => (
            <Link href={`/beacon/${year}/${entry.slug}`} key={entry.id}>
              <a>
                <Item>
                  <h3>{entry.title}</h3>
                  <small>{entry.contentType}</small>
                  <p>{entry.author.name}</p>
                </Item>
              </a>
            </Link>
          ))}
        </Gallery>
      </Wrapper>
    </Main>
  );
};

export const getStaticProps = async (ctx) => {
  // Grab the frontmatter for a particular year
  const { year } = await beaconFetcher(singleYearQuery, {
    year: ctx.params.year,
  });
  const { entries } = await beaconFetcher(yearlyEntriesQuery, {
    year: ctx.params.year,
  });

  return {
    props: {
      data: year,
      year: year.year,
      entries,
    },
  };
};

export const getStaticPaths = async () => {
  // TODO: Don't forget to change the year to a string in the CMS
  const { years } = await beaconFetcher(allYearsQuery);
  return {
    paths: years.map((year) => ({ params: { year: year.year } })),
    fallback: false,
  };
};

export default index;

const Frontmatter = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--black);
  color: white;
  margin-top: -10vh;
  padding-top: 10vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 40px;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    width: 100%;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border: solid 1px transparent;
  transition: 0.2s ease-in-out;
  padding: 10px 20px;

  h3 {
    font-size: 0.875rem;
  }

  small {
    font-size: 0.8rem;
    background: var(--accent-2);
    padding: 5px 10px;
    margin-right: auto;
    color: var(--black);
  }

  p {
    font-size: 0.8rem;
  }

  &:hover {
    border: solid 1px var(--accent);
  }
`;

const Deets = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  margin-top: 5vh;
  margin-bottom: 2vh;

  h2,
  p {
    margin: 0;
  }

  a {
    border-bottom: solid 1px transparent;
    transition: 0.2s ease-in-out;

    &:hover {
      border-bottom: solid 1px var(--accent);
    }
  }
`;
