export default {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    { name: "title", type: "string", validation: R => R.required() },
    { name: "slug", type: "slug", options: { source: "title" }, validation: R => R.required() },
    { name: "summary", type: "text" },
    { name: "before", type: "image", options: { hotspot: true } },
    { name: "after", type: "image", options: { hotspot: true } },
    { name: "body", type: "array", of: [{ type: "block" }] },
    { name: "tags", type: "array", of: [{ type: "string" }], options: { layout: "tags" } },
    { name: "date", type: "datetime" },
  ],
};
