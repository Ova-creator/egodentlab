import Link from "next/link";

export const metadata = {
  title: "Digital Dentistry — CAD/CAM Restorations",
  description:
    "Zirconia, e.max, veneers, inlays/onlays — precise fits and clean aesthetics. Design-only or full CAD/CAM production.",
  alternates: { canonical: "/digital-dentistry" },
  openGraph: {
    title: "Digital Dentistry — CAD/CAM Restorations",
    description:
      "Zirconia, e.max, veneers, inlays/onlays — precise fits and clean aesthetics. Design-only or full CAD/CAM production.",
    url: "/digital-dentistry",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-12 text-center ring-1 ring-white/15">
        <p className="uppercase tracking-[.25em] text-white/70 text-xs mb-2">
          Digital Dentistry
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          CAD/CAM Restorations
        </h1>
        <p className="mt-4 text-white/85">
          Zirconia, e.max, veneers, inlays/onlays — precise fits and clean aesthetics.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/upload-case" className="px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">
            Start a Case
          </Link>
          <Link href="/contact-us" className="px-6 py-3.5 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">
            Contact Us
          </Link>
        </div>
      </div>

      {/* GRID SECTIONS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aesthetic & Restorative */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Aesthetic & Restorative</h3>
          <ul className="list-disc list-inside text-sm text-white/85 space-y-1">
            <li>Zirconia (monolithic or layered), lithium disilicate</li>
            <li>Veneers, inlays/onlays, partial coverage</li>
            <li>Clean margins, stable occlusion, natural finish</li>
            <li>Diagnostic wax-ups &amp; smile previews (digital)</li>
          </ul>
        </div>

        {/* Models & Trays */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Models &amp; Trays</h3>
          <ul className="list-disc list-inside text-sm text-white/85 space-y-1">
            <li>Printed master models &amp; dies</li>
            <li>Verification models, articulator mounting</li>
            <li>Clear trays (Essix) on request</li>
          </ul>
        </div>

        {/* Design-only (CAD) */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Design-only (CAD)</h3>
          <p className="text-sm text-white/85">
            Send scans; we return CAD files ready for your milling or printing workflow.
          </p>
        </div>

        {/* Design + Production */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Design + Production</h3>
          <p className="text-sm text-white/85">
            Full service: CAD/CAM milling/printing, shade matching, finishing and glazing.
          </p>
        </div>

        {/* Print-only */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Print-only (Ready-to-print)</h3>
          <p className="text-sm text-white/85">
            We accept your STL with print settings — supports, labels and finishing on request.
          </p>
        </div>

        {/* Planning & Review */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Planning &amp; Review</h3>
          <p className="text-sm text-white/85">
            Collaborative review calls; screenshots + notes for case decisions and sign-off.
          </p>
        </div>

        {/* Inputs */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Inputs we accept</h3>
          <ul className="list-disc list-inside text-sm text-white/85 space-y-1">
            <li>Intraoral scans — 3Shape, Medit, iTero</li>
            <li>Open scans (STL/OBJ/PLY)</li>
            <li>Photos, shade and smile references</li>
            <li>RX or notes with occlusal details</li>
            <li>CBCT (DICOM) when requesting surgical guides</li>
          </ul>
        </div>

        {/* What we deliver */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">What we deliver</h3>
          <ul className="list-disc list-inside text-sm text-white/85 space-y-1">
            <li>Zirconia / e.max restorations</li>
            <li>Printed models, trays, provisionals</li>
            <li>Polished finish with clean margins</li>
            <li>Submission checklist &amp; fit record</li>
          </ul>
        </div>

        {/* NEW: Surgical Guides */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Surgical Guides</h3>
          <ul className="list-disc list-inside text-sm text-white/85 space-y-1">
            <li>Planning from CBCT (DICOM) + intraoral scans (STL/PLY)</li>
            <li>Tooth-/mucosa-/bone-borne; pilot or fully guided workflows</li>
            <li>Guide exports for major systems or printed resin guides</li>
            <li>Plan approval with guide report &amp; drilling sequence</li>
          </ul>
        </div>

        {/* Hints */}
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Need implant work?</h3>
          <p className="text-sm text-white/85">
            Guided workflows, custom abutments, predictable screw-retained crowns/bridges.
          </p>
          <Link href="/upload-case" className="inline-block mt-3 text-sm underline">
            Start a Case
          </Link>
        </div>

        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Looking for appliances?</h3>
          <p className="text-sm text-white/85">
            Night guards, Essix retainers, whitening trays and more — consistent fit and finish.
          </p>
          <Link href="/upload-case" className="inline-block mt-3 text-sm underline">
            Start a Case
          </Link>
        </div>
      </div>
    </section>
  );
}
