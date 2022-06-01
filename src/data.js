//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

// companies icons
// import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
// import UpworkBrandIcon from "./assets/img/brands/upwork.png";
// import FiverBrandIcon from "./assets/img/brands/fiverr.png";
// import BehanceBrandIcon from "./assets/img/brands/behance.png";
// import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg9 from "./assets/img/skills/mongodb.png";

// testimonial images
// import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
// import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
// import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/hanrentu",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/tuhanren",
  },
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/hanren.tu",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/henrytuu/",
  },
];

// companies
// export const brands = [
//   {
//     img: FreelancerBrandIcon,
//     href: "",
//   },
//   {
//     img: UpworkBrandIcon,
//     href: "",
//   },
//   {
//     img: FiverBrandIcon,
//     href: "",
//   },
//   {
//     img: BehanceBrandIcon,
//     href: "",
//   },
//   {
//     img: DribbbleBrandIcon,
//     href: "",
//   },
// ];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "SAS2PYTHON",
    category: "UI/UX design",
    description: "Bootstrap, Moqups, Photoshop, MySQL",
  },
  {
    id: "2",
    image: Project2,
    name: "Infinity Survey",
    category: "Web Development",
    description: "MongoDB, Express, NodeJs, Bootstrap, Moqups, Trello, Heroku",
  },
  {
    id: "3",
    image: Project3,
    name: "TQ System",
    category: "web development",
    description: "ReactJs, MongoDB, Express, NodeJS, LucidChart, Firebase",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Simple content structure, clean design patterns, and intelligent interactions are all things I value.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "I adore building things from the ground up and bringing them to life in the browser.",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to answer.",
    description: "Email me at tu.hanren@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Toronto, Canada",
    description: "Serving clients worldwide",
  },
];
