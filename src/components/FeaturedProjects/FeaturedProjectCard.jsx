import PropTypes from "prop-types";
import BrutalCard from "../brutal/BrutalCard";
import TagChip from "../brutal/TagChip";
import { ProjectLinks } from "../brutal/ProjectLinkButton";

const FeaturedProjectCard = ({ project }) => (
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
      <h3 className="text-left text-2xl font-extrabold text-black md:text-3xl">
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

      <ProjectLinks project={project} showLabel className="mt-7" />
    </div>
  </BrutalCard>
);

FeaturedProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
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

export default FeaturedProjectCard;
