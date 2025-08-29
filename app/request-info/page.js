import RequestForm from '../../components/RequestForm';

export const metadata = {
  title: 'Request Info & Materials — EgoDent Lab',
  description: 'Tick what you need and we’ll send it by email (usually same business day).',
};

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <section style={{margin:'1.5rem 0 2rem'}}>
        <h1 className="text-3xl font-bold">Request Info & Materials</h1>
        <p className="opacity-80 mt-2">Tick what you need and we’ll send it by email (usually same business day).</p>
      </section>
      <div className="card">
        <RequestForm />
      </div>
      <style jsx>{`
        .card { background:#0e0e0e; border:1px solid #222; border-radius:16px; padding:16px; }
      `}</style>
    </div>
  );
}
