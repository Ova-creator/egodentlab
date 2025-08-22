import { notFound } from "next/navigation";
import Container from "../../../components/Container";
import { sanityFetch } from "../../../lib/sanity";

export const revalidate = 3600;

const oneService = `
*[_type=="service" && slug.current == $slug][0]{
  title, summary, body
}
`;

const allSlugs = `
*[_type=="service" && defined(slug.current)]{
  "slug": slug.current
}
`;

export async function generateStaticParams() {
  const rows = await sanityFetch(allSlugs);
  return (rows || []).map((r) => ({ slug: r.slug }));
}

export default async function ServicePage({ params }) {
  const service = await sanityFetch(oneService, { slug: params.slug });

  if (!service) return notFound();

  return (
    <Container>
      <h1 className="text-3xl md:text-4xl font-extrabold mt-6">{service.title}</h1>
      {service.summary && <p className="mt-3 text-white/70">{service.summary}</p>}
      {/* Dacă vrei rich text: îl adăugăm ulterior */}
    </Container>
  );
}
