import styled from "styled-components";
import { dragonFetcher } from "../../../utils/api";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  yearPagesQuery,
  pagesQuery,
  singlePageQuery,
} from "../../../utils/queries";

// Variants for the page
const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vw",
  },
};

const Slug = ({ page, prev, next }) => {
  return (
    <Info>
      <AnimatePresence>
        <Page
          key={page.id}
          variants={pageVariants}
          initial='initial'
          animate='in'
          exit='out'
          bg={page.backgroundColor.hex}
        >
          <Wrapper>
            <Link href={`/dragon/2021/${prev}`}>
              <Arrow>&larr;</Arrow>
            </Link>
            {page.entries.map((entry) => (
              <h1>{entry.title}</h1>
            ))}
            <Link href={`/dragon/2021/${next}`}>
              <Arrow>&rarr;</Arrow>
            </Link>
          </Wrapper>
        </Page>
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Arrow = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;
