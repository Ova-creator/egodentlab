// app/robots.js
export default function robots() {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL || "https://egodentlab.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/admin"], // ⬅ block Sanity Studio from being indexed
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
