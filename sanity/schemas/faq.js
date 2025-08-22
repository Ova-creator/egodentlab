export default {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    { name: "question", type: "string", validation: R => R.required() },
    { name: "answer", type: "text", validation: R => R.required() },
    { name: "section", type: "string", options: { list: ["Digital","Implant","Workflow","Additional"] } },
  ],
};
