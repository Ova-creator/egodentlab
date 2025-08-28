'use client';
import { useState } from 'react';

export default function RequestForm() {
  const [form, setForm] = useState({
    clinic: '',
    email: '',
    phone: '',
    needs: {
      'Price List': true,
      'Order Form (Lab Ticket)': false,
      'Starter Pack Labels': false,
      'Courier Collection Setup': false,
    },
    message: '',
    updates: false,
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    note: null,
  });

  const errorText = (code) => ({
    clinic_email_required: 'Clinic and Email are required.',
    invalid_email: 'Please enter a valid email address.',
    network_error: 'Network error. Please try again.',
    bad_json: 'Unexpected server response.',
  }[code] || code);

  async function handleSubmit() {
    if (status.loading) return;

    // --- VALIDATION ---
    const clinic = (form.clinic || '').trim();
    const email = (form.email || '').trim();
    if (!clinic || !email) {
      setStatus({ loading: false, success: false, error: 'clinic_email_required', note: null });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setStatus({ loading: false, success: false, error: 'invalid_email', note: null });
      return;
    }

    setStatus({ loading: true, success: false, error: null, note: null });

    const payload = {
      clinic,
      email,
      phone: form.phone || '',
      needs: Object.entries(form.needs).filter(([, v]) => v).map(([k]) => k),
      message: form.message || '',
      website: '' // honeypot
    };

    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let json;
      try { json = JSON.parse(text); } catch { throw new Error('bad_json'); }

      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || 'network_error');
      }

      setStatus({
        loading: false,
        success: true,
        error: null,
        note: json.emailed ? null : 'Saved. Email queued/temporary issue.',
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err?.message || 'network_error',
        note: null,
      });
    }
  }

  return (
    <div className="space-y-4">{/* notă: FĂRĂ <form> nativ */}
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm opacity-80">Clinic / Practice</span>
          <input
            className="mt-1 w-full bg-black/20 px-3 py-2 rounded"
            value={form.clinic}
            onChange={e => setForm(f => ({ ...f, clinic: e.target.value }))}
            placeholder="e.g. Smile Dental"
          />
        </label>

        <label className="block">
          <span className="text-sm opacity-80">Email</span>
          <input
            className="mt-1 w-full bg-black/20 px-3 py-2 rounded"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            inputMode="email"
            placeholder="name@clinic.com"
          />
        </label>
      </div>

      {/* adaugă aici restul câmpurilor (phone / needs / message) dacă le vrei vizibile acum */}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status.loading}
        className="rounded bg-white/10 hover:bg-white/20 px-4 py-2"
      >
        {status.loading ? 'Sending…' : 'Send request'}
      </button>

      {status.success && <p className="text-green-500 mt-2">Thanks! We’ll email you shortly.</p>}
      {status.note && <p className="text-amber-500 mt-1">{status.note}</p>}
      {status.error && <p className="text-red-500 mt-2">Error: {errorText(status.error)}</p>}
    </div>
  );
}
