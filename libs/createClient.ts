import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECTID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_APIVERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source).url();
};
