
// Enum of all possible technologies (e.g. React, Next.js, etc.) with a URL to their homepage
enum tech {

  // DBs
  MongoDB,

  // Middlewares
  Express,

  // Frontend
  React,
  Next,

  // Styling
  ChakraUI,
  TailwindCSS,
  LaTeX,

  // Languages
  TypeScript,
  JavaScript,
  NodeJS,
  Python,
  Java,
}

// Map name and URL of all possible technologies
const techMap = {
  [tech.React]: {
    name: "React",
    url: "https://reactjs.org/"
  },
  [tech.Next]: {
    name: "Next.js",
    url: "https://nextjs.org/"
  },
  [tech.Express]: {
    name: "Express",
    url: "https://expressjs.com/"
  },
  [tech.ChakraUI]: {
    name: "Chakra UI",
    url: "https://chakra-ui.com/"
  },
  [tech.TypeScript]: {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/"
  },
  [tech.JavaScript]: {
    name: "JavaScript",
    url: "https://www.javascript.com/"
  },
  [tech.NodeJS]: {
    name: "Node.js",
    url: "https://nodejs.org/en/"
  },
  [tech.TailwindCSS]: {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/"
  },
  [tech.LaTeX]: {
    name: "LaTeX",
    url: "https://www.latex-project.org/"
  },
  [tech.Python]: {
    name: "Python",
    url: "https://www.python.org/"
  },
  [tech.Java]: {
    name: "Java",
    url: "https://www.java.com/en/"
  },
  [tech.MongoDB]: {
    name: "MongoDB",
    url: "https://www.mongodb.com/"
  },

}

export { tech, techMap }