import spacehqImg from "./assets/spacehq-1.webp";
import saabisImg from "./assets/saabis-1.webp";
import sentinelImg from "./assets/sentinel-cli-new.png";
import scamdetectImg from "./assets/scamdetect-1.png";
import {
  header,
  about,
  loadout,
  projects as knowledgeProjects,
  projectsLink,
  skills,
  experience,
  faq,
  closingCta,
  contact,
} from "./data/portfolio-knowledge";

const projectImages = {
  spacehq: spacehqImg,
  "saabis-beauty": saabisImg,
  sentinel: sentinelImg,
  scamdetect: scamdetectImg,
};

const projects = knowledgeProjects.map((project) => ({
  ...project,
  image: projectImages[project.id] ?? project.image,
}));

const featuredProjects = projects.filter((p) => p.featured);
const moreProjects = projects.filter((p) => !p.featured);

export {
  header,
  about,
  loadout,
  projects,
  featuredProjects,
  moreProjects,
  projectsLink,
  skills,
  experience,
  faq,
  closingCta,
  contact,
};
