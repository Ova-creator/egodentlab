export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "labName", type: "string", initialValue: "EgoDent Lab" },
    { name: "tagline", type: "string", initialValue: "Digital dentistry" },
    { name: "email", type: "string", initialValue: "lab@egodent.co.uk" },
    { name: "phone", type: "string", initialValue: "+44 203 301 6323" },
    { name: "address", type: "text", initialValue: "Stanmore, London • HA7 1ER" },
  ],
};
