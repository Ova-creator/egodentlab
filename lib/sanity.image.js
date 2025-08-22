// lib/sanity.image.js
// Helper minimal: dacă în GROQ ți-ai proiectat deja "url": image.asset->url
export const urlFor = (img) => {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (img?.asset?.url) return img.asset.url;
  if (img?.url) return img.url;
  return "";
};
