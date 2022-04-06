import { useState, useMemo } from "react";
import styled from "styled-components";
import Link from "next/link";
import { dragonFetcher } from "../../../utils/api";
import { allYearsQuery, pagesQuery } from "../../../utils/queries";
import PageBlock from "../../../components/dragon-components/PageBlock";

const index = ({ year }) => {
  const [currentPage, setCurrentPage] = useState(-1);

  // usememo to check and see if there is a slug in the window location
  // if there is, set the currentPage to the index of the slug in the pages array
  // if there is not, set the currentPage to -1
  const slug = useMemo(() => {
    if (typeof window !== "undefined") {
      const slug = window.location.hash.split("#")[1];
      slug && setCurrentPage(parseInt(slug));
      return slug;
    } else {
      return null;
    }
  }, []);

  // function to add one to currentPage
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    // statement to add # to the url
    window.location.hash = `${currentPage + 1}`;
  };

  return (
    <Main>
      <p>&larr;</p>
      {currentPage === -1 && <Content bg={year.coverArt.url} />}
      {currentPage !== -1 && (
        <PageBlock pages={year.pages} pageNumber={currentPage} />
      )}
      <p onClick={() => nextPage()}>&rarr;</p>
    </Main>
  );
};

export const getStaticProps = async (ctx) => {
  const { year } = await dragonFetcher(pagesQuery, {
    year: ctx.params.year,
  });

  return {
    props: {
      year,
    },
  };
};

export const getStaticPaths = async () => {
  const { years } = await dragonFetcher(allYearsQuery);
  return {
    paths: years.map((year) => ({ params: { year: year.year } })),
    fallback: false,
  };
};

export default index;

const Main = styled.div`
  display: flex;
  background: var(--black);
  color: white;
  margin-top: -10vh;
  padding-top: 10vh;
  padding-left: 4vw;
  padding-right: 4vw;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 800px; */
  width: 100%;
  margin: 0 1vw;
  min-height: 90vh;
  background: url(${(props) => props.bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
