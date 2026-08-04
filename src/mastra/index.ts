import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore, LibSQLVector } from "@mastra/libsql";
import {
  Observability,
  DefaultExporter,
  CloudExporter,
  SensitiveDataFilter,
} from "@mastra/observability";
import { chatRoute } from "@mastra/ai-sdk";
import { portfolioAgent } from "./agents/portfolio-agent";
import { VECTOR_STORE_NAME } from "./constants";
import {
  getCorsOrigins,
  getServerHost,
  getServerPort,
  getStorageUrl,
  getVectorUrl,
} from "./env";
import { ingestPortfolioKnowledge } from "./rag/ingest-portfolio";

export const libSqlVector = new LibSQLVector({
  id: VECTOR_STORE_NAME,
  url: getVectorUrl(),
});

export const mastra = new Mastra({
  agents: { portfolioAgent },
  vectors: { [VECTOR_STORE_NAME]: libSqlVector },
  server: {
    host: getServerHost(),
    port: getServerPort(),
    cors: {
      origin: getCorsOrigins(),
      allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowHeaders: [
        "Content-Type",
        "Authorization",
        "x-mastra-client-type",
        "x-mastra-dev-playground",
      ],
    },
    apiRoutes: [
      chatRoute({
        path: "/chat/:agentId",
      }),
    ],
  },
  storage: new LibSQLStore({
    id: "mastra-storage",
    url: getStorageUrl(),
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
  observability: new Observability({
    configs: {
      default: {
        serviceName: "mastra",
        exporters: [new DefaultExporter(), new CloudExporter()],
        spanOutputProcessors: [new SensitiveDataFilter()],
      },
    },
  }),
});

void ingestPortfolioKnowledge(libSqlVector)
  .then((result) => {
    console.info(
      `[portfolio-rag] ${result.ingested ? "Ingested" : "Skipped"} — ${result.count} chunks`,
    );
  })
  .catch((error) => {
    console.error("[portfolio-rag] Ingest failed:", error);
  });
