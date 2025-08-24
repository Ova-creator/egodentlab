import RequestForm from "./RequestForm";


export const metadata = {
  title: "Request Info — EgoDent Lab",
  description: "Request price list, order form or starter materials. We reply quickly.",
};

export default function RequestInfoPage() {
  return (
    <main className="container mx-auto px-4">
      <section className="mx-auto max-w-3xl text-center my-12">
        <p className="text-xs tracking-widest uppercase opacity-70">Service</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Request Info & Materials</h1>
        <p className="opacity-80 mt-3">
          Tick what you need and we’ll send it by email (usually same business day).
        </p>
      </section>

      <RequestForm />

      <div className="my-10 opacity-70 text-sm">
        <p>
          Got a case to send? Visit <a className="underline" href="/upload-case">Upload Case</a>.
        </p>
      </div>
    </main>
  );
}
