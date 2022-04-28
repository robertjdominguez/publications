import styled from "styled-components";
import { motion } from "framer-motion";
import Table from "./Table";
import Left from "./Left";
import Right from "./Right";

const Toc = ({
  prev,
  next,
  setIsNavVisible,
  isNavVisible,
  reverse,
  setReverse,
  year,
}) => {
  return (
    <Widget>
      <Left year={year} prev={prev} reverse={reverse} setReverse={setReverse} />
      <Table setIsNavVisible={setIsNavVisible} isNavVisible={isNavVisible} />
      <Right
        year={year}
        next={next}
        reverse={reverse}
        setReverse={setReverse}
      />
    </Widget>
  );
};

export default Toc;

const Widget = styled(motion.div)`
  display: flex;
  gap: 10px;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  min-height: 75px;
  width: 150px;
  border-radius: 16px;
  box-shadow: var(--norm-shadow);
  background: var(--accent);
  padding: 20px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  opacity: 0.8;
  color: white;

  svg {
    /* width: 40px; */
    /* max-width: 40px; */
  }

  :hover {
    box-shadow: var(--lg-shadow);
    opacity: 1;
  }

  a {
    text-decoration: none;
    color: var(--white);
    width: 100%;
    text-align: center;
  }
`;
