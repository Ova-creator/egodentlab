// components/CallButton.js
"use client";

export default function CallButton({ phone = "+447311172297" }) {
  return (
    <a
      href={`tel:${phone}`}
      aria-label="Call us"
      className="fixed md:hidden right-4 bottom-20 z-50"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg ring-1 ring-black/10 hover:scale-105 transition">
        {/* Phone icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 011 1v3.25a1 1 0 01-1 1C11.3 21.36 2.64 12.7 2.64 2.99a1 1 0 011-1H6.9a1 1 0 011 1c0 1.27.2 2.47.57 3.58a1 1 0 01-.25 1.01l-2.6 2.21z" />
        </svg>
      </span>
    </a>
  );
}
