export const metadata = {
  title: "Upload Case",
  description:
    "How to send your case files — WeTransfer (preferred in the UK), or via 3Shape, Medit, iTero, or email. Checklist included.",
  alternates: { canonical: "/upload-case" },
  openGraph: {
    title: "Upload Case",
    description:
      "How to send your case files — WeTransfer (preferred in the UK), or via 3Shape, Medit, iTero, or email. Checklist included.",
    url: "/upload-case",
  },
};

export default function Page() {
  const mailtoHref =
    "mailto:lab@egodent.co.uk?subject=New%20Case%20-%20%5BPatient%20ID%5D%20-%20%5BClinic%5D&body=" +
    "Please%20include%20the%20following:%0A%0A" +
    "-%20Patient%20ID:%0A" +
    "-%20Clinic/Doctor:%0A" +
    "-%20Shade:%0A" +
    "-%20Due%20date:%0A" +
    "-%20Tooth%20numbers%20(FDI):%0A" +
    "-%20Indication:%0A" +
    "-%20Implant%20system%20%26%20platform%20(if%20applicable):%0A" +
    "-%20Abutment%20type/components%20(if%20applicable):%0A" +
    "-%20Occlusion%20notes:%0A" +
    "-%20Special%20instructions:%0A%0A" +
    "Attachments:%0A" +
    "-%20IOS%20scans%20(STL/PLY)%0A" +
    "-%20CBCT%20(DICOM)%20if%20relevant%0A" +
    "-%20Photos%0A";

  return (
    <section className="max-w-5xl mx-auto">
      {/* HERO */}
      <div className="panel p-10 md:p-14 text-center ring-1 ring-white/15">
        <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3">Submission</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Upload Case</h1>
        <p className="mt-5 text-white/85 text-lg md:text-xl">
          Preferred in the UK: <b>WeTransfer</b>. We also accept files via 3Shape Communicate, Medit Link, iTero, or Email.
          Please include the checklist below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={mailtoHref} className="px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">Start a Case by Email</a>
          <a href="/contact-us" className="px-6 py-3.5 rounded-2xl ring-1 ring-white/20 hover:bg-white/10">Contact Us</a>
        </div>
      </div>

      {/* CHECKLIST */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold">Checklist (include with your files)</h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-white/85">
          {[
            "Patient ID",
            "Clinic / Doctor",
            "Shade",
            "Due date",
            "Tooth numbers (FDI)",
            "Indication",
            "Implant system & platform (if applicable)",
            "Abutment type/components (if applicable)",
            "Occlusion notes",
            "Special instructions",
          ].map((item) => (
            <li key={item} className="card p-3">{item}</li>
          ))}
        </ul>

        <div className="mt-6">
          <div className="text-white/70 text-sm">Recommended attachments:</div>
          <ul className="mt-2 list-disc list-inside text-white/85">
            <li>IOS scans (STL/PLY)</li>
            <li>CBCT (DICOM) if relevant</li>
            <li>Photos</li>
          </ul>
        </div>
      </div>

      {/* CHANNELS & HOW-TO */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">How to Send</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-2">WeTransfer (Preferred)</h3>
            <ol className="list-decimal list-inside text-white/85 space-y-1 text-sm">
              <li>Open WeTransfer and choose “Send files”.</li>
              <li>Add your files/folder (IOS, DICOM, photos).</li>
              <li>Recipient: <b>lab@egodent.co.uk</b></li>
              <li>Message: include the <b>Checklist</b> above.</li>
              <li>Send and keep the confirmation for your records.</li>
            </ol>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-2">Other Options</h3>
            <ul className="text-white/85 space-y-1 text-sm">
              <li><b>3Shape Communicate</b>: invite/share to <b>lab@egodent.co.uk</b>.</li>
              <li><b>Medit Link</b>: share the case to <b>lab@egodent.co.uk</b>.</li>
              <li><b>iTero</b>: send via your iTero portal; include our lab email in notes.</li>
              <li><b>Email</b>: attach small files and include the <b>Checklist</b> (large files via WeTransfer).</li>
            </ul>
          </div>
        </div>

        <div className="mt-7">
          <a href={mailtoHref} className="inline-block px-6 py-3.5 rounded-2xl bg-white text-black font-semibold">
            Start a Case by Email
          </a>
        </div>
      </div>

      {/* PRIVACY & DATA */}
      <div className="panel p-8 md:p-10 mt-10 ring-1 ring-white/15">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Privacy & Data</h2>
        <ul className="list-disc list-inside text-white/85 space-y-1">
          <li>Prefer <b>WeTransfer</b> for large files; avoid sending big attachments by email.</li>
          <li>Use <b>Patient ID</b> in messages; avoid full names in email subjects when possible.</li>
          <li>Only include data necessary for the lab work; remove extra identifiers from screenshots/photos.</li>
          <li>We handle case data solely for clinical purposes and on clinician instruction.</li>
        </ul>
      </div>
    </section>
  );
}
