
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
    url: "mai" +"lto"+":k" + "well" + "s8@" + "pr"+ "ot" +"on.me",
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
    timeRange: "2022",
    title: "PhitNest.com",
    domain: "phitnest.com",
    tagline: "A website for a mobile app that helps people connect at the gym.",
    descriptionHtml: "PhitNest is an mobile app that allows people to discover other gym-goers in their local community. The website uses a simple yet secure MERN stack built with Next.js and TypeScript to manage an invite list.",
    technologies: [tech.Next, tech.ChakraUI, tech.TypeScript, tech.Express, tech.MongoDB],
    priority: 500,
  },
  {
    timeRange: "2022",
    title: "Discrete Math Tools",
    domain: "math350.vercel.app",
    tagline: "Step-by-step solutions to common discrete problems.",
    descriptionHtml: "I built this website to help my friends and I with our Discrete Math class at university. It displays step-by-step mathematical solutions given the inputs for the Euclidean algorithm, Chinese remainder theorem as well as a primitive root checker. Based on what I learned from my previous <a class='a' href='https://kqwq.github.io/min-spanning-tree-v2/'>spanning tree</a> and <a class='a' href='https://kqwq.github.io/model-diagnostics/dist/'>regression model</a> projects.", 
    technologies: [tech.Next, tech.ChakraUI, tech.TypeScript, tech.LaTeX],
    priority: 6,
  },
  {
    timeRange: "2022",
    title: "Options Trading Tools",
    domain: "stock-intervals.vercel.app",
    tagline: "Tools for Options Trading.",
    descriptionHtml: "A collection of .",
    technologies: [tech.React, tech.TailwindCSS, tech.JavaScript, tech.Express],
    priority: 4,
  },


  
  {
    timeRange: "2021 - 2022",
    title: "LU Snipes",
    tagline: "Snipe or be sniped.",
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