// app/request-info/page.js
import RequestForm from "../../components/RequestForm";

export const metadata = {
  title: "Request Info & Materials",
  description:
    "Tick what you need and we’ll send it by email (usually same business day).",
  alternates: { canonical: "/request-info" },
  openGraph: {
    title: "Request Info & Materials",
    description:
      "Tick what you need and we’ll send it by email (usually same business day).",
    url: "/request-info",
  },
};

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="panel p-8 md:p-10 ring-1 ring-white/15">
        <p className="mb-2 tracking-[0.2em] text-xs text-white/70">SERVICE</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Request Info & Materials
        </h1>
        <p className="mt-4 text-white/85">
          Tick what you need and we’ll send it by email (usually same business day).
        </p>
      </div>

      <div className="mt-8 panel p-6 md:p-8 ring-1 ring-white/10">
        <RequestForm />
      </div>
    </section>
  );
}
