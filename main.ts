import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { cors } from "https://deno.land/x/hono/middleware.ts";
import { Hono } from "https://deno.land/x/hono/mod.ts";

import { getQuoteAsJson, getQuoteAsText } from "./getQuote_usecase.ts";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/json/:seed", (c) => {
  const seed = c.req.param("seed") || "test";

  return c.json(getQuoteAsJson(seed));
});

app.get("/:seed", (c) => {
  const seed = c.req.param("seed") || "test";
  return c.text(getQuoteAsText(seed));
});

app.get("/json", (c) => {
  return c.json(getQuoteAsJson());
});

app.get("/", (c) => {
  return c.text(getQuoteAsText());
});

serve(app.fetch);
console.log("Up > http://localhost:8000");
