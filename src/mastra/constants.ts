export const VECTOR_STORE_NAME = "libSqlVector";
export const PORTFOLIO_INDEX = "portfolio_knowledge";

/** Chat model — Groq free tier works when OpenAI quota is exhausted. */
export const CHAT_MODEL =
  process.env.MODEL || "groq/openai/gpt-oss-120b";

/**
 * Embedding model for RAG. Groq has no embeddings API — use Google (free tier)
 * or OpenAI when available. Structured tools work without embeddings.
 */
export const EMBEDDING_MODEL =
  process.env.EMBEDDING_MODEL || "google/gemini-embedding-001";

const EMBEDDING_DIMENSIONS: Record<string, number> = {
  "openai/text-embedding-3-small": 1536,
  "openai/text-embedding-3-large": 3072,
  // gemini-embedding-001 defaults to 3072 unless outputDimensionality is set
  "google/gemini-embedding-001": 3072,
  "google/gemini-embedding-2": 768,
};

export const EMBEDDING_DIMENSION =
  Number(process.env.EMBEDDING_DIMENSION) ||
  EMBEDDING_DIMENSIONS[EMBEDDING_MODEL] ||
  768;
