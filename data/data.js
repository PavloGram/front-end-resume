import filmotekaImg from "../public/filmoteka-project.jpg";
import webStudioImg from "../public/web-studio-project.jpg";
import educationImg from "../public/education-project.jpg";
import portfolio from "../public/portfolio.jpg";
import provider from "../public/provider.jpg";
const heroSkills = [
  "Html5",
  "Css3",
  "Sass",
  "Styled-components",
  "Tailwind Css",
  "Bem",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Redux",
  "Zustand",
  "React-router",
];
const heroProjects = [
  {
    id: 1,
    discription: "Web studio",
    livePage: "https://main--sprightly-klepon-de0c7f.netlify.app/",
    code: "https://github.com/PavloGram/react-web-studio",
    stack: [
      "Html5",
      "Css3",
      "Sass",
      "Bem",
      "JavaScript",
      "React.js",
      "React router",
    ],
    img: webStudioImg,
  },
  {
    id: 2,
    discription: "Education",
    livePage: "https://main--glittering-madeleine-d41b31.netlify.app/",
    code: "https://github.com/PavloGram/first-react-resume-project",
    stack: ["Html5", "Css3", "Sass", "Bem", "JavaScript", "React.js"],
    img: educationImg,
  },
  {
    id: 3,
    discription: "Filmoteka",
    livePage: "https://film-next-rho.vercel.app/",
    code: "https://github.com/PavloGram/film-next",
    stack: ["Html5", "Css3", "Bem", "Sass", "JavaScript", "Next.js", "Rtk"],
    img: filmotekaImg,
  },
];
const heroContacts = [
  {
    id: 1,
    name: "Email:",
    href: "mailto:hrampavlo@gmail.com",
    shortHref: "hrampavlo@gmail.com",
  },
  {
    id: 2,
    name: "Tel:",
    href: "tel:+380506624525",
    shortHref: "+380506624525",
  },
  {
    id: 3,
    name: "LinkedIn:",
    href: "https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE-%D0%B3%D1%80%D0%B0%D0%BC%D0%B0%D0%B6%D0%BE%D1%80%D0%B0-44650b26b/",
    shortHref: "www.linkedin.com",
  },
  {
    id: 4,
    name: "Telegram:",
    href: "https://t.me/PavloHramazhora",
    shortHref: "t.me/PavloHramazhora ",
  },
  {
    id: 5,
    name: "GitHub:",
    href: "https://github.com/PavloGram",
    shortHref: "github.com/PavloGram",
  },
  {
    id: 6,
    name: "CodeWar:",
    href: "https://www.codewars.com/users/PavloGram",
    shortHref: "www.codewars.com",
  },
];

const aboutHero =
  "Greetings, my name is Pavlo, I am 34 years old, I am from Ukraine. I am looking for a front-end developer job, I have JavaScript development skills using the React.js library and the Next.js framework. I can also work with such styling tools as Sass, Css.module, Styled Components, Tailwind. I like programming because I have the opportunity to work on solving complex problems, I like to develop comprehensively and learn new things. ";

export { heroContacts, heroProjects, heroSkills, aboutHero };
