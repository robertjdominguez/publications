import styled from "styled-components";
import { dragonFetcher } from "../../../utils/api";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  yearPagesQuery,
  pagesQuery,
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
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  out: {
    opacity: 0,
    x: "-100vw",
    transition: {
      when: "beforeChildren",
    },
  },
};

const Slug = ({ page, prev, next, pages }) => {
  return (
    <Info>
      <AnimatePresence>
        <Page
          key={page.id}
          variants={pageVariants}
          initial='fromRight'
          animate='in'
          exit='out'
          bg={page.backgroundColor.hex}
        >
          <Wrapper>
            {page.entries.map((entry) => (
              <PageComponent entry={entry} />
            ))}
          </Wrapper>
        </Page>
        <Toc prev={prev} next={next} pages={pages} />
      </AnimatePresence>
    </Info>
  );
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { page } = await dragonFetcher(singlePageQuery, { id: slug });
  const { pages } = await dragonFetcher(yearPagesQuery, { year: `2021` });

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
  const fetched = await dragonFetcher(pagesQuery, {
    // TODO: remove this hardcoded value!
    year: `2021`,
  });
  return {
    paths: fetched.year.pages.map((page) => ({
      params: { slug: page.id, year: page.year.year },
    })),
    fallback: false,
  };
};

export default Slug;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--black);
  color: white;
  padding-top: 10vh;
  margin-top: -10vh;
`;

const Page = styled(motion.div)`
  width: 100%;
  background: ${(props) => props.bg};
  margin-top: -10vh;
  padding-top: 10vh;

  img {
    width: 100%;
    height: auto;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 80px;
  padding: 2vw;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  place-items: start start;
`;

const Arrow = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;
