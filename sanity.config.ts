import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity-project/schemas";
import StudioNavbar from "./components/Studio/StudioNavbar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECTID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "default",
  title: "My Sanity Project",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
