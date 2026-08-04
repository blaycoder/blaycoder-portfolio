import { ModelRouterEmbeddingModel } from "@mastra/core/llm";
import { createVectorQueryTool } from "@mastra/rag";
import {
  EMBEDDING_MODEL,
  PORTFOLIO_INDEX,
  VECTOR_STORE_NAME,
} from "../constants";

export const searchPortfolioKnowledge = createVectorQueryTool({
  id: "searchPortfolioKnowledge",
  vectorStoreName: VECTOR_STORE_NAME,
  indexName: PORTFOLIO_INDEX,
  model: new ModelRouterEmbeddingModel(EMBEDDING_MODEL),
  description:
    "Semantic search over Ayomide's portfolio knowledge base for fuzzy questions about projects, experience, skills, and FAQ.",
  enableFilter: true,
});
