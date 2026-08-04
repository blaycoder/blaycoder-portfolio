import PropTypes from "prop-types";
import BrutalCard from "../brutal/BrutalCard";
import BrutalButton from "../brutal/BrutalButton";
import TagChip from "../brutal/TagChip";

const FeaturedProjectCard = ({ project }) => {
  const demoUrl =
    project.livePreview || project.links?.[0]?.url || null;

  return (
    <BrutalCard interactive className="overflow-hidden p-0">
      <div className="aspect-[16/10] w-full overflow-hidden border-b-[3px] border-black">
        <img
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5 md:p-6">
        <h3 className="text-left text-2xl font-extrabold text-black">
          {project.name}
        </h3>
        <p className="mt-3 text-left text-sm leading-relaxed text-black/85 md:text-base">
          {project.shortDescription || project.description}
        </p>

        {project.stack?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item, i) => (
              <TagChip key={item} index={i}>
                {item}
              </TagChip>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.sourceCode && (
            <BrutalButton
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
            >
              Code
            </BrutalButton>
          )}
          {demoUrl && (
            <BrutalButton
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
            >
              Demo
            </BrutalButton>
          )}
          {project.links?.length > 1 &&
            project.links.slice(1).map(({ label, url }) => (
              <BrutalButton
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                {label}
              </BrutalButton>
            ))}
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

export default FeaturedProjectCard;
