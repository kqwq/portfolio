
import {projectProps} from "./types/project"
import { tech, techMap } from "./types/tech"
import { FaLinkedin,FaGithub, FaDiscord } from "react-icons/fa"
import { MdOutlineEmail} from "react-icons/md"

const colors = {
  primary: "#002642",
  primaryAccent: "#00497C",
  secondary: "#840032",
  tertiary: "#E59500",
  light: "#e5dada",
  dark: "#02040f",
}

const identity = {
  name: "Kyle Wells",
  title: "Full Stack Software Engineer",
}

const socialMediaLinks = [

  {
    name: "Email",
    user: "k" + "well" + "s8@" + "pr"+ "ot" +"on.me",
    url: "mai " +"lto "+":k" + "well" + "s8@" + "pr"+ "ot" +"on.me",
    icon: MdOutlineEmail,
  },
  {
    name: "LinkedIn",
    user: "Kyle Wells",
    url: "https://www.linkedin.com/in/kqwq/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    user: "kqwq",
    url: "https://github.com/kqwq",
    icon: FaGithub,
  },
  {
    name: "Discord",
    user: "kylew#6389",
    url: "",
    icon: FaDiscord,
  }
]

const projects:projectProps[] = [
  {
    timeRange: "2020 - Present",
    title: "PhitNest Website",
    domain: "phitnest.com",
    tagline: "A website for a startup that helps people connect at the gym.",
    descriptionHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [tech.Next, tech.ChakraUI, tech.TypeScript, tech.Express],
    priority: 5,
  },
  {
    timeRange: "2021 - 2022",
    title: "Options Trading Tools",
    domain: "google.com",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [tech.Next, tech.TailwindCSS, tech.TypeScript, tech.Express],
    priority: 4,
  },
  {
    timeRange: "2021 - 2022",
    title: "Discrete Math Tools",
    domain: "math350.vercel.app",
    tagline: "A collection of tools for discrete math.",
    descriptionHtml: "Lorem ",
    technologies: [tech.Next, tech.ChakraUI, tech.TypeScript, tech.LaTeX],
    priority: 6,
  },

  
  {
    timeRange: "2021 - 2022",
    title: "Project 3",
     descriptionHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    priority: 1000,
    technologies: [tech.Python],
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
    name: "Contact Me",
    link: "/contact",
  },
  {
    name: "Resume",
    link: "/blank.pdf",
    isExternal: true,
  },

]

export { colors, identity,socialMediaLinks ,projects,sidebarLinks}