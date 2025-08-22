// lib/sanity.queries.js

// Listări pe categorii (pagini existente)
export const qRestorativeServices = `
  *[_type == "service" && (category == "Restorative" || category == "restorative")]{
    title, "slug": slug.current, summary, category
  } | order(title asc)
`;

export const qImplantServices = `
  *[_type == "service" && (category == "Implant" || category == "implant")]{
    title, "slug": slug.current, summary, category
  } | order(title asc)
`;

export const qApplianceServices = `
  *[_type == "service" && (category == "Appliance" || category == "appliance")]{
    title, "slug": slug.current, summary, category
  } | order(title asc)
`;

// Gallery
export const qGallery = `
  *[_type == "galleryImage"]{ title, image, tags } | order(_createdAt desc)
`;

// Detaliu service
export const qServiceBySlug = `
  *[_type == "service" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, category, summary,
    heroIntro,
    sections[]{title, body},
    ctaLabel, ctaHref,
    seoTitle, seoDescription, ogImage
  }
`;

export const qAllServiceSlugs = `
  *[_type == "service" && defined(slug.current)]{"slug": slug.current}
`;
export const siteSettingsQuery = `*[_type=="siteSettings"][0]{
  title, description, ogImage{asset->{url}}
}`;

export const servicesByCategoryQuery = `*[_type=="service" && category==$category]
| order(title asc){_id, title, summary}`;
