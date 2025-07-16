const benefits = [
  {
    src: "/assets/landing/star.svg",
    alt: "Fun activities and engaging events",
    title: "Fun",
    desc: "Enjoy a variety of fun activities and engaging events.",
    shadow:
      "drop-shadow-[0_0_40px_var(--color-yellow)]",
    animation: {
      initial: { opacity: 0, rotateY: 0, scale: 0.8 },
      whileInView: { opacity: 1, rotateY: 360, scale: 1 },
      transition: { duration: 1, type: "spring" as const },
    },
  },
  {
    src: "/assets/landing/friend.svg",
    alt: "Make new friends",
    title: "Friends",
    desc: "Meet new people and make lasting friendships.",
    shadow: "drop-shadow-[0_0_40px_var(--color-pink)]",
    animation: {
      initial: { opacity: 0, scale: 0.5 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.7, type: "spring" as const, bounce: 0.5 },
    },
  },
  {
    src: "/assets/landing/coding.svg",
    alt: "Learn coding basics",
    title: "Basics",
    desc: "Get hands-on experience with coding fundamentals.",
    shadow: "drop-shadow-[0_0_40px_var(--color-blue)]",
    animation: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.7, type: "spring" as const },
    },
  },
];

export default benefits;
