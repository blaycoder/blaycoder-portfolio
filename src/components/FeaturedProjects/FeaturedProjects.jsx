import { featuredProjects } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";
import FeaturedProjectCard from "./FeaturedProjectCard";

const FeaturedProjects = () => {
  if (!featuredProjects.length) return null;

  return (
    <SectionShell id="work" bgClass="bg-white">
      <h2 className="mb-8 text-left text-3xl font-extrabold text-black md:mb-12 md:text-4xl">
        Featured Projects
      </h2>
      <div className="flex flex-col gap-8 md:gap-10">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionShell>
  );
};

export default FeaturedProjects;
