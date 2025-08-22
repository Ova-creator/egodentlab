// components/WhatsAppButton.js
export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* CALL – vizibil sub 1024px (telefon/tabletă) */}
      <a
        href="tel:+442033016323" // 0203 301 6323
        className="lg:hidden inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white shadow-lg ring-1 ring-white/20 backdrop-blur hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-label="Call EgoDent Lab"
      >
        Call
      </a>

      {/* WHATSAPP – vizibil peste tot */}
      <a
        href="https://wa.me/447311172297" // 07311172297 -> format internațional fără 0
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
        aria-label="WhatsApp EgoDent Lab"
      >
        WhatsApp
      </a>
    </div>
  );
}
