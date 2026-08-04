/** @typedef {'live' | 'github' | 'npm'} ProjectLinkType */

/** @typedef {{ type: ProjectLinkType, url: string, label: string }} NormalizedProjectLink */

/**
 * @param {string} url
 * @returns {ProjectLinkType}
 */
export function inferLinkType(url) {
  try {
    const { hostname } = new URL(url);
    if (hostname.includes("npmjs.com")) {
      return "npm";
    }
    if (hostname.includes("github.io")) {
      return "live";
    }
    if (hostname.includes("github.com")) {
      return "github";
    }
  } catch {
    // fall through to live
  }
  return "live";
}

/**
 * @param {import('../data/portfolio-knowledge').Project} project
 * @returns {NormalizedProjectLink[]}
 */
export function getProjectLinks(project) {
  /** @type {NormalizedProjectLink[]} */
  const links = [];

  if (project.livePreview) {
    links.push({
      type: "live",
      url: project.livePreview,
      label: `Visit ${project.name} live site`,
    });
  }

  if (project.sourceCode) {
    links.push({
      type: inferLinkType(project.sourceCode) === "github" ? "github" : "live",
      url: project.sourceCode,
      label: `${project.name} source code on GitHub`,
    });
  }

  if (project.npmPackage) {
    links.push({
      type: "npm",
      url: project.npmPackage,
      label: `${project.name} on npm`,
    });
  }

  if (project.links?.length) {
    for (const { label, url } of project.links) {
      const type = inferLinkType(url);
      links.push({
        type: type === "github" || type === "npm" ? type : "live",
        url,
        label: `${project.name} — ${label}`,
      });
    }
  }

  const seen = new Set();
  return links.filter((link) => {
    if (seen.has(link.url)) return false;
    seen.add(link.url);
    return true;
  });
}
