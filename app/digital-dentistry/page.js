import Link from "next/link";

export const metadata = {
  title: "Digital Dentistry | EgoDent Lab",
  description:
    "CAD/CAM restorations: zirconia, e.max, veneers, inlays/onlays — precise fit and clean aesthetics.",
};

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70">
          Digital Dentistry
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
          CAD/CAM Restorations
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto">
          Zirconia, e.max, veneers, inlays/onlays — precise fits and clean aesthetics.
        </p>

        {/* CTA group */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/upload-case"
            className="inline-flex items-center rounded-xl bg-white text-black px-5 py-2.5 font-medium shadow-sm hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Start a Case
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center rounded-xl bg-white/10 text-white px-5 py-2.5 font-medium ring-1 ring-white/20 hover:bg-white/15"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Aesthetic &amp; Restorative</h3>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>Zirconia (monolithic or layered), lithium disilicate</li>
            <li>Veneers, inlays/onlays, partial coverage</li>
            <li>Clean margins, stable occlusion, natural finish</li>
          </ul>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Models &amp; Trays</h3>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>Printed master models &amp; dies</li>
            <li>Verification models, articulator mounting</li>
            <li>Clear trays (Essix) on request</li>
          </ul>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Design-only (CAD)</h3>
          <p className="text-white/80">
            Send scans; we return CAD files ready for your milling or printing workflow.
          </p>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Design + Production</h3>
          <p className="text-white/80">
            Full service: CAD/CAM milling/printing, shade matching, finishing and glazing.
          </p>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Print-only (Ready-to-print)</h3>
          <p className="text-white/80">
            We accept your STL with print settings—supports, labels and finishing on request.
          </p>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Planning &amp; Review</h3>
          <p className="text-white/80">
            Collaborative review calls; screenshots + notes for case decisions and sign-off.
          </p>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Inputs we accept</h3>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>Intraoral scans — 3Shape, Medit, iTero</li>
            <li>Open scans (STL/OBJ/PLY)</li>
            <li>Photos, shade and smile references</li>
            <li>RX or notes with occlusal details</li>
          </ul>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">What we deliver</h3>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>Zirconia / e.max restorations</li>
            <li>Printed models, trays, provisionals</li>
            <li>Polished finish with clean margins</li>
            <li>Submission checklist &amp; fit record</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
