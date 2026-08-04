import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { findProjectsByStack } from "../../data/portfolio-knowledge";

export const listProjectsByStack = createTool({
  id: "listProjectsByStack",
  description:
    "List Ayomide's portfolio projects filtered by technology stack (e.g. React, WordPress, TypeScript).",
  inputSchema: z.object({
    stack: z.string().describe("Technology or stack keyword to filter by"),
  }),
  outputSchema: z.object({
    projects: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        featured: z.boolean(),
        stack: z.array(z.string()),
        shortDescription: z.string().optional(),
        livePreview: z.string().optional(),
        sourceCode: z.string().optional(),
      }),
    ),
  }),
  execute: async ({ stack }) => {
    const matches = findProjectsByStack(stack);
    return {
      projects: matches.map((p) => ({
        id: p.id,
        name: p.name,
        featured: p.featured,
        stack: p.stack,
        shortDescription: p.shortDescription,
        livePreview: p.livePreview,
        sourceCode: p.sourceCode,
      })),
    };
  },
});
