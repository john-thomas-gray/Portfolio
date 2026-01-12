import changeClimateLogo from "../../assets/images/change-climate-logo.png";
import spreadsheetConverterThumbnail from "../../assets/images/spreadsheet-converter-thumbnail.png";
// import fourDogNightTitle from "../../assets/images/fourDogNightTitle.png";
import amcTheatres from "../../assets/images/amc-theatres.jpg";
import wadjet from "../../assets/images/wadjet-logo.jpg";
import booky from "../../assets/images/booky-logo.jpg";
import gigTimer from "../../assets/images/gig-timer.png";
import colorChameleonThumbnail from "../../assets/images/color-chameleon-title.png";

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
    slug: "Gig Timer",
    title: "Gig Timer",
    cardImage: gigTimer,
    description:
      "Gig Timer is a Manifest V3 Chrome extension that automates how the user tracks freelance jobs. It detects when the user lands on assignments or workplace dashboards, injects a bridge to pull structured data out of w2ui grids, and normalizes each job into a consistent “project” record. A background service worker keeps Chrome storage, a live on-page stopwatch, and a popup dashboard in sync while calculating runtimes, invoice totals, and hourly rates. From there the user can export projects straight to Google Sheets or download them as JSON/CSV, creating a hands-off way to monitor billable time and deliverables across multiple client portals.",
    githubUrl: "https://github.com/john-thomas-gray/gig-timer",
    liveUrl: null,
    videoEmbedUrl: null,
  },
  // {
  //   slug: "portfolio",
  //   title: "Portfolio",
  //   cardImage: profile,
  //   description:
  //     "A single page web application showcasing my skills and projects, built with the React.js framework. Written in JavaScript, with JSX, CSS, and Bootstrap for styling. The nav bar uses DOM manipulation to take the user to the selected section. UseEffect hook makes the message follow the user's cursor. EmailJS, a third-party API, powers the contact form. I deployed the site with Netlify.",
  //   githubUrl: "https://github.com/john-thomas-gray/portfolio",
  //   liveUrl: null,
  //   videoEmbedUrl: null,
  // },
  {
    slug: "wadjet",
    title: "Wadjet.com",
    cardImage: wadjet,
    description:
      "The first website I designed. The Wadjet LLC site embraces minimalist design to serve blind and visually impaired users first, ensuring true accessibility to visual media without sacrificing beauty. It reflects a brand rooted in quality, storytelling, and respect for the people it serves. Built with strong SEO foundations, it naturally connects with audiences through organic search and played a critical role in introducing the Wadjet brand to the industry.",
    githubUrl: "https://github.com/john-thomas-gray/wadjet",
    liveUrl: "https://www.wadjet.com",
    videoEmbedUrl: null,
  },
  {
    slug: "amc-theatres",
    title: "AMC Theatres Clone",
    cardImage: amcTheatres,
    description:
      "An exact copy of the AMC Theatres mobile app I built to demonstrate my ability to build to spec from someone else's design. The app is built with React Native + Expo Router (TypeScript) and features a polished browsing experience for now playing/coming soon titles powered by the TMDB API, plus theatre discovery using location + Google Places. The app includes a full ticket-purchase flow (showtimes, seat selection, cart, concessions) with animated UI, bottom sheets, and app-wide state via React Context. A lightweight Node/Express + Stripe PaymentIntent service supports a realistic checkout architecture, with Clerk integrated for authentication.",
    githubUrl: "https://github.com/john-thomas-gray/AMC-clone",
    liveUrl: null,
    videoEmbedUrl: null,
  },

  // {
  //   slug: "four-dog-night",
  //   title: "Four Dog Night",
  //   cardImage: fourDogNightTitle,
  //   description:
  //     "A single page application (SPA) board game built with React state and logic. Complex frontend logic creates elaborate gameplay and dynamic move options. Bold aesthetics designed in Figma and executed in React with tasteful microinteractions. 2-player and 4-player modes support different game logic. Cute dogs!",
  //   githubUrl: "https://github.com/john-thomas-gray/four-dog-night",
  //   liveUrl: "https://www.fourdognight.com",
  //   videoEmbedUrl: null,
  // },
  {
    slug: "Booky",
    title: "Booky",
    cardImage: booky,
    description:
      "A social media bookclub and betting app that allows users to make friends and compete by participating in book clubs. A relational database built with SQL creates complex interactions between data models. Clubs can host meetings with optional attendance for club members. Google Books API integrates book information into each meeting. A Friends system allows users to send, approve or deny requests to join each other's Friends List. Point-scoring and betting drive user engagement by creating friendly competition.",
    githubUrl: "https://github.com/john-thomas-gray/booky",
    liveUrl: null,
    videoEmbedUrl: null,
  },
  {
    slug: "color-chameleon",
    title: "Color Chameleon",
    cardImage: colorChameleonThumbnail,
    description:
      "An addictive blend of arcade shooters and color-matching puzzle video games. N-ary search algorithms dynamically reposition grid-based enemies and track spatial relationships between them. An event bus facilitates communication between complex decoupled systems. Level progression system recalculates point rewards and difficulty the further a player progresses. Each of five enemy types uses a distinct ability, augmented when like-colored enemies group together.",
    githubUrl: "https://github.com/john-thomas-gray/color-chameleon",
    liveUrl: "https://senorsuerte.itch.io/color-chameleon",
    videoEmbedUrl: null,
  },
  {
    slug: "spreadsheet-converter",
    title: "Spreadsheet Converter",
    cardImage: spreadsheetConverterThumbnail,
    description:
      "A lightweight Python utility that batch-converts spreadsheets between various formats (XLSX, CSV, SRT, etc.) while enforcing client-specific formatting rules. Built with pandas and Excel tooling, it cleans and restructures subtitle/dialog data (e.g., filtering and rewriting Spanish-only lines, normalizing speaker/character fields, and producing delivery-ready columns) through simple input/output folders and one-command scripts.",
    githubUrl: "https://github.com/john-thomas-gray/spreadsheet-formatter",
    liveUrl: null,
    videoEmbedUrl: null,
  },
  // {
  //   slug: "tell",
  //   title: "Tell",
  //   cardImage: placeholder,
  //   description: "Tell. (Details coming soon.)",
  //   githubUrl: null,
  //   liveUrl: null,
  //   videoEmbedUrl: null,
  // },
  // {
  //   slug: "4sight",
  //   title: "4Sight",
  //   cardImage: placeholder,
  //   description: "4Sight. (Details coming soon.)",
  //   githubUrl: null,
  //   liveUrl: null,
  //   videoEmbedUrl: null,
  // },
];
