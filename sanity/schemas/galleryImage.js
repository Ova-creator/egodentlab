export default {
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "image", type: "image", options: { hotspot: true }, validation: R => R.required() },
    { name: "tags", type: "array", of: [{ type: "string" }], options: { layout: "tags" } },
  ],
};
