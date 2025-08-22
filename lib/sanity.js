// lib/sanity.js
const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const apiVersionRaw = process.env.SANITY_API_VERSION || "2023-10-01";
const apiVersion = apiVersionRaw.startsWith("v")
  ? apiVersionRaw
  : `v${apiVersionRaw}`;

// helper pt query string (include params în URL)
function toQueryString(query, params = {}) {
  const url = new URL(
    `https://${projectId}.apicdn.sanity.io/${apiVersion}/data/query/${dataset}`
  );
  url.searchParams.set("query", query);
  if (Object.keys(params).length) {
    url.searchParams.set("params", JSON.stringify(params));
  }
  return url.toString();
}

/**
 * sanityFetch({ query, params, revalidate })
 * - revalidate: number -> ISR (next.revalidate)
 * - revalidate: false  -> cache static (cache: 'force-cache')
 */
export async function sanityFetch({
  query,
  params = {},
  revalidate = 3600,
  fetchOptions = {},
}) {
  if (!projectId) throw new Error("Missing SANITY_PROJECT_ID");
  const url = toQueryString(query, params);

  const caching =
    typeof revalidate === "number"
      ? { next: { revalidate } }
      : { cache: "force-cache" };

  const res = await fetch(url, {
    method: "GET",
    ...caching,
    ...fetchOptions,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sanity fetch failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  return data?.result ?? null;
}
