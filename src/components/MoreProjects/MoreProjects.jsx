import { moreProjects, projectsLink } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";
import BrutalButton from "../brutal/BrutalButton";
import ProjectCardCompact from "./ProjectCardCompact";

const MoreProjects = () => {
  if (!moreProjects.length) return null;

  return (
    <SectionShell id="more-projects" bgClass="bg-[#FFF9E6]">
      <h2 className="mb-8 text-left text-3xl font-extrabold text-black md:mb-12 md:text-4xl">
        More Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((project) => (
          <ProjectCardCompact key={project.name} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <BrutalButton
          href={projectsLink.link}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
        >
          View more on GitHub
        </BrutalButton>
      </div>
    </SectionShell>
  );
};

export default MoreProjects;
