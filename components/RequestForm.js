'use client';
import { useState } from 'react';

export default function RequestForm() {
  const [form, setForm] = useState({
    clinic: '',
    email: '',
    phone: '',
    needs: { 'Price List': true, 'Order Form (Lab Ticket)': false, 'Starter Pack Labels': false, 'Courier Collection Setup': false },
    message: '',
    updates: false,
  });
  const [status, setStatus] = useState({ loading:false, error:null, success:false, note:null });

  function toggleNeed(key) {
    setForm(f => ({ ...f, needs: { ...f.needs, [key]: !f.needs[key] } }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ loading:true, error:null, success:false, note:null });

    const payload = {
      clinic: form.clinic || '',
      email: form.email || '',
      phone: form.phone || '',
      needs: Object.entries(form.needs).filter(([,v]) => v).map(([k]) => k),
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
        loading:false,
        error:null,
        success:true,
        note: json.emailed ? null : 'Saved. Email queued/temporary issue.',
      });
    } catch (err) {
      setStatus({ loading:false, error: err?.message || 'network_error', success:false, note:null });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Clinic / Practice</label>
          <input className="w-full rounded border px-3 py-2 bg-transparent" value={form.clinic}
                 onChange={e=>setForm({...form, clinic:e.target.value})} placeholder="Clinic name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email*</label>
          <input className="w-full rounded border px-3 py-2 bg-transparent" value={form.email}
                 onChange={e=>setForm({...form, email:e.target.value})} placeholder="you@example.com" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input className="w-full rounded border px-3 py-2 bg-transparent" value={form.phone}
                 onChange={e=>setForm({...form, phone:e.target.value})} placeholder="+44 ..." />
        </div>
      </div>

      <fieldset className="rounded border p-4">
        <legend className="px-2 text-sm">What do you need?</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Object.keys(form.needs).map(k => (
            <label key={k} className="inline-flex items-center gap-2">
              <input type="checkbox" checked={form.needs[k]} onChange={()=>toggleNeed(k)} />
              <span>{k}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea className="w-full rounded border px-3 py-2 bg-transparent" rows={4}
                  value={form.message} onChange={e=>setForm({...form, message:e.target.value})}
                  placeholder="Anything specific?" />
      </div>

      <label className="inline-flex items-center gap-2">
        <input type="checkbox" checked={form.updates} onChange={e=>setForm({...form, updates:e.target.checked})} />
        <span>I’d like occasional updates by email.</span>
      </label>

      <button
        type="submit"
        disabled={status.loading}
        className="rounded bg-white/10 hover:bg-white/20 px-4 py-2"
      >
        {status.loading ? 'Sending…' : 'Send request'}
      </button>

      {status.success && <p className="text-green-500 mt-2">Request sent. We’ll reply by email shortly.</p>}
      {status.note && <p className="text-amber-500 mt-1">{status.note}</p>}
      {status.error && <p className="text-red-500 mt-2">Error: {status.error}</p>}
    </form>
  );
}
