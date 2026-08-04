import PropTypes from "prop-types";
import BrutalCard from "../brutal/BrutalCard";
import TagChip from "../brutal/TagChip";
import { ProjectLinks } from "../brutal/ProjectLinkButton";

const ProjectCardCompact = ({ project }) => {
  const visibleStack = project.stack?.slice(0, 3) ?? [];
  const extraCount = (project.stack?.length ?? 0) - visibleStack.length;
  const blurb = project.shortDescription || project.description;

  return (
    <BrutalCard interactive className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-left text-sm font-extrabold leading-snug text-black">
            {project.name}
          </h3>
          {blurb && (
            <p className="mt-2 line-clamp-2 text-left text-xs leading-relaxed text-black/75">
              {blurb}
            </p>
          )}
        </div>
        <ProjectLinks project={project} className="shrink-0" />
      </div>

      {visibleStack.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {visibleStack.map((item, i) => (
            <TagChip key={item} index={i}>
              {item}
            </TagChip>
          ))}
          {extraCount > 0 && (
            <span className="inline-flex items-center rounded-full border-[2px] border-black bg-white px-2 py-0.5 text-[0.65rem] font-bold">
              +{extraCount}
            </span>
          )}
        </div>
      )}
    </BrutalCard>
  );
};

ProjectCardCompact.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    description: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    sourceCode: PropTypes.string,
    livePreview: PropTypes.string,
    npmPackage: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default ProjectCardCompact;
