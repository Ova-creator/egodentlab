export default async function sitemap() {
  const base = "https://egodentlab.co.uk";
  const routes = [
    "",
    "/digital-dentistry",
    "/implant-dentistry",
    "/workflow",
    "/additional-services",
    "/upload-case",
    "/contact-us",
    "/gallery",
    "/lab-to-lab", // 👈 new
  ];
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
