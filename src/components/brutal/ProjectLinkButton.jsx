import PropTypes from "prop-types";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProjectLinks } from "@/lib/projectLinks";

const iconButtonClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-brutal-yellow text-black shadow-[2px_2px_0_#000] transition-[transform,box-shadow] duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-black";

function GitHubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function NpmIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 7.5v9h6v-6h3v6h3V7.5H0zm12 0v4.5h3V7.5h-3zm3 0h6v4.5h-3v1.5h-3V7.5z" />
    </svg>
  );
}

function LinkIcon({ type }) {
  if (type === "github") return <GitHubIcon />;
  if (type === "npm") return <NpmIcon />;
  return <ExternalLink size={18} strokeWidth={2.5} />;
}

const ProjectLinkButton = ({
  type,
  url,
  label,
  showLabel = false,
  className,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className={cn(
      showLabel
        ? "inline-flex min-h-11 items-center gap-2 rounded-full border-[2px] border-black bg-brutal-yellow px-4 py-2 text-sm font-bold text-black shadow-[2px_2px_0_#000] transition-[transform,box-shadow] duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none no-underline"
        : iconButtonClass,
      className,
    )}
  >
    <LinkIcon type={type} />
    {showLabel && (
      <span className="hidden md:inline">
        {type === "github" ? "GitHub" : type === "npm" ? "npm" : "Live"}
      </span>
    )}
  </a>
);

ProjectLinkButton.propTypes = {
  type: PropTypes.oneOf(["live", "github", "npm"]).isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const ProjectLinks = ({ project, showLabel = false, className }) => {
  const links = getProjectLinks(project);
  if (!links.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {links.map((link) => (
        <ProjectLinkButton key={link.url} {...link} showLabel={showLabel} />
      ))}
    </div>
  );
};

ProjectLinks.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    livePreview: PropTypes.string,
    sourceCode: PropTypes.string,
    npmPackage: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

export default ProjectLinkButton;
export { ProjectLinks, getProjectLinks };
