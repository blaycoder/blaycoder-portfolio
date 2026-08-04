import { embedMany } from "ai";
import { ModelRouterEmbeddingModel } from "@mastra/core/llm";
import { LibSQLVector } from "@mastra/libsql";
import { buildKnowledgeChunks } from "../../data/portfolio-knowledge";
import {
  EMBEDDING_DIMENSION,
  EMBEDDING_MODEL,
  PORTFOLIO_INDEX,
} from "../constants";

export async function ingestPortfolioKnowledge(
  vectorStore: LibSQLVector,
  { force = false }: { force?: boolean } = {},
) {
  const indexes = await vectorStore.listIndexes();
  const indexExists = indexes.includes(PORTFOLIO_INDEX);
  const chunks = buildKnowledgeChunks();

  if (indexExists) {
    const stats = await vectorStore.describeIndex({ indexName: PORTFOLIO_INDEX });
    const dimensionMismatch = stats.dimension !== EMBEDDING_DIMENSION;

    if (dimensionMismatch) {
      console.warn(
        `[portfolio-rag] Index dimension ${stats.dimension} != ${EMBEDDING_DIMENSION} — recreating index for ${EMBEDDING_MODEL}`,
      );
      await vectorStore.deleteIndex({ indexName: PORTFOLIO_INDEX });
    } else if (!force && stats.count >= chunks.length) {
      return { ingested: false, count: stats.count };
    } else if (force) {
      await vectorStore.truncateIndex({ indexName: PORTFOLIO_INDEX });
    }
  }

  const indexesAfter = await vectorStore.listIndexes();
  if (!indexesAfter.includes(PORTFOLIO_INDEX)) {
    await vectorStore.createIndex({
      indexName: PORTFOLIO_INDEX,
      dimension: EMBEDDING_DIMENSION,
    });
  }

  const { embeddings } = await embedMany({
    model: new ModelRouterEmbeddingModel(EMBEDDING_MODEL),
    values: chunks.map((chunk) => chunk.text),
  });

  const indexStats = await vectorStore.describeIndex({ indexName: PORTFOLIO_INDEX });

  if (embeddings[0] && indexStats.dimension !== embeddings[0].length) {
    throw new Error(
      `[portfolio-rag] Dimension mismatch: index=${indexStats.dimension}, vectors=${embeddings[0].length}. Set EMBEDDING_DIMENSION=${embeddings[0].length} in .env`,
    );
  }

  await vectorStore.upsert({
    indexName: PORTFOLIO_INDEX,
    vectors: embeddings,
    metadata: chunks.map((chunk) => ({
      id: chunk.id,
      text: chunk.text,
      title: chunk.title,
      type: chunk.type,
      ...chunk.metadata,
    })),
    ids: chunks.map((chunk) => chunk.id),
  });

  return { ingested: true, count: chunks.length };
}
