import uniqid from "uniqid";
import { projects, projectsLink } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
      <div className="project_btn">
        <a href={projectsLink.link} target="_blank" rel="noopener noreferrer">
          <span type="button" className="btn btn--outline">
            view more
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
