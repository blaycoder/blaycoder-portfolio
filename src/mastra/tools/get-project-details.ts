import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { findProject, projects } from "../../data/portfolio-knowledge";

export const getProjectDetails = createTool({
  id: "getProjectDetails",
  description:
    "Get structured details for a specific portfolio project by name or id slug.",
  inputSchema: z.object({
    query: z.string().describe("Project name or id slug (e.g. spacehq, Carefinder)"),
  }),
  outputSchema: z.object({
    found: z.boolean(),
    project: z
      .object({
        id: z.string(),
        name: z.string(),
        featured: z.boolean(),
        description: z.string(),
        shortDescription: z.string().optional(),
        stack: z.array(z.string()),
        sourceCode: z.string().optional(),
        livePreview: z.string().optional(),
        links: z
          .array(z.object({ label: z.string(), url: z.string() }))
          .optional(),
        credit: z.string().optional(),
      })
      .optional(),
    suggestions: z.array(z.string()).optional(),
  }),
  execute: async ({ query }) => {
    const match = findProject(query);
    if (!match) {
      return {
        found: false,
        suggestions: projects.slice(0, 5).map((p) => p.name),
      };
    }
    return {
      found: true,
      project: {
        id: match.id,
        name: match.name,
        featured: match.featured,
        description: match.description,
        shortDescription: match.shortDescription,
        stack: match.stack,
        sourceCode: match.sourceCode,
        livePreview: match.livePreview,
        links: match.links,
        credit: match.credit,
      },
    };
  },
});
