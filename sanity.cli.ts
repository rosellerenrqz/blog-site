import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECTID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
