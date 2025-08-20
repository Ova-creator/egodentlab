export default function robots() {
  const base = "https://egodentlab.co.uk"; // change if your final domain differs
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
