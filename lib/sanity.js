// lib/sanity.js
const PROJECT_ID = process.env.SANITY_PROJECT_ID;
const DATASET = process.env.SANITY_DATASET || "production";
const API_V_RAW = process.env.SANITY_API_VERSION || "2023-10-01";
const API_VERSION = API_V_RAW.startsWith("v") ? API_V_RAW : `v${API_V_RAW}`;

const BASE = () =>
  `https://${PROJECT_ID}.apicdn.sanity.io/${API_VERSION}/data/query/${DATASET}`;

/**
 * sanityFetch(query, params?)
 * - dacă lipsesc SANITY_PROJECT_ID/DATASET la build (Vercel), NU aruncă — returnează null
 * - paginile pot face fallback: `(await sanityFetch(...)) || []`
 */
export async function sanityFetch(query, params = {}) {
  // Fail-safe: lipsesc ENV? întoarce null, nu bloca build-ul
  if (!PROJECT_ID || !DATASET) return null;

  const url = new URL(BASE());
  url.searchParams.set("query", query);
  if (params && Object.keys(params).length) {
    url.searchParams.set("params", JSON.stringify(params));
  }

  const res = await fetch(url.toString(), {
    headers: { "Content-Type": "application/json" },
    // caching-ul îl controlăm în pagini cu `export const revalidate`
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sanity fetch failed: ${res.status} ${text}`);
  }

  const { result } = await res.json();
  return result ?? null;
}
