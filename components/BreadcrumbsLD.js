// components/BreadcrumbsLD.js
export default function BreadcrumbsLD({ trail = [] }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://egodentlab.vercel.app";
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    ...trail.map((name, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name,
      item: `${base}/${name.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  ];
  const json = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
