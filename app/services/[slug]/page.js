import Container from "../../../components/Container";
import RichText from "../../../components/RichText";
import { notFound } from "next/navigation";
import Image from "next/image";

import { sanityClient } from "../../../lib/sanity.client";
import { urlFor } from "../../../lib/sanity.image";
import { mergeWithDefaults } from "../../../lib/serviceDefaults";
import { qServiceBySlug, qAllServiceSlugs } from "../../../lib/sanity.queries";

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(qAllServiceSlugs);
  return (slugs || []).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const service = await sanityClient.fetch(qServiceBySlug, { slug: params.slug });
  if (!service) return { title: "Service | EgoDent Lab" };

  const merged = mergeWithDefaults(service);
  const og = service?.ogImage ? urlFor(service.ogImage)?.width(1200).height(630).fit("crop").url() : null;

  return {
    title: merged.seoTitle,
    description: merged.seoDescription,
    openGraph: {
      title: merged.seoTitle,
      description: merged.seoDescription,
      images: og ? [{ url: og, width: 1200, height: 630 }] : undefined,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }) {
  const service = await sanityClient.fetch(qServiceBySlug, { slug: params.slug });
  if (!service) notFound();

  const merged = mergeWithDefaults(service);

  return (
    <Container>
      <section className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
          <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">
            {service.category || "Service"}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">{service.title}</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">{merged.intro}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href={merged.ctaHref} className="btn-primary">{merged.ctaLabel}</a>
          </div>
        </div>

        {/* SECTIONS */}
        <div className="mt-8 space-y-6">
          {(merged.sections || []).map((sec, i) => (
            <div key={i} className="panel p-6 ring-1 ring-white/10">
              {sec.title ? <h3 className="text-xl font-semibold text-white mb-2">{sec.title}</h3> : null}
              {Array.isArray(sec.body) ? (
                <RichText value={sec.body} />
              ) : (
                <p className="text-white/80">{sec.body}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
