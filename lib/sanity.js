// lib/sanity.js
const projectId =
  process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset =
  process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersionRaw =
  process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-01"

// Sanity cere prefix 'v' în URL
const apiVersion = apiVersionRaw.startsWith("v") ? apiVersionRaw : `v${apiVersionRaw}`

function assertEnv() {
  if (!projectId || !dataset) {
    throw new Error(
      "Missing SANITY_PROJECT_ID or SANITY_DATASET. Set them în .env.local și repornește serverul."
    )
  }
}

/**
 * Server-side fetch către Sanity (GROQ via apicdn)
 * nextOpts -> de ex { revalidate: 600 } (NU seta 'cache' concomitent)
 */
export async function sanityFetch(groq, params = {}, nextOpts = { revalidate: 600 }) {
  assertEnv()
  const base = `https://${projectId}.apicdn.sanity.io/${apiVersion}/data/query/${dataset}`
  const url = new URL(base)
  url.searchParams.set("query", groq)
  if (params && Object.keys(params).length) {
    url.searchParams.set("params", JSON.stringify(params))
  }

  const res = await fetch(url.toString(), { next: nextOpts })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Sanity fetch failed: ${res.status} ${text}`)
  }
  const json = await res.json()
  return json.result
}

export const galleryQuery = `
  *[_type=="galleryImage"] | order(_createdAt desc){
    _id,
    title,
    "url": image.asset->url
  }
`
