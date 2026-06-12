import { Hono } from "hono";

const app = new Hono();

// Health check
app.get("/app-api/health", (c) => c.json({ ok: true }));

export default { fetch: app.fetch };
