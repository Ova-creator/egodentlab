import Link from "next/link";

export const metadata = {
  title: "Implant Dentistry | EgoDent Lab",
  description:
    "Predictable implant restorations with restorative-driven planning and guided workflows.",
};

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70">
          Implant Dentistry
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
          Predictable Implant Restorations
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto">
          Restorative-driven planning with optional guided workflows. Accurate connections,
          passive fit, stable occlusion, and natural soft-tissue contours—from single units
          to full-arch cases.
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

      {/* HIGHLIGHTS */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Restorative-Driven Planning</h3>
          <p className="text-white/80">
            Plan begins with the final tooth position for predictable emergence and aesthetics.
          </p>
        </div>
        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Soft-Tissue &amp; Emergence</h3>
          <p className="text-white/80">
            Profiles shaped for healthy tissue support and cleanable contours.
          </p>
        </div>
        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Passivity &amp; Occlusion</h3>
          <p className="text-white/80">
            Verified contact and occlusion to minimise adjustments and chair time.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS (fără CTA duplicat în interior) */}
      <div className="mt-6 panel p-6 ring-1 ring-white/10">
        <h3 className="font-semibold mb-4">How It Works</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="panel p-4 ring-1 ring-white/10">
            <h4 className="font-semibold">Case Intake</h4>
            <p className="text-white/80 text-sm">
              STL (IOS), DICOM, photos, shade, and notes.
            </p>
          </div>
          <div className="panel p-4 ring-1 ring-white/10">
            <h4 className="font-semibold">Planning</h4>
            <p className="text-white/80 text-sm">
              Restorative-driven setup; confirm online or via annotated shots.
            </p>
          </div>
          <div className="panel p-4 ring-1 ring-white/10">
            <h4 className="font-semibold">Prosthetic Design</h4>
            <p className="text-white/80 text-sm">
              Custom Ti abutments and screw-retained crowns/bridges.
            </p>
          </div>
          <div className="panel p-4 ring-1 ring-white/10">
            <h4 className="font-semibold">Finalisation</h4>
            <p className="text-white/80 text-sm">
              QC, occlusion check, delivery with maintenance guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
