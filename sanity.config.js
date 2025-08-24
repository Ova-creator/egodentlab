// sanity/sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  "1rpgilhc";

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET ||
  "production";

export default defineConfig({
  projectId,
  dataset,
  title: "EgoDent Lab — CMS",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
});
