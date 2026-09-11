export const wiggle = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -1.4, 1.2, -0.6, 0],
    transition: { duration: 0.45, ease: "easeInOut" as const },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const fadeOnly = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
};
