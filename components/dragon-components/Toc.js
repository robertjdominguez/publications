import styled from "styled-components";
import { motion } from "framer-motion";
import Table from "./Table";

const Toc = ({ prev, next, pages }) => {
  return (
    <Widget>
      <Table />
    </Widget>
  );
};

export default Toc;

const Widget = styled(motion.div)`
  display: grid;
  place-items: center center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  min-height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: var(--norm-shadow);
  background: var(--accent);
  padding: 20px;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  :hover {
    box-shadow: var(--lg-shadow);
  }
`;
