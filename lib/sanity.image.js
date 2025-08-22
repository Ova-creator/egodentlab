import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity.client";

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source) {
  try {
    return builder.image(source);
  } catch {
    return null;
  }
}
