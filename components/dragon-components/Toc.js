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
}) => {
  return (
    <Widget>
      <Left
        year={`2021`}
        prev={prev}
        reverse={reverse}
        setReverse={setReverse}
      />
      <Table setIsNavVisible={setIsNavVisible} isNavVisible={isNavVisible} />
      <Right
        year={`2021`}
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
