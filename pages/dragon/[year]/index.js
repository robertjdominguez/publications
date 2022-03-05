import styled from "styled-components";
import Link from "next/link";
import { dragonFetcher } from "../../../utils/api";
import {
  allYearsQuery,
  singleYearQuery,
  yearlyEntriesQuery,
} from "../../../utils/queries";

const index = ({ year, data, entries }) => {
  return (
    <div className='wrapper'>
      <Frontmatter>
        <h1>The Dragon: {year}</h1>
        <img src={`${data.coverArt.url}`} />
        <div dangerouslySetInnerHTML={{ __html: data.introduction.html }} />
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <Link href={`/dragon/${year}/${entry.slug}`}>
                <a>{entry.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Frontmatter>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  // Grab the frontmatter for a particular year
  const { year } = await dragonFetcher(singleYearQuery, {
    year: ctx.params.year,
  });
  const { entries } = await dragonFetcher(yearlyEntriesQuery, {
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

  img {
    width: 100%;
  }
`;
