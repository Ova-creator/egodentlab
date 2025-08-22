// lib/serviceDefaults.js
const baseCTA = { label: "Start a Case", href: "/upload-case" };

export const defaultsByCategory = {
  // Digital Dentistry
  Restorative: {
    heroIntro:
      "Zirconia, e.max, veneers and inlays/onlays—digitally produced for accurate fits and natural aesthetics.",
    sections: [
      {
        title: "Indications",
        body: [
          "Single-unit to full-contour bridges, veneers, inlays/onlays, on zirconia / lithium disilicate.",
        ],
      },
      {
        title: "Materials",
        body: [
          "Multilayer zirconia (strength 900–1200 MPa), e.max, nano-composites. Shade verification on request.",
        ],
      },
      {
        title: "Turnaround",
        body: ["Standard: 3–5 working days. Priority courier available in Greater London."],
      },
    ],
    seoDescription:
      "CAD/CAM restorative services—zirconia, e.max, veneers—precise fits, natural finish, fast turnaround.",
    cta: baseCTA,
  },

  // Implant Dentistry
  Implant: {
    heroIntro:
      "Predictable implant restorations—custom Ti abutments, screw-retained crowns/bridges, full-arch temps.",
    sections: [
      {
        title: "Planning",
        body: [
          "Digital case planning from intraoral scans. Verification jigs and try-ins available on request.",
        ],
      },
      {
        title: "Restorations",
        body: [
          "Custom titanium abutments, screw-retained monolithic or layered zirconia, PMMA provisionals.",
        ],
      },
      {
        title: "Turnaround",
        body: ["Standard: 4–7 working days depending on system and complexity."],
      },
    ],
    seoDescription:
      "Implant restorations—custom Ti abutments, screw-retained crowns & bridges, full-arch PMMA temps.",
    cta: baseCTA,
  },

  // Additional Services
  Appliance: {
    heroIntro:
      "Night guards, Essix retainers, whitening trays—clean finish, predictable comfort, quick turnaround.",
    sections: [
      {
        title: "Appliances",
        body: ["Soft/hard night guards, Essix retainers, whitening trays, bite splints."],
      },
      {
        title: "Fit & Comfort",
        body: ["Digitally adjusted thickness and relief; smooth edges and polished finish."],
      },
      {
        title: "Turnaround",
        body: ["Usually 48–72 hours. Same-week delivery possible upon request."],
      },
    ],
    seoDescription:
      "Additional services—night guards, Essix retainers, whitening trays—clean finish and swift delivery.",
    cta: baseCTA,
  },
};

export function mergeWithDefaults(service) {
  const cat = service?.category || "Restorative";
  const d = defaultsByCategory[cat] || defaultsByCategory.Restorative;

  return {
    title: service?.title || "Service",
    intro: service?.heroIntro || d.heroIntro,
    sections:
      service?.sections?.length
        ? service.sections.map((s) => ({
            title: s?.title || "",
            body: s?.body || [],
          }))
        : d.sections,
    ctaLabel: service?.ctaLabel || d.cta.label,
    ctaHref: service?.ctaHref || d.cta.href,
    seoTitle: service?.seoTitle || `${service?.title || "Service"} | EgoDent Lab`,
    seoDescription: service?.seoDescription || d.seoDescription,
  };
}
