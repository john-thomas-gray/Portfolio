import beecore from "../../assets/images/beecore.png";
import colorChameleon from "../../assets/images/colorchameleon.png";
import conferencego from "../../assets/images/conferencego.png";
import fourDogNightTitle from "../../assets/images/fourDogNightTitle.png";
import sFStreet from "../../assets/images/sFStreet.png";
import profile from "../../assets/images/portfolio.png";

export const PROJECTS = [
  {
    slug: "bee-core",
    title: "Bee Core",
    cardImage: beecore,
    description:
      "A carbon emissions measurement software I am developing as a volunteer in collaboration with the Change Climate Project. This robust and modular codebase uses TypeScript and Node.js, with microservices written in Python. Global corporations (REI, Vuori, etc.) utilize the React-based frontend to input data, calculate emissions and plan reduction strategies. Charts and graphs are implemented for data visualization. Interfaces and types facilitate adherence to rigorous style guidelines. Cypress testing is used for continuous integration and deployment.",
    githubUrl: "https://github.com/johngraydev/bee-core",
    liveUrl: "https://bee-core.vercel.app",
    videoEmbedUrl: "https://www.youtube.com/embed/ZfWj_BVE0Kg",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    cardImage: profile,
    description:
      "A single page web application showcasing my skills and projects, built with the React.js framework. Written in JavaScript, with JSX, CSS, and Bootstrap for styling. The nav bar uses DOM manipulation to take the user to the selected section. UseEffect hook makes the message follow the user's cursor. EmailJS, a third-party API, powers the contact form. I deployed the site with Netlify.",
    githubUrl: "https://github.com/johngraydev/portfolio",
    liveUrl: "https://www.johngraydev.com",
    videoEmbedUrl: "https://www.youtube.com/embed/ZfWj_BVE0Kg",
  },
  {
    slug: "conference-go",
    title: "Conference Go",
    cardImage: conferencego,
    description:
      "A full-stack web application that allows users to keep track of conferences, events, and attendees. The front-end is built with React, JavaScript, JSX and Bootstrap. RESTful APIs on the backend were created with Django and Python. Third-party APIs Pexels and Weather update conferences with location photos and weather information.",
    githubUrl: "https://github.com/johngraydev/conference-go",
    liveUrl: null,
    videoEmbedUrl: "https://www.youtube.com/embed/ZfWj_BVE0Kg",
  },
  {
    slug: "color-chameleon",
    title: "Color Chameleon",
    cardImage: colorChameleon,
    description:
      "An addictive blend of arcade shooters and color-matching puzzle video games. N-ary search algorithms dynamically reposition grid-based enemies and track spatial relationships between them. An event bus facilitates communication between complex decoupled systems. Level progression system recalculates point rewards and difficulty the further a player progresses. Each of five enemy types uses a distinct ability, augmented when like-colored enemies group together.",
    githubUrl: "https://github.com/johngraydev/color-chameleon",
    liveUrl: "https://color-chameleon.vercel.app",
    videoEmbedUrl: "https://www.youtube.com/embed/ZfWj_BVE0Kg",
  },
  {
    slug: "four-dog-night",
    title: "Four Dog Night",
    cardImage: fourDogNightTitle,
    description:
      "A single page application (SPA) board game built with React state and logic. Complex frontend logic creates elaborate gameplay and dynamic move options. Bold aesthetics designed in Figma and executed in React with tasteful microinteractions. 2-player and 4-player modes support different game logic. Cute dogs!",
    githubUrl: "https://github.com/johngraydev/four-dog-night",
    liveUrl: "https://www.fourdognight.com",
    videoEmbedUrl: "https://www.youtube.com/embed/ZfWj_BVE0Kg",
  },
  {
    slug: "san-francisco",
    title: "San Francisco",
    cardImage: sFStreet,
    description:
      "I wish everything was gold. I wish you-oo-oo were here to hold. I'm wishing.",
    githubUrl: "https://github.com/johngraydev/san-francisco",
    liveUrl: "https://san-francisco.vercel.app",
    videoEmbedUrl: "https://www.youtube.com/embed/ZfWj_BVE0Kg",
  },
];
