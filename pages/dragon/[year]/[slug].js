import styled from "styled-components";
import { dragonFetcher } from "../../../utils/api";
import {
  singleEntryQuery,
  allEntriesQuery,
  dragonPagesQuery,
} from "../../../utils/queries";

const Slug = ({ entry }) => {
  return (
    <div className='wrapper'>
      <h1>{entry.title}</h1>
      <h2>By: {entry.author}</h2>
      <FullImg src={entry.image?.url} />
      {/* Select style based on contentType */}
      {entry.contentType === "Poem" && (
        <div
          className='poem'
          dangerouslySetInnerHTML={{ __html: entry.body?.html }}
        />
      )}
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { entry } = await dragonFetcher(singleEntryQuery, { slug: slug });
  const { pages } = await dragonFetcher(dragonPagesQuery, { year: entry.year });

  return {
    props: {
      entry,
    },
  };
};

// get static paths for all entries
export const getStaticPaths = async () => {
  const { entries } = await dragonFetcher(allEntriesQuery);
  return {
    paths: entries.map((entry) => ({
      params: { slug: entry.slug, year: entry.year.year },
    })),
    fallback: false,
  };
};

export default Slug;

const FullImg = styled.img`
  width: 100%;
  height: auto;
  justify-self: center;
`;
