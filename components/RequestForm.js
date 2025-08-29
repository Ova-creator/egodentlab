'use client';
import { useState, useMemo } from 'react';

const NEEDS_OPTIONS = [
  'Price List',
  'Order Form (Lab Ticket)',
  'Starter Pack Labels',
  'Courier Collection Setup',
];

export default function RequestForm() {
  const [clinic, setClinic]   = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const [message, setMessage] = useState('');
  const [needs, setNeeds]     = useState([]);

  const [loading, setLoading] = useState(false);
  const [ok, setOk]           = useState(false);
  const [error, setError]     = useState('');

  // dacă vrei vreodată “minimal” pentru demo: NEXT_PUBLIC_SIMPLE_REQUEST_FORM=1
  const simple = useMemo(
    () => (process.env.NEXT_PUBLIC_SIMPLE_REQUEST_FORM || '0') === '1',
    []
  );

  const toggleNeed = (label) =>
    setNeeds((prev) => (prev.includes(label) ? prev.filter(n => n !== label) : [...prev, label]));

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true); setOk(false); setError('');
    try {
      const body = { clinic, email, phone, needs, message };
      const res  = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        setOk(true); setClinic(''); setEmail(''); setPhone(''); setNeeds([]); setMessage('');
      } else {
        setError(data?.error || 'send_failed');
      }
    } catch {
      setError('network_error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="form-wrap">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label">Clinic / Practice</label>
          <input
            className="input"
            placeholder="e.g. Smile Dental"
            value={clinic}
            onChange={(e) => setClinic(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            placeholder="name@clinic.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {!simple && (
          <>
            <div>
              <label className="label">Phone</label>
              <input
                className="input"
                placeholder="+44 ..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="label">What do you need?</label>
              <div className="box needs">
                {NEEDS_OPTIONS.map((opt) => (
                  <label key={opt} className="ck">
                    <input
                      type="checkbox"
                      checked={needs.includes(opt)}
                      onChange={() => toggleNeed(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="label">Message</label>
              <textarea
                className="textarea"
                placeholder="Anything specific?"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </>
        )}
      </div>

      <div className="actions">
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Sending…' : 'Send request'}
        </button>
        {ok && <p className="msg ok">Thanks! We’ll email you shortly.</p>}
        {!ok && error && <p className="msg err">Error: {error}.</p>}
      </div>

      <style jsx>{`
        .form-wrap { margin-top: 1rem; }
        .label { display:block; font-size:0.9rem; margin-bottom:0.4rem; opacity:0.85; }
        .input, .textarea {
          width:100%; background:#1a1a1a; color:#fff; border:1px solid #333;
          padding:0.65rem 0.8rem; border-radius:8px; outline:none;
        }
        .input:focus, .textarea:focus { border-color:#555; }
        .box.needs {
          display:grid; grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
          gap:0.6rem; padding:0.75rem; background:#121212; border:1px solid #333; border-radius:10px;
        }
        .ck { display:flex; gap:0.5rem; align-items:center; font-size:0.95rem; }
        .actions { display:flex; gap:1rem; align-items:center; margin-top:1rem; }
        .btn { background:#ffffff14; color:#fff; border:1px solid #333; padding:0.6rem 1rem; border-radius:10px; }
        .btn[disabled] { opacity:0.6; cursor:not-allowed; }
        .msg { font-size:0.95rem; }
        .ok  { color:#41d39e; }
        .err { color:#ff6b6b; }
      `}</style>
    </form>
  );
}
