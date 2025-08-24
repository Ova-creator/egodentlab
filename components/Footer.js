export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/70">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EgoDent Lab. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/contact-us" className="hover:text-white">Contact</a>
			<a href="/request-info" className="hover:underline">Request Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
