import PropTypes from "prop-types";
import { FileText } from "lucide-react";
import BrutalCard from "../brutal/BrutalCard";
import BrutalButton from "../brutal/BrutalButton";
import TagChip from "../brutal/TagChip";
import { ProjectLinks } from "../brutal/ProjectLinkButton";

const compactChipClass =
  "border-[1.5px] px-2 py-0.5 text-[0.65rem] leading-tight";

const ProjectCardCompact = ({ project }) => {
  const stack = project.stack ?? [];
  const blurb = project.shortDescription || project.description;

  return (
    <BrutalCard interactive className="flex h-full flex-col gap-3">
      <h3 className="text-left text-sm font-extrabold leading-snug text-black">
        {project.name}
      </h3>

      {project.credit && (
        <p className="text-left text-[0.65rem] font-bold uppercase tracking-wide text-black/50">
          {project.credit}
        </p>
      )}

      {blurb && (
        <p className="text-left text-xs leading-relaxed text-black/75">
          {blurb}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <ProjectLinks project={project} />
        {project.caseStudy && (
          <BrutalButton
            to={project.caseStudy}
            variant="primary"
            className="min-h-9 px-3 py-1.5 text-xs"
          >
            <FileText size={14} className="mr-1.5" /> Case study
          </BrutalButton>
        )}
      </div>

      {stack.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1 pt-1">
          {stack.map((item, i) => (
            <TagChip key={item} index={i} className={compactChipClass}>
              {item}
            </TagChip>
          ))}
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
    credit: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    sourceCode: PropTypes.string,
    livePreview: PropTypes.string,
    npmPackage: PropTypes.string,
    caseStudy: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default ProjectCardCompact;
