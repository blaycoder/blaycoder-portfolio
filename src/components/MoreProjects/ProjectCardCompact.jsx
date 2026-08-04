import PropTypes from "prop-types";
import { ExternalLink } from "lucide-react";
import BrutalCard from "../brutal/BrutalCard";
import TagChip from "../brutal/TagChip";

const ProjectCardCompact = ({ project }) => {
  const primaryUrl =
    project.livePreview ||
    project.links?.[0]?.url ||
    project.sourceCode;

  const visibleStack = project.stack?.slice(0, 3) ?? [];
  const extraCount = (project.stack?.length ?? 0) - visibleStack.length;

  return (
    <BrutalCard interactive className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-left text-sm font-extrabold leading-snug text-black">
          {project.name}
        </h3>
        {primaryUrl && (
          <a
            href={primaryUrl}
            aria-label={`Open ${project.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-brutal-yellow shadow-[2px_2px_0_#000] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      {visibleStack.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
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
    stack: PropTypes.arrayOf(PropTypes.string),
    sourceCode: PropTypes.string,
    livePreview: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default ProjectCardCompact;
