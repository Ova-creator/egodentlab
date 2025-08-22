export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "title", type: "string", validation: R => R.required() },
    { name: "slug", type: "slug", options: { source: "title" }, validation: R => R.required() },
    { name: "summary", type: "text" },
    { name: "category", type: "string", options: { list: ["Restorative","Implant","Appliance","Models"] } },
    { name: "content", type: "array", of: [{ type: "block" }] },
  ],
};
