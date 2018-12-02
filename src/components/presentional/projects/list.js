import workoutPlannerLogo from "../../../assets/images/projects/workout-planner/logo.png";
import todoListLogo from "../../../assets/images/projects/todo-list/logo.png";
import jobOffersLogo from "../../../assets/images/projects/job-offers/logo.png";
import jobOffersApiLogo from "../../../assets/images/projects/job-offers/logo-api.png";
import blogNewsLogo from "../../../assets/images/projects/blog-news/logo.png";
import digitalClockLogo from "../../../assets/images/projects/digital-clock/logo.png";
import passwordGeneratorLogo from "../../../assets/images/projects/password-generator/logo.png";
import todoLocalstorageLogo from "../../../assets/images/projects/todo-localstorage/logo.png";
import videoPlayerLogo from "../../../assets/images/projects/video-player/logo.png";

import WP1 from "../../../assets/images/projects/workout-planner/1.png";
import WP2 from "../../../assets/images/projects/workout-planner/2.png";
import WP3 from "../../../assets/images/projects/workout-planner/3.png";

import TD1 from "../../../assets/images/projects/todo-list/1.png";
import TD2 from "../../../assets/images/projects/todo-list/2.png";

import JO1 from "../../../assets/images/projects/job-offers/1.png";
import JO2 from "../../../assets/images/projects/job-offers/2.png";
import JO3 from "../../../assets/images/projects/job-offers/3.png";
import JO4 from "../../../assets/images/projects/job-offers/4.png";
import JO5 from "../../../assets/images/projects/job-offers/5.png";
import JO6 from "../../../assets/images/projects/job-offers/6.png";
import JO7 from "../../../assets/images/projects/job-offers/7.png";
import JOA1 from "../../../assets/images/projects/job-offers/1API.png";

import BN1 from "../../../assets/images/projects/blog-news/1.png";
import BN2 from "../../../assets/images/projects/blog-news/2.png";
import BN3 from "../../../assets/images/projects/blog-news/3.png";

import DC1 from "../../../assets/images/projects/digital-clock/1.png";
import DC2 from "../../../assets/images/projects/digital-clock/2.png";
import DC3 from "../../../assets/images/projects/digital-clock/3.png";
import DC4 from "../../../assets/images/projects/digital-clock/4.png";

import PG1 from "../../../assets/images/projects/password-generator/1.png";
import PG2 from "../../../assets/images/projects/password-generator/2.png";

import TDL1 from "../../../assets/images/projects/todo-localstorage/1.png";
import TDL2 from "../../../assets/images/projects/todo-localstorage/2.png";
import TDL3 from "../../../assets/images/projects/todo-localstorage/3.png";

import VP1 from "../../../assets/images/projects/video-player/1.png";
import VP2 from "../../../assets/images/projects/video-player/2.png";

const technologies = {
  html: {
    name: "HTML",
    icon: "devicon-html5-plain colored",
  },
  css: {
    name: "CSS",
    icon: "devicon-css3-plain colored",
  },
  js: {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  react: {
    name: "React",
    icon: "devicon-react-plain colored",
  },
  sass: {
    name: "Sass",
    icon: "devicon-sass-plain colored",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain colored",
  },
  ruby: {
    name: "Ruby",
    icon: "devicon-ruby-plain colored",
  },
  ror: {
    name: "Ruby on Rails",
    icon: "devicon-rails-plain colored",
  },
  android: {
    name: "Android",
    icon: "devicon-android-plain colored",
  },
};

const projects = [
  {
    name: "Workout Planner",
    description:
      "It’s an application for people who work out at the gym. The main aim of the app is to record workout sessions and to follow progress. After signing up the user can calculate his BMI and BMR indicator and add a supplements log. The main feature of WorkoutPlanner is assigning training series to particular workout days. Additionally, the user has access to extensive statistics. WorkoutPlanner app was published on Google Play Store.",

    screenshots: [
      {
        original: WP1,
      },
      {
        original: WP2,
      },
      {
        original: WP3,
      },
    ],
    logo: workoutPlannerLogo,
    technologies: [technologies.js, technologies.react, technologies.android],
    libraries: [
      "redux",
      "redux-persist",
      "redux-thunk",
      "native-base",
      "react-native-elements",
      "react-native-material-tabs",
    ],
    url:
      "https://play.google.com/store/apps/details?id=com.codeman.workoutplanner",
    order: 1,
  },
  {
    name: "ToDo List",
    description:
      "This was my first React Native app which has all the classical functionalities of to-do lists.",
    screenshots: [
      {
        original: TD1,
      },
      {
        original: TD2,
      },
    ],
    logo: todoListLogo,
    technologies: [technologies.js, technologies.react, technologies.android],
    libraries: [
      "redux",
      "redux-persist",
      "redux-thunk",
      "native-base",
      "lodash",
    ],
    url: "https://github.com/MChrustowski/react_native_todo",
    order: 2,
  },
  {
    name: "JobOffers",
    description:
      "It’s an application designated for employers and people who are looking for a job in the IT branch. Employers have the option of adding offers, whereas employees can apply for the specific positions. Administrator panel contains many statistics based on information added by users. JobOffers app was written entirely in ReactJS + Redux. REST API was created in Ruby on Rails.",
    screenshots: [
      {
        original: JO1,
      },
      {
        original: JO2,
      },
      {
        original: JO3,
      },
      {
        original: JO4,
      },
      {
        original: JO5,
      },
      {
        original: JO6,
      },
      {
        original: JO7,
      },
    ],
    logo: jobOffersLogo,
    technologies: [
      technologies.html,
      technologies.css,
      technologies.js,
      technologies.react,
    ],
    libraries: [
      "redux",
      "react-router-dom",
      "styled-components",
      "axios",
      "chart.js",
      "react-google-maps",
    ],
    url: "https://github.com/MChrustowski/job_offers_app",
    order: 3,
  },
  {
    name: "JobOffers API",
    description: "REST API created for needs of Job Offers app.",
    screenshots: [
      {
        original: JOA1,
      },
    ],
    logo: jobOffersApiLogo,
    technologies: [technologies.ruby, technologies.ror],
    libraries: [
      "devise",
      "carrierwave",
      "simple_token_authentication",
      "friendly_id",
      "jbuilder",
    ],
    url: "https://github.com/MChrustowski/job_offers_api",
    order: 4,
  },
  {
    name: "BlogNEWS",
    description:
      "This is my first individual application written in ReactJS after a summer internship at the Binar :: Apps office. The main purpose while creating this application was consolidation of informations obtained during internship + creation REST API based on Ruby on Rails. BlogNews has classical functionalities of blog: creating categories, subcategories, posts and adding comments by user.",
    screenshots: [
      {
        original: BN1,
      },
      {
        original: BN2,
      },
      {
        original: BN3,
      },
    ],
    logo: blogNewsLogo,
    technologies: [
      technologies.html,
      technologies.css,
      technologies.js,
      technologies.react,
    ],
    libraries: [
      "redux",
      "react-router",
      "styled-components",
      "react-toastify",
      "react-ckeditor-wrapper",
    ],
    url: "https://github.com/MChrustowski/react_blog",
    order: 5,
  },
  {
    name: "Digital Clock",
    description:
      "Application written in pure JavaScript. Digital Clock contains three modes: clock, stopwatch and timer. The website is compatible with RWD.",
    screenshots: [
      {
        original: DC1,
      },
      {
        original: DC2,
      },
      {
        original: DC3,
      },
      {
        original: DC4,
      },
    ],
    logo: digitalClockLogo,
    technologies: [technologies.html, technologies.css, technologies.js],
    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 6,
  },
  {
    name: "Password Generator",
    description:
      "Application written in pure JavaScript. The main goal is to generate passwords with the assumed criteria. The website is compatible with RWD.",
    screenshots: [
      {
        original: PG1,
      },
      {
        original: PG2,
      },
    ],
    logo: passwordGeneratorLogo,
    technologies: [technologies.html, technologies.css, technologies.js],

    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 7,
  },
  {
    name: "ToDo (localStorage)",
    description:
      "Application written in pure JavaScript. Classical to-do list based on browser local storage. The website is compatible with RWD.",
    screenshots: [
      {
        original: TDL1,
      },
      {
        original: TDL2,
      },
      {
        original: TDL3,
      },
    ],
    logo: todoLocalstorageLogo,
    technologies: [technologies.html, technologies.css, technologies.js],

    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 8,
  },
  {
    name: "Video Player",
    description:
      "Application written in pure JavaScript. Video Player contains all necessary functionalities.",
    screenshots: [
      {
        original: VP1,
      },
      {
        original: VP2,
      },
    ],
    logo: videoPlayerLogo,
    technologies: [technologies.html, technologies.css, technologies.js],

    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 9,
  },
];

export { projects, technologies };
