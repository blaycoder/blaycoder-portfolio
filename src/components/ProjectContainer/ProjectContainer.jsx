import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./ProjectContainer.css";
import PropTypes from "prop-types";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>

    <p className="project__description">{project.description}</p>
    {project.credit && (
      <p className="project__credit">
        <strong>Credit:</strong> {project.credit}
      </p>
    )}

    {project.stack && project.stack.length > 0 && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    <div className="project__actions">
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label="source code"
          className="link link--icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      )}
      {project.links?.length > 0
        ? project.links.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              aria-label={`${label} live site`}
              className="link link--icon project__link-label"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon />
              <span>{label}</span>
            </a>
          ))
        : project.livePreview && (
            <a
              href={project.livePreview}
              aria-label="live preview"
              className="link link--icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon />
            </a>
          )}
    </div>
  </div>
);
ProjectContainer.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    credit: PropTypes.string,
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

export default ProjectContainer;
