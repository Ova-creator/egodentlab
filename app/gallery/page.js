import Image from "next/image";
import Container from "../../components/Container";
import { sanityFetch } from "../../lib/sanity";

export const revalidate = 3600; // lăsăm Next să facă ISR

const query = `
*[_type=="galleryImage"] | order(_createdAt desc){
  _id,
  title,
  "url": image.asset->url
}
`;

export default async function GalleryPage() {
  const images = (await sanityFetch(query)) || [];

  return (
    <Container>
      <div className="text-center mt-6">
        <p className="text-xs tracking-widest uppercase text-white/60">Gallery</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2">Case Highlights</h1>
        <p className="text-white/70 mt-2">
          A selection of outcomes—clean margins, natural texture, stable occlusion.
        </p>
      </div>

      <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {images?.map((img) => (
          <figure key={img._id} className="panel overflow-hidden">
            {img.url && (
              <Image
                src={img.url}
                alt={img.title || "gallery image"}
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
              />
            )}
            <figcaption className="p-3 text-sm text-white/80">{img.title}</figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
