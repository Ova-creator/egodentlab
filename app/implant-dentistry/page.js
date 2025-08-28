import Link from "next/link";

export const metadata = {
  title: "Implant Dentistry — Predictable Implant Restorations",
  description:
    "Restorative-driven planning with optional guided surgery. Custom Ti abutments, screw-retained crowns & bridges, full-arch temps.",
  alternates: { canonical: "/implant-dentistry" },
  openGraph: {
    title: "Implant Dentistry — Predictable Implant Restorations",
    description:
      "Restorative-driven planning with optional guided surgery. Custom Ti abutments, screw-retained crowns & bridges, full-arch temps.",
    url: "/implant-dentistry",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-12 text-center ring-1 ring-white/15">
        <p className="uppercase tracking-[.25em] text-white/70 text-xs mb-2">
          Implant Dentistry
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Predictable Implant Restorations
        </h1>
        <p className="mt-4 text-white/85">
          Restorative-driven planning with optional guided workflows — accurate connections,
          passive fit, stable occlusion, and natural soft-tissue outcomes from single units to full-arch.
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

      {/* FEATURE CARDS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Restorative-Driven Planning</h3>
          <p className="text-sm text-white/85">
            Plan begins with the final tooth position for predictable emergence and aesthetics.
          </p>
        </div>
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Soft-Tissue &amp; Emergence</h3>
          <p className="text-sm text-white/85">
            Profiles shaped for healthy tissue support and cleanable contours.
          </p>
        </div>
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Passivity &amp; Occlusion</h3>
          <p className="text-sm text-white/85">
            Verified contact and occlusion to minimise adjustments and chair time.
          </p>
        </div>
      </div>

      {/* NEW: GUIDED SURGERY */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Guided Surgery (Optional)</h3>
          <ul className="list-disc list-inside text-sm text-white/85 space-y-1">
            <li>Planning from DICOM (CBCT) + intraoral scans (STL/PLY)</li>
            <li>Tooth-/mucosa-/bone-borne; pilot or fully guided</li>
            <li>Printed resin guides or exports for major systems</li>
            <li>Plan approval with guide report &amp; drilling sequence</li>
          </ul>
        </div>

        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Prosthetic Design</h3>
          <p className="text-sm text-white/85">
            Custom Ti abutments and screw-retained crowns/bridges. QC &amp; delivery guidance.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="panel mt-8 p-6 ring-1 ring-white/10">
        <h3 className="font-semibold mb-4">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card p-4 ring-1 ring-white/10">
            <h4 className="font-medium mb-1">Case Intake</h4>
            <p className="text-sm text-white/85">
              STL (IOS), DICOM, photos, shade, and notes.
            </p>
            <Link href="/upload-case" className="inline-block mt-3 text-sm underline">
              Start a Case
            </Link>
          </div>
          <div className="card p-4 ring-1 ring-white/10">
            <h4 className="font-medium mb-1">Planning</h4>
            <p className="text-sm text-white/85">
              Restorative-driven setup; confirm online or via annotated shots.
            </p>
            <ul className="mt-2 list-disc list-inside text-xs text-white/80 space-y-1">
              <li>Optional guided surgery planning &amp; guide fabrication</li>
            </ul>
          </div>
          <div className="card p-4 ring-1 ring-white/10">
            <h4 className="font-medium mb-1">Prosthetic Design</h4>
            <p className="text-sm text-white/85">
              Abutments &amp; screw-retained crowns/bridges.
            </p>
          </div>
          <div className="card p-4 ring-1 ring-white/10">
            <h4 className="font-medium mb-1">Finalisation</h4>
            <p className="text-sm text-white/85">
              QC, occlusion check, delivery with maintenance guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
