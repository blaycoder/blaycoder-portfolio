import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { findExperience } from "../../data/portfolio-knowledge";

export const getExperienceDetails = createTool({
  id: "getExperienceDetails",
  description:
    "Get work experience details by company name, role, or skill keyword.",
  inputSchema: z.object({
    query: z.string().describe("Company, role, or skill keyword"),
  }),
  outputSchema: z.object({
    roles: z.array(
      z.object({
        id: z.string(),
        role: z.string(),
        company: z.string(),
        period: z.string(),
        location: z.string(),
        description: z.string(),
        summary: z.array(z.string()),
        tech: z.array(z.string()),
      }),
    ),
  }),
  execute: async ({ query }) => {
    const matches = findExperience(query);
    return {
      roles: matches.map((job) => ({
        id: job.id,
        role: job.role,
        company: job.company,
        period: job.period,
        location: job.location,
        description: job.description,
        summary: job.summary,
        tech: job.tech,
      })),
    };
  },
});
