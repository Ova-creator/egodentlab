export const metadata = {
  title: "Lab-to-Lab Collaboration",
  description:
    "White-label CAD/CAM, design-only, print-only, or full production. NDA on request. Files via WeTransfer, 3Shape, Medit, iTero, or email.",
  alternates: { canonical: "/lab-to-lab" },
  openGraph: {
    title: "Lab-to-Lab Collaboration",
    description:
      "White-label CAD/CAM, design-only, print-only, or full production. NDA on request. Files via WeTransfer, 3Shape, Medit, iTero, or email.",
    url: "/lab-to-lab",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Lab-to-Lab Collaboration",
    provider: { "@type": "LocalBusiness", name: "EgoDent Lab" },
    areaServed: "UK",
    url: "https://egodentlab.co.uk/lab-to-lab",
    description:
      "White-label collaboration for labs: design-only, print-only, or full production with NDA available.",
    serviceType: "Dental Laboratory Services",
  };

  const points = [
    "White-label production (unbranded shipping or your inserts).",
    "NDA available; strict data privacy.",
    "Follow your file naming, margin lines, sprues, and QC checklist.",
    "Inputs: IOS (STL/PLY), CBCT (DICOM), ready-to-print STL, photos.",
    "Channels: WeTransfer (preferred UK), 3Shape, Medit, iTero, Email.",
    "Outputs: manufactured parts or validated STL/OBJ ready for your production.",
  ];

  return (
    <section className="max-w-5xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">For Dental Labs</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Lab-to-Lab Collaboration</h1>
        <p className="mt-5 text-white/85 text-lg md:text-xl">
          Use us as your digital back-office: design-only, print-only, or full production — under your brand.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/upload-case" className="px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">Start a Case</a>
          <a href="/contact-us" className="px-6 py-3.5 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">Contact Us</a>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold">What we do for labs</h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {points.map((x) => (
            <li key={x} className="card p-4 text-white/85">{x}</li>
          ))}
        </ul>
      </div>

      {/* PROCESS */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Process</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-5 text-left">
          {[
            ["Intake", "Submit scans or ready-to-print STL with notes and deadline."],
            ["Plan", "We align indications, materials, margins/sprues, contacts/occlusion."],
            ["Produce / Files", "Manufacture and finish, or deliver validated STL/OBJ."],
            ["Dispatch", "White-label shipping or digital hand-off with documentation."],
          ].map(([title, body], i) => (
            <li key={title} className="card p-5">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">{i+1}</div>
              <div className="font-semibold mb-1">{title}</div>
              <p className="text-white/80 text-sm">{body}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* FAQ */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-3">
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">Can you ship unbranded?</summary>
            <p className="mt-2 text-white/80 text-sm">Yes — white-label dispatch or include your leaflets upon request.</p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">Do you sign NDAs?</summary>
            <p className="mt-2 text-white/80 text-sm">Yes. We can sign your standard NDA or provide ours.</p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">How do we start?</summary>
            <p className="mt-2 text-white/80 text-sm">
              Send a first case via <b>WeTransfer</b> to <b>lab@egodent.co.uk</b> with your requirements. We’ll confirm scope and timeline.
            </p>
          </details>
        </div>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
