import Link from "next/link";

export const metadata = {
  title: "Additional Services — Appliances & Provisionals",
  description:
    "PMMA provisionals, retainers, night guards, whitening trays, and auxiliary lab services — digitally produced for consistent fit and finish.",
  alternates: { canonical: "/additional-services" },
  openGraph: {
    title: "Additional Services — Appliances & Provisionals",
    description:
      "PMMA provisionals, retainers, night guards, whitening trays, and auxiliary lab services — digitally produced for consistent fit and finish.",
    url: "/additional-services",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-12 text-center ring-1 ring-white/15">
        <p className="uppercase tracking-[.25em] text-white/70 text-xs mb-2">
          Service
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Appliances &amp; Provisionals
        </h1>
        <p className="mt-4 text-white/85">
          PMMA provisionals, night guards, Essix retainers, whitening trays — digitally
          produced for consistent fit and finish.
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

      {/* WHAT WE CAN MAKE */}
      <div className="mt-8 panel p-6 ring-1 ring-white/10">
        <h3 className="font-semibold mb-3">What we can make</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="pill">PMMA provisionals (crowns/bridges)</span>
          <span className="pill">Night Guard (soft / hard / dual)</span>
          <span className="pill">Essix Retainer</span>
          <span className="pill">Whitening Tray</span>
          <span className="pill">Surgical Guides (pilot / fully guided)</span>
        </div>
        <p className="mt-3 text-white/80 text-sm">
          Need something specific? Tell us the indication and timeline — we’ll confirm feasibility.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Fast &amp; Consistent</h3>
          <p className="text-sm text-white/85">
            CAD/CAM workflows shorten turnaround and deliver repeatable fit and finish.
          </p>
        </div>
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Comfort &amp; Function</h3>
          <p className="text-sm text-white/85">
            Digitally controlled thickness and relief for comfort, durability, and cleanability.
          </p>
        </div>
        <div className="card p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Flexible Requests</h3>
          <p className="text-sm text-white/85">
            From PMMA provisionals to guards and retainers — tell us the indication and timeline.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="panel mt-8 p-6 ring-1 ring-white/10">
        <h3 className="font-semibold mb-4">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card p-4 ring-1 ring-white/10">
            <h4 className="font-medium mb-1">Submit Files</h4>
            <p className="text-sm text-white/85">
              Preferred: WeTransfer; also 3Shape, iTero, Medit or email links.
            </p>
            <Link href="/upload-case" className="inline-block mt-3 text-sm underline">
              Start a Case
            </Link>
          </div>
          <div className="card p-4 ring-1 ring-white/10">
            <h4 className="font-medium mb-1">Plan &amp; Confirm</h4>
            <p className="text-sm text-white/85">
              We confirm indications, thickness and due date, then proceed.
            </p>
          </div>
          <div className="card p-4 ring-1 ring-white/10">
            <h4 className="font-medium mb-1">Production</h4>
            <p className="text-sm text-white/85">
              CAD/CAM design &amp; finishing; fit and surface finish checked.
            </p>
          </div>
          <div className="card p-4 ring-1 ring-white/10">
            <h4 className="font-medium mb-1">Delivery</h4>
            <p className="text-sm text-white/85">
              Courier or pickup with case label and care instructions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
