"use client";

export default function WhatsAppButton() {
  // Linkul tău direct (fără +, exact cum l-ai dat):
  const href = "https://wa.me/447892720676";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed right-4 md:right-6"
      style={{ bottom: `calc(16px + env(safe-area-inset-bottom))`, zIndex: 60 }}
    >
      <span className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 rounded-full bg-[#25D366] text-black font-semibold shadow-lg ring-1 ring-black/10 hover:scale-[1.03] transition">
        <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden sm:inline">WhatsApp</span>
      </span>
    </a>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        d="M16 3C9.4 3 4 8.4 4 15c0 2.2.6 4.2 1.7 6L4 29l8.2-1.7c1.7.9 3.6 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3z"
        fill="currentColor"
      />
      <path
        d="M12.7 10.9c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.9 0 2.3 1.6 4.5 1.8 4.8.2.3 3.2 5.1 8 6.9 4 .9 4.8.8 5.7.7.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5-.5-.2-2.8-1.4-3.2-1.6-.4-.1-.7-.2-1 .2-.3.4-1.1 1.6-1.4 1.9-.3.3-.5.3-1 .1-.5-.2-2-.7-3.8-2.1-1.4-1-2.3-2.2-2.6-2.6-.3-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6 0-.2-.9-2.2-1.2-3z"
        fill="#fff"
      />
    </svg>
  );
}
