export const metadata = {
  title: "Gallery",
  description: "Selected cases and outcomes — gallery coming soon.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Gallery", description: "Selected cases and outcomes — gallery coming soon.", url: "/gallery" },
};

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">Showcase</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Gallery</h1>
        <p className="mt-5 text-white/85 text-lg md:text-xl">Selected cases and outcomes — coming soon.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card aspect-[4/3] flex items-center justify-center text-white/60">
            Coming soon
          </div>
        ))}
      </div>
    </section>
  );
}
