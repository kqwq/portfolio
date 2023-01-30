


const colors = {
  primary: "#002642",
  secondary: "#840032",
  tertiary: "#E59500",
  light: "#e5dada",
  dark: "#02040f",
}

const identity = {
  name: "Kyle Wells",
  title: "Full Stack Software Engineer",
}

const socialMediaLinks = {
  github: "https://github.com/kqwq",
  linkedin: "https://www.linkedin.com/in/kqwq/",
  
}

const projects = [
  {
    timeRange: "2020 - Present",
    title: "Project 1",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    timeRange: "2019 - 2020",
    title: "Project 2",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: ["React", "JavaScript", "ChakraUI"],
  
  }
]

const sidebarLinks = [
  {
    name: "About Me",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Resume",
    link: "/resume",
    isExternal: true,
  },

]

export { colors, identity,socialMediaLinks ,projects,sidebarLinks}