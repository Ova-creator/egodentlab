export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <div className="panel p-12">
        <h1 className="text-4xl font-extrabold">Page not found</h1>
        <p className="mt-3 text-white/80">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="mt-6 inline-block px-5 py-3 rounded-2xl bg-white text-black font-semibold">
          Back to Home
        </a>
      </div>
    </section>
  );
}
