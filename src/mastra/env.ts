/** Comma-separated browser origins allowed to call the Mastra API (Vercel portfolio URL). */
export function getCorsOrigins(): string | string[] {
  const raw = process.env.MASTRA_CORS_ORIGINS?.trim();
  if (!raw) return "*";
  return raw.split(",").map((o) => o.trim()).filter(Boolean);
}

/** LibSQL URL for agent memory / storage. Use a mounted volume path in production. */
export function getStorageUrl(defaultFile = "file:./mastra.db") {
  return process.env.LIBSQL_STORAGE_URL?.trim() || defaultFile;
}

/** LibSQL URL for vector RAG index. Use a mounted volume path in production. */
export function getVectorUrl(defaultFile = "file:./portfolio-vector.db") {
  return process.env.LIBSQL_VECTOR_URL?.trim() || defaultFile;
}

export const isProduction = process.env.NODE_ENV === "production";

/** Bind all interfaces on PaaS hosts (Railway, Render). */
export function getServerHost() {
  return process.env.MASTRA_HOST?.trim() || (isProduction ? "0.0.0.0" : "localhost");
}

export function getServerPort() {
  const port = Number(process.env.PORT);
  return Number.isFinite(port) && port > 0 ? port : 4111;
}
