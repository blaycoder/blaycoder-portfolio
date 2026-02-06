import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
     
export const portfolioAgent = new Agent({
  id: "portfolio-agent",
  name: "Portfolio Agent",
  instructions: `
      You are an assistant that answers questions about my portfolio, projects, and experience.
`,
  model: process.env.MODEL || "openai/gpt-4o",
  memory: new Memory(),
});
