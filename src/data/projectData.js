import booky from '../images/Booky_homepage.jpg';
import beecore from '../images/beecore.png';
import colorChameleon from '../images/colorchameleon.png';
import portfolio from '../images/portfolio.png';
// import carcar from '../images/carcar.png';
import conferencego from '../images/conferencego.png';
import fourdognight from '../images/FourDogNightTitle.png';

export const myProjects = [
    {
        id: 1,
        image: fourdognight,
        link: 'https://www.fourdognight.com',
        title: 'Four Dog Night',
        description: 'A single page application (SPA) board game built with React state and logic. ' +
        'Complex frontend logic creates elaborate gameplay and dynamic move options. ' +
        'Bold aesthetics designed in Figma and executed in React with tasteful microinteractions. ' +
        '2-player and 4-player modes support different game logic. ' +
        'Cute dogs! ' +
        '',
        tags: ['React', 'JavaScript', 'CSS', 'Figma', 'Node.js', 'Git'],
    },
    {
        id: 2,
        image: beecore,
        link: 'https://www.changeclimate.org/bee',
        title: 'Business Emissions Evaluator',
        description: 'A carbon emissions measurement software I am developing as a volunteer in collaboration with the Change Climate Project. ' +
        'This robust and modular codebase uses TypeScript and Node.js, with microservices written in Python. ' +
        'Global corporations (REI, Vuori, etc.) utilize the React-based frontend to input data, calculate emissions and plan reduction strategies. ' +
        'Charts and graphs are implemented for data visualization. Interfaces and types facilitate adherence to rigorous style guidelines. ' +
        'Cypress testing is used for continuous integration and deployment.' +
        '',
        tags: ['React', 'Typescript', 'Cypress', 'CI/CD', 'CSS', 'Python', 'Node.js', 'Yarn'],
    },
    {
        id: 3,
        image: colorChameleon,
        link: 'https://senorsuerte.itch.io/color-chameleon',
        title: 'Color Chameleon',
        description: 'An addictive blend of arcade shooters and color-matching puzzle video games. ' +
        'N-ary search algorithms dynamically reposition grid-based enemies and track spatial relationships between them. ' +
        'An event bus facilitates communication between complex decoupled systems. ' +
        'Level progression system recalculates point rewards and difficulty the further a player progresses. ' +
        'Each of five enemy types uses a distinct ability, augmented when like-colored enemies group together.',
        tags: ['C#', 'Unity', 'Event System', 'N-ary Tree', 'Queues' ]
            // 'json', 'PostgreSQL']
    },
    {
        id: 4,
        image: portfolio,
        link: 'https://github.com/john-thomas-gray/Portfolio',
        title: 'Portfolio Site',
        description: 'A single page web application showcasing my skills ' +
        'and projects, built with the React.js framework. Written in JavaScript, ' +
        'with JSX, CSS, and Bootstrap for styling. The nav bar uses DOM manipulation to ' +
        'take the user to the selected section. UseEffect hook makes "email address copied" ' +
        'message follow the user\'s cursor. EmailJS, a third-party API, powers the contact form.  ' +
        'I deployed the site with Netlify.',
        tags: ['React', 'Bootstrap', 'DOM', 'CSS', 'EmailJS', 'Netlify', 'JSX', 'JavaScript'],
    },
    {
        id: 5,
        image: booky,
        link: 'https://github.com/john-thomas-gray/Booky',
        title: 'Booky',
        description: 'A full-stack web application that allows users to make friends and compete by participating in book clubs. ' +
        'A relational database built with SQL creates complex interactions between data models. ' +
        'Clubs can host meetings with optional attendance for club members. ' +
        'Google Books API integrates book information into each meeting. ' +
        'A Friends system allows users to send, approve or deny requests to join each other\'s Friends List. ' +
        'Point-scoring and betting drive user engagement by creating friendly competition.',
        tags: ['React', 'REST', 'FastAPI', 'ViteJS', 'CSS', 'PostgreSQL',
            'Bootstrap', 'Docker', 'Python', 'JavaScript', 'JSX']
    },
    {
        id: 6,
        image: conferencego,
        link: 'https://github.com/john-thomas-gray/Conference-GO',
        title: 'Conference GO',
        description: 'A full-stack web application that allows users to keep track of conferences, events, and attendees. ' +
        'The front-end is built with React, JavaScript, JSX and Bootstrap. ' +
        'RESTful APIs on the backend were created with Django and Python. ' +
        'Third-party APIs Pexels and Weather update conferences with location photos and weather information.' +
        '',
        tags: ['React', 'JavaScript', 'Django', 'Python', 'JSX', 'Bootstrap', 'CSS', 'HTML', 'REST', 'Microservices']
    },
    // {
    //     id: 7,
    //     image: carcar,
    //     link: 'https://github.com/john-thomas-gray/CarCar',
    //     title: 'CarCar',
    //     description: 'A microservices web application designed to handle automobile inventory, sales, and services for a car dealership. ' +
    //     'Users submit forms to add automobiles, technicians, and customers to a postgreSQL database and schedule appointments. ' +
    //     'A table organizes appointments by an updatable status: scheduled, finished or cancelled. ' +
    //     'A reactive search feature allows users to look up appointments associated with a vehicle\'s VIN. ' +
    //     'Microservices regularly exchange data with poling. ' +
    //     '',
    //     tags: ['React', 'JavaScript', 'Django', 'Python', 'REST',  'JSX', 'Bootstrap', 'CSS', 'HTML', 'REST', 'Poling']
    // },
];
