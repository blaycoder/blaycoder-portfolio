import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { about, closingCta, contact } from "../../data/portfolio-knowledge";

export const getAvailabilityAndContact = createTool({
  id: "getAvailabilityAndContact",
  description:
    "Get Ayomide's freelance availability, contact email, social links, and resume URL.",
  inputSchema: z.object({}),
  outputSchema: z.object({
    available: z.boolean(),
    headline: z.string(),
    subtext: z.string(),
    email: z.string(),
    resume: z.string(),
    social: z.object({
      linkedin: z.string(),
      github: z.string(),
      medium: z.string(),
      youtube: z.string(),
    }),
  }),
  execute: async () => ({
    available: closingCta.availability,
    headline: closingCta.headline,
    subtext: closingCta.subtext,
    email: contact.email,
    resume: about.resume,
    social: about.social,
  }),
});
