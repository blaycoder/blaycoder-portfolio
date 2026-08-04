import { libSqlVector } from "../index";
import { ingestPortfolioKnowledge } from "./ingest-portfolio";

const force = process.argv.includes("--force");

ingestPortfolioKnowledge(libSqlVector, { force })
  .then((result) => {
    console.info(
      `Portfolio knowledge ${result.ingested ? "ingested" : "up to date"} (${result.count} chunks)`,
    );
    process.exit(0);
  })
  .catch((error) => {
    console.error("Ingest failed:", error);
    process.exit(1);
  });
