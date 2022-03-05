export const headingAnimations = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.65,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      delay: 0.65,
    },
  },
  exit: {
    opacity: 0,
    y: 400,
    transition: {
      delay: 0.65,
    },
  },
};

export const headingChildren = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const MenuAnimations = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.03,
    },
  },
  hidden: {
    y: `100%`,
    opacity: 0,
    transition: {
      // when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

export const MenuChildren = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 200,
  },
};

export const Questions = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: `-100vw`,
  },
};
