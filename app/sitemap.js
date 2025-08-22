export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://egodentlab.vercel.app";
  const now = new Date().toISOString();
  const paths = [
    "/",
    "/digital-dentistry",
    "/implant-dentistry",
    "/additional-services",
    "/workflow",
    "/gallery",
    "/upload-case",
    "/contact-us",
    "/lab-to-lab",
  ];

  return paths.map((p) => ({
    url: `${base}${p === "/" ? "/" : p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
