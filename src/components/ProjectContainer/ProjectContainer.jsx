import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ProjectContainer.css";
import PropTypes from 'prop-types';

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>

    <p className="project__description">{project.description}</p>
    {project.credit && (
      <p className="project__description">
        <strong>Credit:</strong> {project.credit}
      </p>
    )}

    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
        target="_blank"
        rel="noreferrer"
      >
        <LaunchIcon />
      </a>
    )}
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
  }).isRequired,
};

export default ProjectContainer;
