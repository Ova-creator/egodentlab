// app/services/[slug]/page.js
import { notFound } from "next/navigation";
import Container from "../../../components/Container";
import { sanityFetch } from "../../../lib/sanity";

export const dynamic = "force-dynamic"; // redare la cerere, fără SSG
export const revalidate = 0;            // complet dinamic

const oneService = `
*[_type=="service" && slug.current == $slug][0]{ title, summary, body }
`;

export default async function ServicePage({ params }) {
  // Dacă lipsesc ENV în Vercel, oprim politicos:
  if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_DATASET) {
    return notFound();
  }

  const service = await sanityFetch(oneService, { slug: params.slug });
  if (!service) return notFound();

  return (
    <Container>
      <section className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">{service.title}</h1>
        {service.summary && (
          <p className="mt-3 text-white/70">{service.summary}</p>
        )}
        {/* TODO: body (rich text) — când vrei, îl randăm cu Portable Text */}
      </section>
    </Container>
  );
}
