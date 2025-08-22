import Link from "next/link";

export const metadata = {
  title: "Additional Services | EgoDent Lab",
  description:
    "PMMA provisionals, retainers, whitening trays and more—digitally produced for consistent fit and finish.",
};

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70">
          Service
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
          Appliances &amp; Provisionals
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto">
          PMMA provisionals, night guards, Essix retainers, whitening trays—digitally produced
          for consistent fit and finish.
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

      {/* CONTENT */}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">What we can make</h3>
          <p className="text-white/80">
            PMMA provisionals (crowns/bridges), Night Guard (soft / hard / dual), Essix Retainer,
            Whitening Tray. Need something specific? Tell us the indication and timeline—we’ll
            confirm feasibility.
          </p>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Fast &amp; Consistent</h3>
          <p className="text-white/80">
            CAD/CAM workflows shorten turnaround and deliver repeatable fit and finish.
          </p>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Comfort &amp; Function</h3>
          <p className="text-white/80">
            Digitally controlled thickness and relief for comfort, durability, and cleanability.
          </p>
        </div>

        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="font-semibold mb-2">Flexible Requests</h3>
          <p className="text-white/80">
            From PMMA provisionals to guards and retainers—tell us the indication and timeline.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS (fără CTA duplicat în interior) */}
      <div className="mt-6 panel p-6 ring-1 ring-white/10">
        <h3 className="font-semibold mb-4">How It Works</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="panel p-4 ring-1 ring-white/10">
            <h4 className="font-semibold">Submit Files</h4>
            <p className="text-white/80 text-sm">
              Preferred: WeTransfer; also 3Shape, iTero, Medit or email links.
            </p>
          </div>
          <div className="panel p-4 ring-1 ring-white/10">
            <h4 className="font-semibold">Plan &amp; Confirm</h4>
            <p className="text-white/80 text-sm">
              We confirm indications, thickness and due date, then proceed.
            </p>
          </div>
          <div className="panel p-4 ring-1 ring-white/10">
            <h4 className="font-semibold">Production</h4>
            <p className="text-white/80 text-sm">
              CAD/CAM design &amp; finishing; fit and surface finish checked.
            </p>
          </div>
          <div className="panel p-4 ring-1 ring-white/10">
            <h4 className="font-semibold">Delivery</h4>
            <p className="text-white/80 text-sm">
              Courier or pickup with case label and care instructions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
