export const metadata = {
  title: "Implant Dentistry",
  description:
    "Restorative-driven planning and guided workflows for predictable implant outcomes — fit, passivity, tissue support, and aesthetics.",
  alternates: { canonical: "/implant-dentistry" },
  openGraph: {
    title: "Implant Dentistry",
    description:
      "Restorative-driven planning and guided workflows for predictable implant outcomes — fit, passivity, tissue support, and aesthetics.",
    url: "/implant-dentistry",
  },
};

export default function Page() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Implant Dentistry",
    provider: { "@type": "LocalBusiness", name: "EgoDent Lab" },
    areaServed: "London, UK",
    url: "https://egodentlab.co.uk/implant-dentistry",
    description:
      "Implant planning and prosthetic workflows with guided options for predictable fit and aesthetics.",
    serviceType: "Dental Laboratory Services",
    availableChannel: { "@type": "ServiceChannel", servicePhone: "02033016323" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which implant systems do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with common platforms and connections. Please specify system, platform/connection, and any required components.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer guided surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, on request. We confirm sleeve kit and offsets and align the guided workflow with your clinical protocol.",
        },
      },
      {
        "@type": "Question",
        name: "What about timelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines depend on complexity and materials. We confirm at intake and can discuss rush options.",
        },
      },
    ],
  };

  return (
    <section className="max-w-5xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">Service</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Implant Dentistry</h1>
        <p className="mt-5 text-white/85 text-lg md:text-xl">
          Restorative-driven planning with optional guided workflows. Our goal:
          accurate connections, passive fit, stable occlusion, and natural soft-tissue
          outcomes — from single units to full-arch cases.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/upload-case" className="px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">Start a Case</a>
          <a href="/contact-us" className="px-6 py-3.5 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">Contact Us</a>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Restorative-Driven Planning</h3>
          <p className="text-white/80">Plan begins with the final tooth position for predictable emergence and aesthetics.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Soft-Tissue & Emergence</h3>
          <p className="text-white/80">Profiles shaped for healthy tissue support and cleansable contours.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Passivity & Occlusion</h3>
          <p className="text-white/80">Verified contacts and occlusion to minimize adjustments and chair-time.</p>
        </div>
      </div>

      {/* MINI PROCESS */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">How It Works</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-5 text-left">
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">1</div>
            <div className="font-semibold mb-1">Case Intake</div>
            <p className="text-white/80 text-sm">Send IOS (STL/PLY), CBCT (DICOM), photos, shade, due date, and implant system/platform.</p>
          </li>
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">2</div>
            <div className="font-semibold mb-1">Planning</div>
            <p className="text-white/80 text-sm">Restorative-driven setup; if guided, confirm sleeve kit and offsets with the clinician.</p>
          </li>
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">3</div>
            <div className="font-semibold mb-1">Prosthetic Design</div>
            <p className="text-white/80 text-sm">Abutments/frameworks and provisionals; try-in options available where needed.</p>
          </li>
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">4</div>
            <div className="font-semibold mb-1">Finalization</div>
            <p className="text-white/80 text-sm">Quality checks, documentation, and delivery with maintenance guidance.</p>
          </li>
        </ol>
        <div className="mt-7">
          <a href="/upload-case" className="inline-block px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">Start a Case</a>
        </div>
      </div>

      {/* FAQ */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-3">
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">Which implant systems do you support?</summary>
            <p className="mt-2 text-white/80 text-sm">
              We work with common platforms and connections. Please specify system, platform/connection, and any specific components required.
            </p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">Do you offer guided surgery?</summary>
            <p className="mt-2 text-white/80 text-sm">
              Yes, on request. We confirm sleeve kit and offsets and provide a guided workflow aligned with your clinical protocol.
            </p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">What about timelines?</summary>
            <p className="mt-2 text-white/80 text-sm">
              Timelines depend on complexity and case materials. We confirm at intake and can discuss rush options when possible.
            </p>
          </details>
        </div>
      </div>

      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </section>
  );
}
