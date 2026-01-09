import changeClimateLogo from "../../assets/images/change-climate-logo.png";
import colorChameleon from "../../assets/images/colorchameleon.png";
import conferencego from "../../assets/images/conferencego.png";
import fourDogNightTitle from "../../assets/images/fourDogNightTitle.png";
import profile from "../../assets/images/portfolio.png";
import placeholder from "../../assets/images/sFStreet.png";
import amcTheatres from "../../assets/images/amc-theatres.jpg";
import wadjet from "../../assets/images/wadjet-logo.jpg";

export const PROJECTS = [
  {
    slug: "change-climate",
    title: "Change Climate Project",
    cardImage: changeClimateLogo,
    description:
      "A carbon emissions measurement software I am developing as a volunteer in collaboration with the Change Climate Project. This robust and modular codebase uses TypeScript and Node.js, with microservices written in Python. Global corporations (REI, Vuori, etc.) utilize the React-based frontend to input data, calculate emissions and plan reduction strategies. Charts and graphs are implemented for data visualization. Interfaces and types facilitate adherence to rigorous style guidelines. Cypress testing is used for continuous integration and deployment.",
    githubUrl: null,
    liveUrl: "https://www.changeclimate.org/",
    videoEmbedUrl: null,
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    cardImage: profile,
    description:
      "A single page web application showcasing my skills and projects, built with the React.js framework. Written in JavaScript, with JSX, CSS, and Bootstrap for styling. The nav bar uses DOM manipulation to take the user to the selected section. UseEffect hook makes the message follow the user's cursor. EmailJS, a third-party API, powers the contact form. I deployed the site with Netlify.",
    githubUrl: "https://github.com/john-thomas-gray/portfolio",
    liveUrl: "https://www.johngraydev.com",
    videoEmbedUrl: "https://www.youtube.com/embed/ZfWj_BVE0Kg",
  },
  {
    slug: "wadjet",
    title: "Wadjet.com",
    cardImage: wadjet,
    description: "The website I created for my first business, Wadjet.",
    githubUrl: "https://github.com/john-thomas-gray/wadjet",
    liveUrl: "https://www.wadjet.com",
    videoEmbedUrl: null,
  },
  {
    slug: "color-chameleon",
    title: "Color Chameleon",
    cardImage: colorChameleon,
    description:
      "An addictive blend of arcade shooters and color-matching puzzle video games. N-ary search algorithms dynamically reposition grid-based enemies and track spatial relationships between them. An event bus facilitates communication between complex decoupled systems. Level progression system recalculates point rewards and difficulty the further a player progresses. Each of five enemy types uses a distinct ability, augmented when like-colored enemies group together.",
    githubUrl: "https://github.com/john-thomas-gray/color-chameleon",
    liveUrl: "https://color-chameleon.vercel.app",
    videoEmbedUrl: "https://www.youtube.com/embed/ZfWj_BVE0Kg",
  },
  {
    slug: "four-dog-night",
    title: "Four Dog Night",
    cardImage: fourDogNightTitle,
    description:
      "A single page application (SPA) board game built with React state and logic. Complex frontend logic creates elaborate gameplay and dynamic move options. Bold aesthetics designed in Figma and executed in React with tasteful microinteractions. 2-player and 4-player modes support different game logic. Cute dogs!",
    githubUrl: "https://github.com/john-thomas-gray/four-dog-night",
    liveUrl: "https://www.fourdognight.com",
    videoEmbedUrl: "https://www.youtube.com/embed/ZfWj_BVE0Kg",
  },
  {
    slug: "amc-theatres",
    title: "AMC Theatres Clone",
    cardImage: amcTheatres,
    description: "AMC Theatres Clone. (Details coming soon.)",
    githubUrl: null,
    liveUrl: null,
    videoEmbedUrl: null,
  },
  {
    slug: "gig-timer",
    title: "Gig Timer",
    cardImage: placeholder,
    description: "Gig Timer. (Details coming soon.)",
    githubUrl: null,
    liveUrl: null,
    videoEmbedUrl: null,
  },
  {
    slug: "spreadsheet-converter",
    title: "Spreadsheet Converter",
    cardImage: placeholder,
    description: "Spreadsheet Converter. (Details coming soon.)",
    githubUrl: null,
    liveUrl: null,
    videoEmbedUrl: null,
  },
  {
    slug: "tell",
    title: "Tell",
    cardImage: placeholder,
    description: "Tell. (Details coming soon.)",
    githubUrl: null,
    liveUrl: null,
    videoEmbedUrl: null,
  },
  {
    slug: "4sight",
    title: "4Sight",
    cardImage: placeholder,
    description: "4Sight. (Details coming soon.)",
    githubUrl: null,
    liveUrl: null,
    videoEmbedUrl: null,
  },
];
