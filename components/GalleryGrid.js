"use client";

import { useEffect, useState, useCallback } from "react";

// Optimizare prin CDN Sanity (dimensiune + compresie)
function imgUrl(url, { w = 900, q = 70 } = {}) {
  const u = new URL(url);
  u.searchParams.set("auto", "format");
  u.searchParams.set("fit", "max");
  u.searchParams.set("w", String(w));
  u.searchParams.set("q", String(q));
  return u.toString();
}

export default function GalleryGrid({ items = [] }) {
  const [index, setIndex] = useState(-1);

  const close = useCallback(() => setIndex(-1), []);
  const next  = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);
  const prev  = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);

  // Navigare tastatură (Esc / ← →)
  useEffect(() => {
    if (index < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, next, prev]);

  return (
    <>
      {/* grid mai compact: 1 col (xs), 2 (md), 3 (xl) */}
      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {items.map((it, i) => (
          <figure
            key={it._id}
            className="group card overflow-hidden cursor-pointer"
            onClick={() => setIndex(i)}
            title="View image"
          >
            {/* Raport fix 4:3 – tile-uri uniforme și mai mici */}
            <div className="relative aspect-[4/3]">
              <img
                src={imgUrl(it.url, { w: 1100, q: 70 })}
                alt={it.title || "Case photo"}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                srcSet={`
                  ${imgUrl(it.url, { w: 480, q: 70 })} 480w,
                  ${imgUrl(it.url, { w: 768, q: 70 })} 768w,
                  ${imgUrl(it.url, { w: 1100, q: 70 })} 1100w,
                  ${imgUrl(it.url, { w: 1600, q: 70 })} 1600w
                `}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>

            <figcaption className="p-3 text-white/80 text-sm">
              {it.title || "—"}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* LIGHTBOX */}
      {index >= 0 && items[index] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 rounded-full px-3 py-2 bg-white/10 ring-1 ring-white/20 hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
          >
            ✕
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 bg-white/10 ring-1 ring-white/20 hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ←
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 bg-white/10 ring-1 ring-white/20 hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            →
          </button>

          <img
            src={imgUrl(items[index].url, { w: 2000, q: 80 })}
            alt={items[index].title || "Case photo large"}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-5 right-5 text-xs text-white/70">
            {index + 1}/{items.length}
          </div>
        </div>
      )}
    </>
  );
}
