import { useState, useMemo } from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { dragonFetcher } from "../../../utils/api";
import { allYearsQuery, pagesQuery } from "../../../utils/queries";

const index = ({ year }) => {
  return (
    <Main>
      <Head>
        <title>The Dragon: {year.year} | The Altamont School</title>
      </Head>
      <Link href={`/dragon/${year.year}/${year.pages[0].id}`}>
        <a>
          <Content bg={year.coverArt.url} />
        </a>
      </Link>
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
  /* display: flex; */
  background: var(--black);
  color: white;
  margin-top: -10vh;
  padding-top: 10vh;
  padding-left: 4vw;
  padding-right: 4vw;
  align-items: center;
  width: 100%;
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
