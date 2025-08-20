"use client";
export default function Error({ reset }) {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <div className="panel p-12">
        <h1 className="text-4xl font-extrabold">Something went wrong</h1>
        <p className="mt-3 text-white/80">Please try again.</p>
        <button onClick={() => reset()} className="mt-6 px-5 py-3 rounded-2xl bg-white text-black font-semibold">
          Reload
        </button>
      </div>
    </section>
  );
}
