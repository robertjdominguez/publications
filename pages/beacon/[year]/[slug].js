import styled from "styled-components";
import { beaconFetcher } from "../../../utils/api";
import { singleEntryQuery, allEntriesQuery } from "../../../utils/queries";

const Slug = ({ entry }) => {
  return (
    <Info>
      <Wrapper>
        <h1>{entry.title}</h1>
        <h2>By: {entry.author}</h2>
        <FullImg src={entry.image?.url} />
        <div dangerouslySetInnerHTML={{ __html: entry.body?.html }} />
      </Wrapper>
    </Info>
  );
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { entry } = await beaconFetcher(singleEntryQuery, { slug: slug });

  return {
    props: {
      entry,
    },
  };
};

// get static paths for all entries
export const getStaticPaths = async () => {
  const { entries } = await beaconFetcher(allEntriesQuery);
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

const Info = styled.div`
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
  padding: 2vw;
`;
