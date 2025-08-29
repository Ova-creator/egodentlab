import RequestForm from '../../components/RequestForm';

export const metadata = {
  title: 'Request Info & Materials — EgoDent Lab',
  description: 'Tick what you need and we’ll send it by email (usually same business day).',
};

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <section className="mt-6 mb-8">
        <h1 className="text-3xl font-bold">Request Info & Materials</h1>
        <p className="opacity-80 mt-2">
          Tick what you need and we’ll send it by email (usually same business day).
        </p>
      </section>

      <div
        style={{
          background: '#0e0e0e',
          border: '1px solid #222',
          borderRadius: 16,
          padding: 16,
        }}
      >
        <RequestForm />
      </div>
    </div>
  );
}
