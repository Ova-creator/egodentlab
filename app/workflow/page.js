export const metadata = {
  title: "Workflow",
  description:
    "Seamless case intake, planning, production, and delivery — with clear communication at every step.",
  alternates: { canonical: "/workflow" },
  openGraph: {
    title: "Workflow",
    description:
      "Seamless case intake, planning, production, and delivery — with clear communication at every step.",
    url: "/workflow",
  },
};

export default function Page() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Workflow",
    provider: { "@type": "LocalBusiness", name: "EgoDent Lab" },
    areaServed: "London, UK",
    url: "https://egodentlab.co.uk/workflow",
    description:
      "Case intake, planning, CAD/CAM production, and delivery with transparent communication.",
    serviceType: "Dental Laboratory Services",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What file formats do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IOS: STL/PLY; CBCT: DICOM; Photos: JPG/PNG. Include shade and due date.",
        },
      },
      {
        "@type": "Question",
        name: "Preferred submission channel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use your existing platform (WeTransfer, 3Shape, Medit, iTero). Email is fine if needed.",
        },
      },
      {
        "@type": "Question",
        name: "Urgent cases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mark as urgent and provide the earliest delivery date. We’ll confirm feasibility and options.",
        },
      },
    ],
  };

  return (
    <section className="max-w-5xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">Process</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Workflow</h1>
        <p className="mt-5 text-white/85 text-lg md:text-xl">
          From first files to final fit — our digital process keeps communication clear,
          timelines predictable, and outcomes consistent.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/upload-case" className="px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">Start a Case</a>
          <a href="/contact-us" className="px-6 py-3.5 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">Contact Us</a>
        </div>
      </div>

      {/* SUBMISSION CHANNELS */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold">Submission Channels</h2>
        <p className="text-white/80 mt-2">
          Send scans and notes through your preferred platform. Please include patient ID,
          shade, due date, and any special instructions.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 justify-start">
          {["WeTransfer", "3Shape Communicate", "Medit Link", "iTero", "Email"].map((ch) => (
            <li key={ch} className="px-3 py-1.5 rounded-full ring-1 ring-white/20 bg-white/5 text-sm">{ch}</li>
          ))}
        </ul>
        <div className="mt-6">
          <a href="/upload-case" className="underline">Upload Case instructions</a>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Clear Communication</h3>
          <p className="text-white/80">One place for files and notes; we confirm scope, timelines, and expectations.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Real-Time Status</h3>
          <p className="text-white/80">We update at key milestones: intake, planning, production, and dispatch.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Secure Handling</h3>
          <p className="text-white/80">Encrypted platforms preferred; email accepted with patient identifiers minimized.</p>
        </div>
      </div>

      {/* MINI PROCESS */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">How It Works</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-5 text-left">
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">1</div>
            <div className="font-semibold mb-1">Submit Files</div>
            <p className="text-white/80 text-sm">IOS (STL/PLY), CBCT (DICOM), photos + notes via WeTransfer, 3Shape, Medit, iTero, or Email.</p>
          </li>
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">2</div>
            <div className="font-semibold mb-1">Review & Plan</div>
            <p className="text-white/80 text-sm">We confirm indications, shade, occlusion, components, and target delivery.</p>
          </li>
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">3</div>
            <div className="font-semibold mb-1">Production</div>
            <p className="text-white/80 text-sm">CAD/CAM manufacturing, finishing, and QC checks for fit and contacts.</p>
          </li>
          <li className="card p-5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-semibold mb-3">4</div>
            <div className="font-semibold mb-1">Delivery</div>
            <p className="text-white/80 text-sm">Dispatch/pickup with documentation; we remain available for chairside feedback.</p>
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
            <summary className="cursor-pointer font-semibold">What file formats do you accept?</summary>
            <p className="mt-2 text-white/80 text-sm">IOS: STL/PLY; CBCT: DICOM; Photos: JPG/PNG. Include shade and due date.</p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">Preferred submission channel?</summary>
            <p className="mt-2 text-white/80 text-sm">Use your existing platform (WeTransfer, 3Shape, Medit, iTero). Email is fine if needed.</p>
          </details>
          <details className="card p-4">
            <summary className="cursor-pointer font-semibold">Urgent cases?</summary>
            <p className="mt-2 text-white/80 text-sm">Mark as urgent with your target date. We’ll confirm feasibility and options.</p>
          </details>
        </div>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </section>
  );
}
