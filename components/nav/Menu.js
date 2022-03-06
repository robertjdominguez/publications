import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { MenuAnimations, MenuChildren } from "../../styles/Lib";
import { useAppContext } from "../../ctx";

const Menu = () => {
  const { isNavVisible, setIsNavVisible } = useAppContext();
  const router = useRouter();

  function toggle() {
    setIsNavVisible(!isNavVisible);
  }

  async function handleLink(e, path) {
    // Take care of route change
    router.push({ pathname: path }, undefined, {
      scroll: false,
    });
    // Take care of animation
    toggle();
  }

  async function handleStudent(e, path) {
    // Take care of route change
    router.push({ pathname: path, query: { id } }, undefined, {
      scroll: false,
    });
    // Take care of animation
    toggle();
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Choices
        variants={MenuAnimations}
        initial='hidden'
        animate={isNavVisible ? "visible" : "hidden"}
      >
        <motion.div>
          <motion.li variants={MenuChildren}>
            <NavLink onClick={(e) => handleLink(e, "/")}>
              <NavCombo>Home</NavCombo>
            </NavLink>
          </motion.li>
          <motion.li variants={MenuChildren}>
            <NavLink onClick={(e) => handleLink(e, "/acta-diurna")}>
              <NavCombo>The Acta Diurna</NavCombo>
            </NavLink>
          </motion.li>
          <motion.li variants={MenuChildren}>
            <NavLink onClick={(e) => handleLink(e, "/beacon")}>
              <NavCombo>The Beacon</NavCombo>
            </NavLink>
          </motion.li>
          <motion.li variants={MenuChildren}>
            <NavLink onClick={(e) => handleLink(e, "/dragon")}>
              <NavCombo>The Dragon</NavCombo>
            </NavLink>
          </motion.li>
        </motion.div>
      </Choices>
    </AnimatePresence>
  );
};

export default Menu;

export const Choices = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding-top: 10vw;
  padding-left: 4vw;
  padding-right: 4vw;
  margin-top: -2vh;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 102vh;
  background: var(--white);
  /* margin-top: -10vh; */
  padding-bottom: 10vh;
  overflow: hidden;
  box-shadow: var(--norm-shadow);
  z-index: 5;
  li {
    margin-bottom: 2vh;
  }

  hr {
    width: 100%;
    border-color: var(--accent-2);
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
`;

export const NavLink = styled(motion.button)`
  text-decoration: none;
  background: none;
  border: none;
  color: var(--grey);
  cursor: pointer;
  text-transform: uppercase;
  transition: ease-in-out 0.2s;
  font-family: "p22-underground", sans-serif;

  :hover {
    color: var(--accent);
  }
`;

const NavCombo = styled.a`
  display: flex;
  align-items: center;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;

  img {
    width: 1rem;
    height: auto;
    margin-right: 1rem;
  }
`;
