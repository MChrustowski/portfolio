import workoutPlannerLogo from "../../../assets/images/projects/workout-planner/logo.png";

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
    description: "",
    logo: workoutPlannerLogo,
    technologies: [technologies.js, technologies.react, technologies.android],
    url:
      "https://play.google.com/store/apps/details?id=com.codeman.workoutplanner",
    order: 1,
  },
  {
    name: "ToDo List",
    description: "",
    logo: "",
    technologies: [technologies.js, technologies.react, technologies.android],
    url: "https://github.com/MChrustowski/react_native_todo",
    order: 2,
  },
  {
    name: "JobOffers",
    description: "",
    logo: "",
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
    logo: "",
    technologies: [technologies.ruby, technologies.ror],
    url: "https://github.com/MChrustowski/job_offers_api",
    order: 4,
  },
  {
    name: "BlogNEWS",
    description: "",
    logo: "",
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
    logo: "",
    technologies: [technologies.html, technologies.css, technologies.js],
    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 6,
  },
  {
    name: "Password Generator",
    description: "",
    logo: "",
    technologies: [technologies.html, technologies.css, technologies.js],
    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 7,
  },
  {
    name: "ToDo (localStorage)",
    description: "",
    logo: "",
    technologies: [technologies.html, technologies.css, technologies.js],
    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 8,
  },
  {
    name: "Video Player",
    description: "",
    logo: "",
    technologies: [technologies.html, technologies.css, technologies.js],
    url: "https://github.com/MChrustowski/PureJsProjects",
    order: 9,
  },
];

export { projects, technologies };
