import Container from "../../components/Container";

export const revalidate = 3600;

export default function Page() {
  return (
    <Container>
      <section className="max-w-4xl mx-auto">
        <div className="panel p-10 md:p-12 ring-1 ring-white/15">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="mt-4 text-white/80">
            EgoDent Lab (“we”, “our”, “us”) is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">What we collect</h2>
          <ul className="list-disc pl-5 text-white/80 space-y-1 mt-2">
            <li>Contact details (clinic, name, email, phone)</li>
            <li>Case information (files you submit, notes, photos)</li>
            <li>Technical logs for security and diagnostics</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold text-white">How we use data</h2>
          <p className="text-white/80 mt-2">
            We use data to process cases, provide support, improve services, and meet legal obligations. We do not sell personal data.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-white">Retention</h2>
          <p className="text-white/80 mt-2">
            Case files may be retained for our records and quality assurance. You can request deletion when legally permissible.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-white">Contact</h2>
          <p className="text-white/80 mt-2">
            Email: <a className="underline" href="mailto:lab@egodent.co.uk">lab@egodent.co.uk</a>
          </p>
        </div>
      </section>
    </Container>
  );
}
