import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Variants for the page
const pageVariants = {
  initial: {
    opacity: 0,
    // x: "100vw",
    transition: {
      duration: 0.1,
    },
  },
  in: {
    opacity: 1,
    // x: 0,
  },
  out: {
    opacity: 0,
    // x: "-100vw",
  },
};

const PageBlock = ({ pages, pageNumber }) => {
  return (
    <Container>
      {pages.map((page, index) => (
        <AnimatePresence exitBeforeEnter>
          <Page
            key={page.id}
            style={{
              width: `110%`,
              minHeight: `100vh`,
            }}
            variants={pageVariants}
            initial='initial'
            animate={pageNumber === index ? "in" : "initial"}
            // exit='out'
            transition={{ duration: 0.5 }}
            bg={pages[pageNumber].backgroundColor.hex}
          >
            {/* <LayoutOne>
              <div>
                <h2>{page.entries[0].title}</h2>
                <Body
                  dangerouslySetInnerHTML={{
                    __html: page.entries[0].body.html,
                  }}
                />
              </div>
              <div>
                <h2>{page.entries[1].title}</h2>
                <Body
                  dangerouslySetInnerHTML={{
                    __html: page.entries[1].body.html,
                  }}
                />
              </div>
            </LayoutOne> */}
          </Page>
        </AnimatePresence>
      ))}
    </Container>
  );
};

export default PageBlock;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
`;

export const Page = styled(motion.div)`
  display: grid;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.bg};
  margin-top: -10vh;
  margin-left: -12vh;
  margin-right: -5vh;
  padding: 50px 100px;
`;

export const Body = styled.div`
  font-size: 80%;
`;

// export const LayoutOne = styled.div`
//   display: grid;
//   min-height: 100vh;
//   width: 100%;
//   grid-template-areas:
//     "one" "one" "empty" "two" "two"
//     "one" "one" "three" "two" "two"
//     "four" "four" "three" "five" "five"
//     "four" "four" "empty" "five" "five";
//   border: solid 1px red;
// `;

export const LayoutOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  width: 100%;
`;
