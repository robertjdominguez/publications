import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { dragonFetcher } from "../../../utils/api";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  yearPagesQuery,
  pagesQuery,
  allDragonPagesQuery,
  singlePageQuery,
} from "../../../utils/queries";
import PageComponent from "../../../components/dragon-components/PageComponent";
import Toc from "../../../components/dragon-components/Toc";

// Variants for the page
const pageVariants = {
  fromLeft: {
    opacity: 0,
    x: "-100vw",
  },
  fromRight: {
    opacity: 0,
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: "0vw",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  outRight: {
    opacity: 0,
    x: "100vw",
  },
  outLeft: {
    opacity: 0,
    x: "-100vw",
  },
};

const navVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

// Function to take an array and create a string with an oxford comma list
const list = (array) => {
  const itemProps = array.map((item) => item.title);
  const lastItem = itemProps.pop();
  if (itemProps.length === 0) return lastItem;
  return (
    itemProps.join(", ") + (itemProps.length ? "," : "") + " and " + lastItem
  );
};

const Slug = ({ page, prev, next, pages }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [reverse, setReverse] = useState(false);

  return (
    <>
      <Head>
        <title>The Dragon: {pages[0].year.year} | The Altamont School</title>
      </Head>
      <Page
        key={page.id}
        variants={pageVariants}
        initial={reverse ? "fromLeft" : "fromRight"}
        animate='in'
        exit={reverse ? "outRight" : "outLeft"}
        bg={page.backgroundColor.hex}
        fg={page.foregroundColor?.hex}
      >
        <Wrapper>
          {page.entries.map((entry) => (
            <PageComponent entry={entry} layout={page.layout} />
          ))}
        </Wrapper>
      </Page>
      <Toc
        prev={prev}
        next={next}
        pages={pages}
        setIsNavVisible={setIsNavVisible}
        isNavVisible={isNavVisible}
        setReverse={setReverse}
        reverse={reverse}
        year={page.year.year}
      />
      <Navigation
        variants={navVariants}
        initial='hidden'
        animate={isNavVisible ? "visible" : "hidden"}
        exit='hidden'
      >
        <h2>Pages</h2>
        {pages.map((page, i) => (
          <Link
            key={page.id}
            href={`/dragon/${page.year.year}/${page.id}`}
            as={`/dragon/${page.year.year}/${page.id}`}
          >
            <a>
              <span>{i + 1}</span>
              <span>{list(page.entries)}</span>
            </a>
          </Link>
        ))}
      </Navigation>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const { year, slug } = ctx.params;
  const { page } = await dragonFetcher(singlePageQuery, { id: slug });
  const { pages } = await dragonFetcher(yearPagesQuery, { year: year });

  // find the index of the current page
  const index = pages.findIndex((p) => p.id === slug);

  return {
    props: {
      page,
      pages,
      next: index != pages.length - 1 ? pages[index + 1].id : null,
      prev: index != 0 ? pages[index - 1].id : null,
    },
  };
};

// get static paths for all entries
export const getStaticPaths = async (ctx) => {
  const { years } = await dragonFetcher(allDragonPagesQuery);

  const pages = [];
  years.forEach((year) => {
    year.pages.forEach((page) => {
      pages.push(page);
    });
  });

  return {
    paths: pages.map((page) => ({
      params: { slug: page.id, year: page.year.year },
    })),
    fallback: false,
  };
};

export default Slug;

const Page = styled(motion.div)`
  width: 100vw;
  background: ${(props) => props.bg};
  color: ${(props) => (props.fg != null ? props.fg : "white")};
  margin-top: -10vh;
  padding-top: 10vh;

  img {
    width: 100%;
    height: auto;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 60px;
  padding: 2vw;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  place-items: start start;
`;

const Navigation = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 80px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  background: black;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  a {
    display: flex;
    margin-bottom: 2vh;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    text-decoration: none;
    color: white;
    border-bottom: solid 1px transparent;
    transition: 0.2s ease-in-out;

    :hover {
      color: var(--accent);
      border-bottom: solid 1px var(--accent);
    }

    @media(max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
  }
`;
