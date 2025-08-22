export const siteSettingsQuery = `*[_type == "siteSettings"][0]{ title, description, ogImage{asset->{url}} }`;
export const servicesByCategoryQuery = `*[_type == "service" && lower(category) == lower($category)] | order(title asc) { _id, title, summary, "slug": slug.current }`;
