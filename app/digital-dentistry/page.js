export const metadata = {
  title: "Digital Dentistry",
  description:
    "Digital workflows for restorative dentistry: veneers, zirconia/e.max crowns & bridges, PMMA provisionals, wax-ups, and printed models & trays. Design-only, design+production, or print-only.",
  alternates: { canonical: "/digital-dentistry" },
  openGraph: {
    title: "Digital Dentistry",
    description:
      "Digital workflows for restorative dentistry: veneers, zirconia/e.max crowns & bridges, PMMA provisionals, wax-ups, and printed models & trays. Design-only, design+production, or print-only.",
    url: "/digital-dentistry",
  },
};

export default function Page() {
  // JSON-LD
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Dentistry (Restorative)",
    provider: { "@type": "LocalBusiness", name: "EgoDent Lab" },
    areaServed: "London, UK",
    url: "https://egodentlab.co.uk/digital-dentistry",
    description:
      "CAD/CAM planning and production for restorative cases: veneers, zirconia/e.max crowns & bridges, PMMA provisionals, wax-ups, and 3D printed models & trays.",
    serviceType: "Dental Laboratory Services",
  };

  // doar restorative + models/trays (fără implant, fără appliances)
  const offerCatalogLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Restorative Lab Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Veneers (lithium disilicate)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zirconia crowns & bridges (monolithic / multilayer)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Layered zirconia (cut-back porcelain)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lithium disilicate (e.max) — crowns, inlays/onlays" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PMMA provisionals (single / multi-unit)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital wax-ups & mock-ups" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D-printed models & custom trays" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Try-in shells (on request)" } },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What inputs do you accept?", acceptedAnswer: { "@type": "Answer", text: "IOS: STL/PLY; optional CBCT (DICOM) if planning-related; photos JPG/PNG; notes (shade, due date, instructions)." } },
      { "@type": "Question", name: "Design-only or print-only?", acceptedAnswer: { "@type": "Answer", text: "Yes. We can deliver validated STL/OBJ for your production, or print from your ready-to-print files." } },
      { "@type": "Question", name: "Lab-to-Lab collaboration?", acceptedAnswer: { "@type": "Answer", text: "Yes. White-label on request, NDA available. See our Lab-to-Lab page." } },
    ],
  };

  // UI data (fără implant / fără appliances)
  const restorativeBlocks = [
    {
      title: "Aesthetic & Restorative",
      items: [
        "Veneers (lithium disilicate)",
        "Zirconia crowns & bridges — monolithic / multilayer",
        "Layered zirconia (cut-back porcelain)",
        "Lithium disilicate (e.max) — crowns, inlays/onlays",
        "PMMA provisionals — single / multi-unit",
        "Digital wax-ups / mock-ups",
      ],
    },
    {
      title: "Models & Trays",
      items: [
        "3D-printed study & working models",
        "Custom impression trays",
        "Try-in shells (on request)",
      ],
    },
  ];

  const capabilities = [
    { title: "Design-only (CAD)", text: "Validated STL/OBJ for in-house milling/printing — veneers, crowns/bridges, provisionals, wax-ups, trays, models." },
    { title: "Design + Production", text: "End-to-end: planning, CAD, manufacturing (print/mill), finishing & QC — predictable fit and contacts." },
    { title: "Print-only (Ready-to-print)", text: "Send your final STL; we handle orientation, supports, print & finishing for accurate fit." },
    { title: "Planning & Review", text: "We align indications, materials, shade, contacts/occlusion and delivery dates before we start." },
  ];

  const inputs = [
    "IOS scans — STL / PLY",
    "Optional CBCT — DICOM (dacă e relevant pentru planificare)",
    "Bite record / bite scan (opțional)",
    "Photos — JPG/PNG",
    "Notes — shade, due date, special instructions",
  ];

  const deliverables = [
    "Veneers, crowns/bridges, provisionals",
    "Validated STL/OBJ (design-only)",
    "3D-printed models / trays / try-ins",
    "Documentation: previews & QC notes",
  ];

  return (
    <section className="max-w-5xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">Service</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Digital Dentistry</h1>
        <p className="mt-5 text-white/85 text-lg md:text-xl">
          Restorative-focused digital workflows — veneers, zirconia/e.max crowns & bridges, PMMA provisionals, wax-ups, plus printed models & trays.
          Choose design-only, design+production, or print-only.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/upload-case" className="px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">Start a Case</a>
          <a href="/lab-to-lab" className="px-6 py-3.5 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">Lab-to-Lab</a>
        </div>
      </div>

      {/* RESTORATIVE CATALOG (no implant, no appliances) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {restorativeBlocks.map((block) => (
          <div key={block.title} className="panel p-8 md:p-10 ring-1 ring-white/15">
            <h2 className="text-2xl md:text-3xl font-semibold">{block.title}</h2>
            <ul className="mt-4 space-y-2 text-white/85 list-disc list-inside">
              {block.items.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* CAPABILITIES */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((c) => (
          <div key={c.title} className="card p-6">
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-white/80">{c.text}</p>
          </div>
        ))}
      </div>

      {/* INPUTS / DELIVERABLES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="panel p-8 md:p-10 ring-1 ring-white/15">
          <h2 className="text-2xl md:text-3xl font-semibold">Inputs we accept</h2>
          <ul className="mt-4 space-y-2 text-white/85 list-disc list-inside">
            {inputs.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <div className="mt-5 text-sm text-white/70">
            Preferred in the UK: <b>WeTransfer</b>. Also 3Shape, Medit, iTero, or Email.
          </div>
        </div>

        <div className="panel p-8 md:p-10 ring-1 ring-white/15">
          <h2 className="text-2xl md:text-3xl font-semibold">What we deliver</h2>
          <ul className="mt-4 space-y-2 text-white/85 list-disc list-inside">
            {deliverables.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <div className="mt-5">
            <a href="/upload-case" className="underline">Submission checklist &amp; how to send</a>
          </div>
        </div>
      </div>

      {/* ROUTE USERS TO DEDICATED PAGES (avoid duplication) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-1">Need implant work?</h3>
          <p className="text-white/80">For restorative-driven planning, components, and guided workflows, see Implant Dentistry.</p>
          <a href="/implant-dentistry" className="mt-4 inline-block px-5 py-3 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">
            Go to Implant Dentistry
          </a>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-1">Looking for appliances?</h3>
          <p className="text-white/80">Splints, Essix retainers, sport guards and more live under Additional Services.</p>
          <a href="/additional-services" className="mt-4 inline-block px-5 py-3 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">
            Go to Additional Services
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-3">
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">What inputs do you accept?</summary>
            <p className="mt-2 text-white/80 text-sm">IOS: STL/PLY; optional DICOM (planning); photos JPG/PNG; include shade & due date.</p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">Design-only or print-only?</summary>
            <p className="mt-2 text-white/80 text-sm">Yes — validated files for your production, or we print from your ready-to-print STL.</p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">Lab-to-Lab collaboration?</summary>
            <p className="mt-2 text-white/80 text-sm">Yes — white-label on request, NDA available. See our Lab-to-Lab page.</p>
          </details>
        </div>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </section>
  );
}
