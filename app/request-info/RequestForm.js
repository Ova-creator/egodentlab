"use client";
import { useState } from "react";

export default function RequestForm() {
  const [state, setState] = useState({ loading: false, ok: false, error: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ loading: true, ok: false, error: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const requests = formData.getAll("requests");

    const payload = {
      name: formData.get("name")?.toString().trim(),
      clinic: formData.get("clinic")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
      requests,
      newsletter: formData.get("newsletter") === "on",
      website: formData.get("website")?.toString().trim(), // honeypot for bots
    };

    // simple anti-bot: if honeypot has value, pretend success
    if (payload.website) {
      setState({ loading: false, ok: true, error: "" });
      form.reset();
      return;
    }

    const res = await fetch("/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setState({ loading: false, ok: false, error: j.error || "Failed to send." });
      return;
    }

    setState({ loading: false, ok: true, error: "" });
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 max-w-2xl">
      {/* Honeypot (hidden) */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name*</label>
          <input name="name" required className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Clinic / Practice</label>
          <input name="clinic" className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email*</label>
          <input type="email" name="email" required className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input name="phone" className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2" />
        </div>
      </div>

      <fieldset className="rounded-2xl p-4 border border-white/10 bg-black/20">
        <legend className="text-sm opacity-80 px-2">What do you need?</legend>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" name="requests" value="Price List" /> <span>Price List</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" name="requests" value="Order Form (Lab Ticket)" /> <span>Order Form (Lab Ticket)</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" name="requests" value="Starter Pack Labels" /> <span>Starter Pack Labels</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" name="requests" value="Courier Collection Setup" /> <span>Courier Collection Setup</span>
          </label>
        </div>
      </fieldset>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea name="message" rows={4} className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2" />
      </div>

      <label className="inline-flex items-center gap-2">
        <input type="checkbox" name="newsletter" /> <span>I’d like occasional updates by email.</span>
      </label>

      <div className="flex items-center gap-3">
        <button
          disabled={state.loading}
          className="rounded-xl px-4 py-2 bg-white text-black hover:bg-white/90 disabled:opacity-50"
        >
          {state.loading ? "Sending…" : "Send request"}
        </button>
        {state.ok && <span className="text-emerald-400">Thanks! Your request was sent.</span>}
        {state.error && <span className="text-red-400">Error: {state.error}</span>}
      </div>
    </form>
  );
}
