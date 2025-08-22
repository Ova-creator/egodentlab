import Image from "next/image";
import Container from "../../components/Container";
import { sanityClient } from "../../lib/sanity.client";
import { qGallery } from "../../lib/sanity.queries";
import { urlFor } from "../../lib/sanity.image";

export const revalidate = 300;

export default async function Page() {
  const images = await sanityClient.fetch(qGallery);

  return (
    <Container>
      <section className="max-w-6xl mx-auto">
        <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
          <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">
            Gallery
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Case Highlights
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            A selection of outcomes—clean margins, natural texture, stable occlusion.
          </p>
        </div>

        {!images?.length && (
          <div className="panel p-6 mt-8 text-white/70">
            No images yet. Add “Gallery Image” in Studio.
          </div>
        )}

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(images || []).map((item, idx) => {
            const src = item?.image ? urlFor(item.image)?.width(1200).height(900).fit("crop").quality(85).url() : null;
            return (
              <figure key={idx} className="panel p-2 overflow-hidden">
                {src ? (
                  <Image
                    src={src}
                    alt={item.title || "Gallery image"}
                    width={1200}
                    height={900}
                    className="rounded-xl object-cover w-full h-auto"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-48 rounded-xl bg-white/5" />
                )}
                {item.title && (
                  <figcaption className="px-3 py-3 text-sm text-white/80">
                    {item.title}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
