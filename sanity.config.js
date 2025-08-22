// sanity.config.js (în rădăcină)
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

// Studio se încarcă în browser → citim variabile publice
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET ||
  "production";

export default defineConfig({
  name: "egodentlab-studio",
  title: "EgoDent Lab – CMS",
  projectId,
  dataset,
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
});
