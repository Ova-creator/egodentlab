export const metadata = {
  title: "Upload Case",
  description:
    "Send IOS/CBCT scans and notes via WeTransfer, 3Shape, Medit, iTero, or email. Include patient ID, shade, and due date.",
  alternates: { canonical: "/upload-case" },
  openGraph: {
    title: "Upload Case",
    description:
      "Send IOS/CBCT scans and notes via WeTransfer, 3Shape, Medit, iTero, or email. Include patient ID, shade, and due date.",
    url: "/upload-case",
  },
};

export default function Page() {
  const channels = [
    {
      name: "WeTransfer (preferred UK)",
      href: "https://wetransfer.com/",
      desc: "Drag & drop your files. Add patient ID, shade, and due date in the message.",
    },
    {
      name: "3Shape Communicate",
      href: "https://portal.3shapecommunicate.com/",
      desc: "Share case to our lab account or send a download link.",
    },
    {
      name: "Medit Link",
      href: "https://www.meditlink.com/",
      desc: "Export STL/PLY or share via Medit Link project.",
    },
    {
      name: "iTero",
      href: "https://myitero.com/",
      desc: "Export scans and provide the download link.",
    },
    {
      name: "Email",
      href: "mailto:lab@egodent.co.uk?subject=Case%20Submission&body=Please%20attach%20or%20link%20to%20files.%20Include%20patient%20ID,%20shade,%20and%20due%20date.",
      desc: "If you prefer email, minimize patient identifiers in attachments.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">Start a Case</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Upload Case</h1>
        <p className="mt-5 text-white/85 text-lg md:text-xl">
          Send your IOS/CBCT scans and notes using the channel that suits your workflow. Please include patient ID,
          shade, due date, and any special instructions.
        </p>
      </div>

      {/* CHANNELS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {channels.map((c) => (
          <div key={c.name} className="panel p-8 md:p-10 ring-1 ring-white/15">
            <h2 className="text-xl md:text-2xl font-semibold">{c.name}</h2>
            <p className="text-white/80 mt-2">{c.desc}</p>
            <div className="mt-5">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 rounded-2xl bg-white text-black font-semibold"
              >
                Open
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CHECKLIST */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold">Checklist</h2>
        <ul className="mt-4 space-y-2 text-white/85 list-disc list-inside">
          <li>Files: IOS (STL/PLY), CBCT (DICOM) if relevant, and photos (JPG/PNG).</li>
          <li>Notes: patient ID, shade, due date, components/materials, special instructions.</li>
          <li>Urgent cases: mark as urgent and give your target delivery date.</li>
        </ul>
      </div>

      {/* PRIVACY */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold">Privacy &amp; Data</h2>
        <p className="text-white/80 mt-2">
          We handle files securely and keep communications clear. When sending via email, please limit patient
          identifiers in attachments where possible.
        </p>
        <div className="mt-5">
          <a href="/contact-us" className="inline-block px-5 py-3 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
