import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandLeetcode,
  IconPhone,
} from "@tabler/icons-react";

const Info = {
  name: "Abhishek Pipariye",
  stack: [
    "Software Engineer",
    "Full Stack Web Developer",
    "System Administrator",
  ],
  bio: `A web developer transitioning from a strong background in system
          administration. With hands-on experience at Wipro managing IT
          infrastructures, I’ve developed a passion for building functional,
          responsive websites. Skilled in HTML, CSS, JavaScript, and Node.js, I
          bring a unique perspective by combining my technical expertise in
          backend systems with front-end development. I’m excited to create
          user-friendly web applications and explore new web technologies.`,
};

const ProjectInfo = [
  {
    title: "Sanatan Ki Virasat",
    desc: "Sanatan Ki Virasat is a project that delves into the timeless heritage of Sanatan Dharma...",
    image: "images/vedas.jpeg", // Updated path
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    github: "https://github.com/abhishek6164/sanatan-ki-virasat", // replace with the actual GitHub link
    link: "https://abhishek6164.github.io/sanatan-ki-virasat/", // replace with the actual hosted link
  },
  {
    title: "Weather Update",
    desc: "WeatherNow is a dynamic and responsive weather update website...",
    image: "images/weather.jpeg", // Updated path
    technologies: ["React", "API"],
    github: "https://github.com/abhishek6164/weather-now", // replace with the actual GitHub link
    link: "https://abhishek6164.github.io/weather-now/", // replace with the actual hosted link
  },
  {
    title: "NextInLine",
    desc: "NextInLine is a dynamic e-commerce platform...",
    image: "images/ecommerce.jpeg", // Updated path
    technologies: ["React", "Node.JS", "MongoDB", "Tailwind"],
    github: "https://github.com/abhishek6164/next-inline", // replace with the actual GitHub link
    link: "https://abhishek6164.github.io/next-inline/", // replace with the actual hosted link
  },
  {
    title: "Sanatan Ki Virasat",
    desc: "Sanatan Ki Virasat is a project that delves into the timeless heritage of Sanatan Dharma...",
    image: "images/vedas.jpeg", // Updated path
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    github: "https://github.com/abhishek6164/sanatan-ki-virasat", // replace with the actual GitHub link
    link: "https://abhishek6164.github.io/sanatan-ki-virasat/", // replace with the actual hosted link
  },
  {
    title: "Weather Update",
    desc: "WeatherNow is a dynamic and responsive weather update website...",
    image: "images/weather.jpeg", // Updated path
    technologies: ["React", "API"],
    github: "https://github.com/abhishek6164/weather-now", // replace with the actual GitHub link
    link: "https://abhishek6164.github.io/weather-now/", // replace with the actual hosted link
  },
  {
    title: "NextInLine",
    desc: "NextInLine is a dynamic e-commerce platform...",
    image: "images/ecommerce.jpeg", // Updated path
    technologies: ["React", "Node.JS", "MongoDB", "Tailwind"],
    github: "https://github.com/abhishek6164/next-inline", // replace with the actual GitHub link
    link: "https://abhishek6164.github.io/next-inline/", // replace with the actual hosted link
  },
];

const SkillInfo = [
  {
    title: "FrontEnd",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "BackEnd",
    skills: ["Node.js", "Python", "Express.js", "MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["GIT", "GitHub", "VS Code", "Postman", "MongoDB Compass"],
  },
  {
    title: " System Administrator",
    skills: [
      "Server Management",
      "Network Administration",
      "System Monitoring",
      "Backup & Recovery",
      "Virtualization",
      "User Management",
      "Security Management",
    ],
  },
];

const ExperienceInfo = [
  {
    role: "System Administrator",
    company: "wipro",
    date: "June 2022 - Present",
    desc: "With 2.5 years of experience as a System Administrator, I have developed strong expertise in managing and maintaining IT infrastructure. My role involved configuring and troubleshooting servers, networks, and systems to ensure seamless operations. I have extensive experience in monitoring system performance, managing backups, and ensuring security protocols are in place. My responsibilities also included supporting user requests, performing system upgrades, and maintaining documentation of network configurations. I collaborated with IT teams to implement solutions that enhanced system efficiency and minimized downtime.",
    skills: [
      "Server Management",
      "Network Administration",
      "System Monitoring",
      "Backup & Recovery",
      "Virtualization",
      "User Management",
      "Security Management",
    ],
  },
];

const SocialInfo = [
  { link: "tel:+919322876164", icon: IconPhone },
  {
    link: "https://www.linkedin.com/in/abhishek-pipriye-a3a119221/",
    icon: IconBrandLinkedin,
  },
  { link: "https://github.com/abhishek6164", icon: IconBrandGithub },
  {
    link: "https://leetcode.com/u/Abhishek_Pipriye/",
    icon: IconBrandLeetcode,
  },
  { link: "https://x.com/AbhishekPipriye", icon: IconBrandX },
];

export { Info, ProjectInfo, SkillInfo, ExperienceInfo, SocialInfo };
