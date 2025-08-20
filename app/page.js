export const metadata = {
  title: "Home",
  description:
    "London digital dental lab delivering CAD/CAM precision, collaborative planning, and predictable outcomes.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};
export default function Page() {
  return (
    <section className="max-w-5xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-16 text-center shadow-xl ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">
          London Digital Dental Lab
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Advanced Digital Solutions for Every Case
        </h1>

        <p className="mt-6 text-white/85 text-lg md:text-xl leading-relaxed">
          EgoDent Lab delivers precision, aesthetics, and predictable outcomes.
          From planning to final delivery, our end-to-end workflow keeps
          communication clear and turnarounds fast.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="/upload-case"
            className="px-6 py-3.5 rounded-2xl bg-white text-black font-semibold"
          >
            Start a Case
          </a>
          <a
            href="/contact-us"
            className="px-6 py-3.5 rounded-2xl ring-1 ring-white/20 hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" className="panel p-8 md:p-10 mt-10 md:mt-12 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          About EgoDent Lab
        </h2>
        <p className="text-white/80 text-base md:text-lg leading-relaxed">
          We combine CAD/CAM expertise with modern materials and collaborative planning.
          Our team supports implant and restorative cases of all complexities—coordinating
          with your clinic to achieve accurate fits, stable occlusion, and natural aesthetics.
        </p>
      </div>
    </section>
  );
}
