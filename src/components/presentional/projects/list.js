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
import WP1m from "../../../assets/images/projects/workout-planner/1_m.png";
import WP2 from "../../../assets/images/projects/workout-planner/2.png";
import WP2m from "../../../assets/images/projects/workout-planner/2_m.png";
import WP3 from "../../../assets/images/projects/workout-planner/3.png";
import WP3m from "../../../assets/images/projects/workout-planner/3_m.png";

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
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    screenshots: [
      {
        original: WP1,
        thumbnail: WP1m,
      },
      {
        original: WP2,
        thumbnail: WP2m,
      },
      {
        original: WP3,
        thumbnail: WP3m,
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
    description: "",
    logo: todoListLogo,
    technologies: [technologies.js, technologies.react, technologies.android],
    url: "https://github.com/MChrustowski/react_native_todo",
    order: 2,
  },
  {
    name: "JobOffers",
    description: "",
    logo: jobOffersLogo,
    technologies: [
      technologies.html,
      technologies.css,
      technologies.js,
      technologies.react,
    ],
    url: "https://github.com/MChrustowski/job_offers_app",
    order: 3,
  },
  {
    name: "JobOffers API",
    description: "",
    logo: jobOffersApiLogo,
    technologies: [technologies.ruby, technologies.ror],
    url: "https://github.com/MChrustowski/job_offers_api",
    order: 4,
  },
  {
    name: "BlogNEWS",
    description: "",
    logo: blogNewsLogo,
    technologies: [
      technologies.html,
      technologies.css,
      technologies.js,
      technologies.react,
    ],
    url: "https://github.com/MChrustowski/react_blog",
    order: 5,
  },
  {
    name: "Digital Clock",
    description: "",
    logo: digitalClockLogo,
    technologies: [technologies.html, technologies.css, technologies.js],
    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 6,
  },
  {
    name: "Password Generator",
    description: "",
    logo: passwordGeneratorLogo,
    technologies: [technologies.html, technologies.css, technologies.js],
    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 7,
  },
  {
    name: "ToDo (localStorage)",
    description: "",
    logo: todoLocalstorageLogo,
    technologies: [technologies.html, technologies.css, technologies.js],
    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 8,
  },
  {
    name: "Video Player",
    description: "",
    logo: videoPlayerLogo,
    technologies: [technologies.html, technologies.css, technologies.js],
    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 9,
  },
];

export { projects, technologies };
