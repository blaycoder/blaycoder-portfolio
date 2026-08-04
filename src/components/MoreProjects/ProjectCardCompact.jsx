import PropTypes from "prop-types";
import BrutalCard from "../brutal/BrutalCard";
import TagChip from "../brutal/TagChip";
import { ProjectLinks } from "../brutal/ProjectLinkButton";

const compactChipClass =
  "border-[1.5px] px-2 py-0.5 text-[0.65rem] leading-tight";

const ProjectCardCompact = ({ project }) => {
  const visibleStack = project.stack?.slice(0, 3) ?? [];
  const extraCount = (project.stack?.length ?? 0) - visibleStack.length;
  const blurb = project.shortDescription || project.description;

  return (
    <BrutalCard interactive className="flex h-full flex-col gap-3">
      <h3 className="text-left text-sm font-extrabold leading-snug text-black">
        {project.name}
      </h3>

      {blurb && (
        <p className="text-left text-xs leading-relaxed text-black/75">
          {blurb}
        </p>
      )}

      <ProjectLinks project={project} />

      {visibleStack.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1 pt-1">
          {visibleStack.map((item, i) => (
            <TagChip key={item} index={i} className={compactChipClass}>
              {item}
            </TagChip>
          ))}
          {extraCount > 0 && (
            <span className="inline-flex items-center rounded-full border-[1.5px] border-black bg-white px-1.5 py-0.5 text-[0.6rem] font-bold">
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
