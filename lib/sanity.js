// lib/sanity.js
const API_VERSION = "2023-10-01";
const PROJECT_ID = process.env.SANITY_PROJECT_ID;
const DATASET = process.env.SANITY_DATASET;

const BASE = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}`;

export async function sanityFetch(query, params = {}) {
  if (!PROJECT_ID || !DATASET) {
    throw new Error("Missing SANITY_PROJECT_ID or SANITY_DATASET");
  }

  const usp = new URLSearchParams({ query });
  if (params && Object.keys(params).length) {
    usp.set("params", JSON.stringify(params));
  }

  const res = await fetch(`${BASE}?${usp.toString()}`, {
    headers: { "Content-Type": "application/json" },
    // fără cache/revalidate aici – o facem în pagini via export const revalidate
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sanity fetch failed: ${res.status} ${text}`);
  }

  const { result } = await res.json();
  return result;
}
