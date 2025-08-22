import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";

export default defineConfig({
  name: "egodentlab-studio",
  title: "EgoDent Lab – CMS",
  projectId,
  dataset,
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
});
