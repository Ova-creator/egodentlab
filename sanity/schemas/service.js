// sanity/schemas/service.js
export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96, slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 96) },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Restorative", value: "Restorative" }, // Digital Dentistry
          { title: "Implant", value: "Implant" },         // Implant Dentistry
          { title: "Appliance", value: "Appliance" },     // Additional Services
          { title: "Models", value: "Models" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary",
      title: "Short summary",
      type: "text",
      rows: 3,
      description: "1–2 lines used on list pages. Optional.",
    },

    // ---- Optional page overrides (all fields optional) ----
    {
      name: "heroIntro",
      title: "Intro (hero paragraph)",
      type: "text",
      rows: 3,
      description: "If empty, the site will use a smart default based on category.",
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Section title", type: "string" },
            {
              name: "body",
              title: "Body",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
          preview: {
            select: { title: "title" },
            prepare: ({ title }) => ({ title: title || "Untitled section" }),
          },
        },
      ],
      description: "Add content blocks to override defaults (Indications, Materials, Turnaround, etc.). Leave empty to use defaults.",
    },
    {
      name: "ctaLabel",
      title: "CTA label",
      type: "string",
      description: "Default is “Start a Case”.",
    },
    {
      name: "ctaHref",
      title: "CTA link",
      type: "url",
      description: "Default is /upload-case.",
    },

    // ---- SEO (optional) ----
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "If empty, the site uses <Title | EgoDent Lab>.",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "If empty, the site uses a category default.",
    },
    {
      name: "ogImage",
      title: "OG Image",
      type: "image",
      options: { hotspot: true },
      description: "Optional Open Graph image for this service.",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
};
