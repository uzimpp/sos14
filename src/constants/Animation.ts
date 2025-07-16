
// Spring transition presets
const springPresets = {
  soft: { type: "spring" as const, stiffness: 200, damping: 20 },
  medium: { type: "spring" as const, stiffness: 300, damping: 20 },
  stiff: { type: "spring" as const, stiffness: 400, damping: 17 },
};

// Common animation variants
const slideVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...springPresets.soft, duration: 0.3 },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { ...springPresets.soft, duration: 0.3 },
  },
};

const fadeVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...springPresets.medium, duration: 0.2 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: { ...springPresets.medium, duration: 0.2 },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springPresets.medium,
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springPresets.medium,
      duration: 0.6
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springPresets.soft,
      duration: 0.5,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 0.5,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 0.5,
    },
  },
};

export {
  containerVariants,
  sectionVariants,
  titleVariants,
  textVariants,
  itemVariants,
  springPresets,
  slideVariants,
  fadeVariants,
  slideInVariants,
};
