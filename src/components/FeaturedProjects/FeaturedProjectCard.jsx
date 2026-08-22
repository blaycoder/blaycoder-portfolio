import PropTypes from "prop-types";
import BrutalCard from "../brutal/BrutalCard";
import BrutalButton from "../brutal/BrutalButton";
import TagChip from "../brutal/TagChip";
import { ProjectLinks } from "../brutal/ProjectLinkButton";

const isProfessionalCredit = (credit) => credit?.startsWith("Professional Work");

const FeaturedProjectCard = ({ project, index = 0 }) => {
  const primaryHref = project.livePreview || project.sourceCode;
  const ctaLabel = project.caseStudy ? "View Case Study" : "View Project";

  return (
    <BrutalCard interactive className="overflow-hidden p-0">
      {project.image && (
        <div className="aspect-[16/9] w-full overflow-hidden border-b-[3px] border-black">
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-extrabold text-black/40 md:text-base">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.credit && (
            <span
              className={
                isProfessionalCredit(project.credit)
                  ? "inline-flex items-center rounded-full border-[2px] border-black bg-brutal-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
                  : "inline-flex items-center rounded-full border-[2px] border-black/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black/60"
              }
            >
              {project.credit}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-left text-2xl font-extrabold text-black md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 text-left text-sm leading-relaxed text-black/85 md:text-base md:leading-relaxed">
          {project.shortDescription || project.description}
        </p>

        {project.stack?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item, i) => (
              <TagChip key={item} index={i}>
                {item}
              </TagChip>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.caseStudy ? (
            <BrutalButton to={project.caseStudy} variant="primary">
              {ctaLabel}
            </BrutalButton>
          ) : (
            primaryHref && (
              <BrutalButton
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                {ctaLabel}
              </BrutalButton>
            )
          )}
          <ProjectLinks project={project} showLabel />
        </div>
      </div>
    </BrutalCard>
  );
};

FeaturedProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    shortDescription: PropTypes.string,
    description: PropTypes.string,
    credit: PropTypes.string,
    caseStudy: PropTypes.string,
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
  index: PropTypes.number,
};

export default FeaturedProjectCard;
