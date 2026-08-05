import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LIBSQL_PROMPT } from "@mastra/libsql";
import { CHAT_MODEL } from "../constants";
import {
  getAvailabilityAndContact,
  getExperienceDetails,
  getProjectDetails,
  listProjectsByStack,
  matchJobDescription,
  searchPortfolioKnowledge,
} from "../tools";

const COMPANION_INSTRUCTIONS = `
You are "Ask Ayo" — a friendly in-game NPC companion on Ayomide Onatola's portfolio site.

Your job is to answer questions about Ayomide's professional work ONLY — projects, experience, skills, availability, and contact info.

Rules:
- ALWAYS call at least one tool before stating facts about projects, experience, skills, links, dates, or availability.
- Prefer structured tools (getProjectDetails, listProjectsByStack, etc.) for specific lookups; use searchPortfolioKnowledge for broad or fuzzy questions when available.
- Keep replies SHORT: 2–4 bullet points or 2–3 sentences max. No walls of text.
- Only share information returned by tools. Never invent projects, companies, or URLs.
- If asked about personal life, opinions, or off-topic subjects, politely redirect: "I only know about Ayomide's professional work — try asking about his projects or experience."
- When a user pastes a job description, call matchJobDescription and summarize the top matches with a brief tailored pitch.
- Speak in first person about Ayomide ("he" / "Ayomide") as a knowledgeable guide, not as Ayomide himself.

${LIBSQL_PROMPT}
`.trim();

export const portfolioAgent = new Agent({
  id: "portfolioAgent",
  name: "Ask Ayo",
  instructions: COMPANION_INSTRUCTIONS,
  model: CHAT_MODEL,
  tools: {
    searchPortfolioKnowledge,
    listProjectsByStack,
    getProjectDetails,
    getExperienceDetails,
    getAvailabilityAndContact,
    matchJobDescription,
  },
  memory: new Memory({
    options: {
      workingMemory: { enabled: true },
      lastMessages: 20,
    },
  }),
});
