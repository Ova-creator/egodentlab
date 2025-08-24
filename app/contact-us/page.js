export const metadata = {
  title: "Contact",
  description:
    "Get in touch with EgoDent Lab — email, phone, and address for case questions and timelines.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact",
    description:
      "Get in touch with EgoDent Lab — email, phone, and address for case questions and timelines.",
    url: "/contact-us",
  },
};

export default function Page() {
  const mailtoHref =
    "mailto:lab@egodent.co.uk?subject=Enquiry%20-%20EgoDent%20Lab&body=" +
    "Hello%20EgoDent%20Lab,%0A%0A" +
    "I%20have%20a%20question%20about:%20%5Bcase%20planning%2C%20materials%2C%20timeline%2C%20etc.%5D%0A%0A" +
    "Clinic/Doctor:%20%0A" +
    "Preferred%20callback%20time:%20%0A%0A" +
    "Thank%20you!%0A";

  const telHref = "tel:+442033016323";
  const mapsHref = "https://maps.google.com/?q=HA7+1ER+Stanmore+London";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "EgoDent Lab",
    url: "https://egodentlab.co.uk",
    email: "mailto:lab@egodent.co.uk",
    telephone: "+44 203 301 6323",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stanmore",
      addressRegion: "London",
      postalCode: "HA7 1ER",
      addressCountry: "GB",
    },
    areaServed: "United Kingdom",
    openingHours: "Mo-Fr 09:00-18:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <section className="max-w-4xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-12 text-center ring-1 ring-white/15">
        {/* hours pill */}
        <div
          aria-label="Office Hours"
          className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20"
        >
          <span className="font-medium">Mon–Fri</span>
          <span className="opacity-80">09:00–18:00</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Contact
        </h1>
        <p className="mt-5 text-white/85 text-lg">
          Questions about cases, timelines, or submissions? We’re here to help.
        </p>

        {/* CTA buttons */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="/upload-case" className="px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">
            Start a Case
          </a>
          <a href={mailtoHref} className="px-6 py-3.5 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">
            Email Us
          </a>
        </div>

        {/* ✅ ADD THIS SMALL LINE UNDER THE BUTTONS */}
        <p className="mt-4 text-sm text-white/80">
          Need the price list or order form?{" "}
          <a href="/request-info" className="underline hover:text-white">
            Request them here
          </a>.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch">
        <div className="card p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-white/85 text-sm break-all">lab@egodent.co.uk</p>
          <a href={mailtoHref} className="mt-4 md:mt-auto inline-block px-5 py-3 rounded-2xl bg-white text-black font-semibold">
            Open Email
          </a>
        </div>

        <div className="card p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-white/85 text-sm">0203 301 6323</p>
          <a href={telHref} className="mt-4 md:mt-auto inline-block px-5 py-3 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">
            Call
          </a>
        </div>

        <div className="card p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p className="text-white/85 text-sm">Stanmore, London • HA7 1ER</p>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-auto inline-block px-5 py-3 rounded-2xl ring-1 ring-white/20 hover:bg-white/10"
          >
            Open in Maps
          </a>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
