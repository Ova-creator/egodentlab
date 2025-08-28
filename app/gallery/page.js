// app/gallery/page.js
import { sanityFetch, galleryQuery } from "../../lib/sanity";
import GalleryGrid from "../../components/GalleryGrid";

export const revalidate = 600;

export const metadata = {
  title: "Gallery — Case Highlights | EgoDent Lab",
  description:
    "A selection of outcomes—clean margins, natural texture, stable occlusion.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — EgoDent Lab",
    description:
      "A selection of outcomes—clean margins, natural texture, stable occlusion.",
    url: "/gallery",
    siteName: "EgoDent Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery — EgoDent Lab",
    description:
      "A selection of outcomes—clean margins, natural texture, stable occlusion.",
  },
};

export default async function Page() {
  const items = await sanityFetch(galleryQuery);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "EgoDent Lab — Case Highlights",
    hasPart: (items || []).slice(0, 12).map((it) => ({
      "@type": "ImageObject",
      contentUrl: it.url,
      name: it.title || "Case photo",
    })),
  };

  return (
    <section className="max-w-6xl mx-auto">
      <div className="panel p-8 md:p-10 text-center ring-1 ring-white/15">
        <p className="tracking-[0.2em] text-xs text-white/70">GALLERY</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
          Case Highlights
        </h1>
        <p className="mt-5 text-white/85">
          A selection of outcomes—clean margins, natural texture, stable
          occlusion.
        </p>
      </div>

      {/* ✅ grila optimizată + lightbox */}
      <GalleryGrid items={items || []} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
