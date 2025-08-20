export const metadata = {
  title: "Additional Services",
  description:
    "PMMA provisionals, night guards, Essix retainers, sport guards, and more — crafted with CAD/CAM accuracy and fast turnaround.",
  alternates: { canonical: "/additional-services" },
  openGraph: {
    title: "Additional Services",
    description:
      "PMMA provisionals, night guards, Essix retainers, sport guards, and more — crafted with CAD/CAM accuracy and fast turnaround.",
    url: "/additional-services",
  },
};

export default function Page() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Additional Services",
    provider: { "@type": "LocalBusiness", name: "EgoDent Lab" },
    areaServed: "London, UK",
    url: "https://egodentlab.co.uk/additional-services",
    description:
      "PMMA provisionals, night guards, Essix retainers, sport guards, and related add-on services produced with CAD/CAM precision.",
    serviceType: "Dental Laboratory Services",
    availableChannel: { "@type": "ServiceChannel", name: "Submission via WeTransfer" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What do you need for guards/retainers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full-arch IOS or model scans and a bite record. Tell us hardness (hard/soft/bilaminate) and colour where applicable.",
        },
      },
      {
        "@type": "Question",
        name: "How do I send files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WeTransfer is preferred in the UK. You can also use our Upload Case page or email if needed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you accept urgent requests?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—mark as urgent with your target date. We’ll confirm feasibility based on workload and indication.",
        },
      },
    ],
  };

  const items = [
    "PMMA provisionals (crowns/bridges)",
    "Night Guard (hard / soft / bilaminate)",
    "Essix Retainer",
    "Sport Guard",
    "Other add-on services on request",
  ];

  return (
    <section className="max-w-5xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">Service</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Additional Services</h1>
        <p className="mt-5 text-white/85 text-lg md:text-xl">
          PMMA provisionals, retention and protection appliances, and auxiliary
          lab services—digitally produced for consistent fit and clean finish.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/upload-case" className="px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">Start a Case</a>
          <a href="/contact-us" className="px-6 py-3.5 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">Contact Us</a>
        </div>
      </div>

      {/* AVAILABLE ITEMS */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold">What we can make</h2>
        <p className="text-white/80 mt-2">
          Digitally fabricated on request. If you need something specific, let us know—we’ll confirm feasibility.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {items.map((x) => (
            <li key={x} className="px-3 py-1.5 rounded-full ring-1 ring-white/20 bg-white/5 text-sm">{x}</li>
          ))}
        </ul>
      </div>

      {/* BENEFITS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Fast & Consistent</h3>
          <p className="text-white/80">CAD/CAM workflows shorten turnaround and deliver repeatable fit and finish.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Comfort & Function</h3>
          <p className="text-white/80">Contours and thickness tuned for comfort, durability, and cleansability.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Flexible Requests</h3>
          <p className="text-white/80">From PMMA provisionals to guards and retainers—tell us the indication and timeline.</p>
        </div>
      </div>

      {/* MINI PROCESS */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">How It Works</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-5 text-left">
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">1</div>
            <div className="font-semibold mb-1">Submit Files</div>
            <p className="text-white/80 text-sm">
              Preferred: <b>WeTransfer</b>. Include IOS (STL/PLY) or model scans, bite record (for guards), shade, and due date.
            </p>
          </li>
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">2</div>
            <div className="font-semibold mb-1">Plan & Confirm</div>
            <p className="text-white/80 text-sm">We confirm indication, material, thickness, and finishing details before production.</p>
          </li>
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">3</div>
            <div className="font-semibold mb-1">Production</div>
            <p className="text-white/80 text-sm">CAD/CAM design and manufacturing with QC for fit and surface finish.</p>
          </li>
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">4</div>
            <div className="font-semibold mb-1">Delivery</div>
            <p className="text-white/80 text-sm">Dispatch or pickup with care instructions. We’re available for adjustments and feedback.</p>
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
            <summary className="cursor-pointer font-semibold">What do you need for guards/retainers?</summary>
            <p className="mt-2 text-white/80 text-sm">
              Full-arch IOS or model scans and a bite record. Tell us hardness (hard/soft/bilaminate) and colour where applicable.
            </p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">How do I send files?</summary>
            <p className="mt-2 text-white/80 text-sm">
              <b>WeTransfer</b> is preferred in the UK. You can also use our Upload Case page or email if needed.
            </p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">Do you accept urgent requests?</summary>
            <p className="mt-2 text-white/80 text-sm">
              Yes—mark as urgent with your target date. We’ll confirm feasibility based on workload and indication.
            </p>
          </details>
        </div>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </section>
  );
}
