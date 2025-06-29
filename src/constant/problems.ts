interface Problem {
  number: string;
  name: string;
  description: string;
  image: string;
  url: string;
}

interface Day {
  problems: Problem[];
}

interface ProblemsData {
  days: Record<string, Day>;
}

const problems: ProblemsData = {
  days: {
    "1": {
      problems: [
        {
          number: "1",
          name: "Intro",
          description: "Introduction to Python programming",
          image: "/problems/1.png",
          url: "https://smth.com",
        },
        {
          number: "2",
          name: "Intro2",
          description: "Introduction to Python programming",
          image: "/problems/2.png",
          url: "https://smth.com",
        },
      ],
    },
    "2": {
      problems: [
        {
          number: "1",
          name: "Variables",
          description: "Learn about Python variables and data types",
          image: "/problems/1.png",
          url: "https://smth.com",
        },
        {
          number: "2",
          name: "Loops",
          description: "Understanding loops in Python",
          image: "/problems/2.png",
          url: "https://smth.com",
        },
      ],
    },
    "3": {
      problems: [
        {
          number: "1",
          name: "Conditionals",
          description: "Understanding if-else statements in Python",
          image: "/problems/1.png",
          url: "https://smth.com",
        },
        {
          number: "2",
          name: "If you know, you know",
          description: "If you could complete this, Tanoy will kiss you",
          image: "/problems/2.png",
          url: "https://youtu.be/hvL1339luv0?si=qv9v2QlNUWu-bilV",
        },
      ],
    },
  },
};

export default problems;
