import styled from "styled-components";
import { beaconFetcher } from "../../../utils/api";
import {
  beaconAuthorQuery,
  allBeaconAuthorsQuery,
} from "../../../utils/queries";
import Author from "./Author";

const Slug = ({ author }) => {
  return (
    <Info>
      <Wrapper>
        <Author
          name={author.name}
          blurb={author.blurb}
          image={author.image.url}
          slug={author.slug}
          entries={author.entries}
        />
      </Wrapper>
    </Info>
  );
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { author } = await beaconFetcher(beaconAuthorQuery, { slug: slug });

  return {
    props: {
      author,
    },
  };
};

// get static paths for all entries
export const getStaticPaths = async () => {
  const { authors } = await beaconFetcher(allBeaconAuthorsQuery);
  return {
    paths: authors.map((author) => ({
      params: { slug: author.slug },
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
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;
