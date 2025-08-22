import Link from "next/link";
import { sanityClient } from "../lib/sanity.client";
import { servicesByCategoryQuery } from "../lib/queries";

export default async function CmsServiceList({ category, debug = false }) {
  if (!category) return null;

  const fetchOpts =
    process.env.NODE_ENV === "development"
      ? { cache: "no-store" }        // bypass cache în DEV
      : { next: { revalidate: 300 } }; // ISR 5 min pe LIVE

  let items = [];
  let error = null;
  try {
    items = await sanityClient.fetch(servicesByCategoryQuery, { category }, fetchOpts);
  } catch (e) {
    error = e?.message || String(e);
  }

  if (debug) {
    return (
      <section className="mt-10">
        <div className="panel p-6 ring-1 ring-white/10">
          <h3 className="text-lg font-semibold mb-3">More from CMS (debug)</h3>
          <p className="text-white/60 text-sm mb-3">
            category: <code className="text-white">{String(category)}</code> | count:{" "}
            <code className="text-white">{items?.length ?? 0}</code> {error ? `| error: ${error}` : ""}
          </p>
          {!!items?.length ? (
            <div className="flex flex-wrap gap-2">
              {items.map((s) => {
                const Chip = s.slug ? Link : "span";
                const props = s.slug ? { href: `/services/${s.slug}` } : {};
                return (
                  <Chip
                    key={s._id}
                    {...props}
                    className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-sm hover:ring-white/20"
                    title={s.summary || ""}
                  >
                    {s.title}
                  </Chip>
                );
              })}
            </div>
          ) : (
            <div className="text-white/70 text-sm">No items returned from Sanity.</div>
          )}
        </div>
      </section>
    );
  }

  if (!items?.length) return null;

  return (
    <section className="mt-10">
      <div className="panel p-6 ring-1 ring-white/10">
        <h3 className="text-lg font-semibold mb-3">More from CMS</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((s) => {
            const Chip = s.slug ? Link : "span";
            const props = s.slug ? { href: `/services/${s.slug}` } : {};
            return (
              <Chip
                key={s._id}
                {...props}
                className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-sm hover:ring-white/20"
                title={s.summary || ""}
              >
                {s.title}
              </Chip>
            );
          })}
        </div>
      </div>
    </section>
  );
}
