import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import {
  experience,
  projects,
  skills,
} from "../../data/portfolio-knowledge";

const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "for", "to", "in", "on", "with", "of", "at",
  "by", "from", "as", "is", "are", "was", "were", "be", "been", "will", "you",
  "we", "our", "your", "this", "that", "have", "has", "had", "not", "but",
]);

function extractKeywords(text: string): string[] {
  return [
    ...new Set(
      text
        .toLowerCase()
        .replace(/[^a-z0-9+#.\s-]/g, " ")
        .split(/\s+/)
        .filter((word) => word.length > 2 && !STOP_WORDS.has(word)),
    ),
  ];
}

function scoreItem(keywords: string[], haystack: string[]): number {
  const normalized = haystack.map((s) => s.toLowerCase());
  return keywords.reduce((score, keyword) => {
    const hit = normalized.some(
      (item) => item.includes(keyword) || keyword.includes(item),
    );
    return score + (hit ? 1 : 0);
  }, 0);
}

export const matchJobDescription = createTool({
  id: "matchJobDescription",
  description:
    "Analyze a pasted job description and rank Ayomide's best-matching projects and experience with a tailored pitch.",
  inputSchema: z.object({
    jobDescription: z.string().describe("Full job description text"),
  }),
  outputSchema: z.object({
    keywords: z.array(z.string()),
    topProjects: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        score: z.number(),
        stack: z.array(z.string()),
        reason: z.string(),
      }),
    ),
    relevantExperience: z
      .object({
        role: z.string(),
        company: z.string(),
        period: z.string(),
        highlights: z.array(z.string()),
      })
      .optional(),
    pitch: z.string(),
  }),
  execute: async ({ jobDescription }) => {
    const keywords = extractKeywords(jobDescription);

    const projectScores = projects
      .map((project) => {
        const haystack = [
          project.name,
          project.description,
          project.shortDescription ?? "",
          ...project.stack,
        ];
        const score = scoreItem(keywords, haystack);
        const matchedStack = project.stack.filter((tech) =>
          keywords.some(
            (k) =>
              tech.toLowerCase().includes(k) ||
              k.includes(tech.toLowerCase()),
          ),
        );
        return {
          id: project.id,
          name: project.name,
          score,
          stack: project.stack,
          reason:
            matchedStack.length > 0
              ? `Stack overlap: ${matchedStack.join(", ")}`
              : score > 0
                ? "Description keyword overlap"
                : "Limited direct overlap",
        };
      })
      .filter((p) => p.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    const experienceScores = experience
      .map((job) => ({
        job,
        score: scoreItem(keywords, [
          job.role,
          job.company,
          job.description,
          ...job.summary,
          ...job.tech,
        ]),
      }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score);

    const topExperience = experienceScores[0]?.job;
    const topProjects =
      projectScores.length > 0
        ? projectScores
        : projects
            .filter((p) => p.featured)
            .slice(0, 3)
            .map((p) => ({
              id: p.id,
              name: p.name,
              score: 0,
              stack: p.stack,
              reason: "Featured flagship project",
            }));

    const skillHits = skills.filter((skill) =>
      keywords.some(
        (k) =>
          skill.toLowerCase().includes(k) ||
          k.includes(skill.toLowerCase()),
      ),
    );

    const pitchParts = [
      `Ayomide is a frontend engineer with hands-on experience in ${skillHits.slice(0, 4).join(", ") || "React, TypeScript, and modern web stacks"}.`,
      topProjects.length
        ? `Strong fit through ${topProjects.map((p) => p.name).join(", ")} — ${topProjects[0]?.reason.toLowerCase()}.`
        : "Relevant project experience across SaaS, WordPress, and open-source tooling.",
      topExperience
        ? `Currently/recently ${topExperience.role} at ${topExperience.company}, aligning with the role's delivery expectations.`
        : "Available for freelance and contract work with a track record of shipping production interfaces.",
    ];

    return {
      keywords: keywords.slice(0, 15),
      topProjects,
      relevantExperience: topExperience
        ? {
            role: topExperience.role,
            company: topExperience.company,
            period: topExperience.period,
            highlights: topExperience.summary.slice(0, 2),
          }
        : undefined,
      pitch: pitchParts.join(" "),
    };
  },
});
