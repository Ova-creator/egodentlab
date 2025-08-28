"use client";

import { useState } from "react";

export default function RequestForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const FORMSPREE_ENDPOINT =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError("");

    // Dacă endpoint-ul nu e setat, nu trimitem nicăieri
    if (!FORMSPREE_ENDPOINT) {
      setSending(false);
      setError("Missing NEXT_PUBLIC_FORMSPREE_ENDPOINT");
      return;
    }

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name") || "",
      clinic: form.get("clinic") || "",
      email: form.get("email") || "",
      phone: form.get("phone") || "",
      needs: [
        form.get("need_price") ? "Price List" : null,
        form.get("need_labels") ? "Starter Pack Labels" : null,
        form.get("need_ticket") ? "Order Form (Lab Ticket)" : null,
        form.get("need_courier") ? "Courier Collection Setup" : null,
      ].filter(Boolean),
      message: form.get("message") || "",
      marketingOptIn: !!form.get("optin"),
      _subject: "EgoDent Lab — Info Request",
      _origin: typeof window !== "undefined" ? window.location.origin : "",
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      // Formspree răspunde 200/OK pe succes
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Formspree responded ${res.status}: ${txt}`);
      }

      setSent(true);
      (e.currentTarget).reset();
    } catch (err) {
      console.error("request-info send failed:", err);
      setError("send_failed");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Name / Clinic */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="label">Name*</label>
          <input required name="name" className="input" placeholder="Dr. Jane Doe" />
        </div>
        <div>
          <label className="label">Clinic / Practice</label>
          <input name="clinic" className="input" placeholder="Smile Dental" />
        </div>
      </div>

      {/* Email / Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="label">Email*</label>
          <input required type="email" name="email" className="input" placeholder="you@clinic.co.uk" />
        </div>
        <div>
          <label className="label">Phone</label>
          <input name="phone" className="input" placeholder="07..." />
        </div>
      </div>

      {/* Needs checklist */}
      <div>
        <p className="mb-2 text-white/90">What do you need?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 panel p-4 ring-1 ring-white/10">
          <label className="flex items-center gap-3">
            <input type="checkbox" name="need_price" className="checkbox" />
            <span>Price List</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" name="need_labels" className="checkbox" />
            <span>Starter Pack Labels</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" name="need_ticket" className="checkbox" />
            <span>Order Form (Lab Ticket)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" name="need_courier" className="checkbox" />
            <span>Courier Collection Setup</span>
          </label>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="label">Message</label>
        <textarea name="message" rows={5} className="textarea" placeholder="Anything specific?"></textarea>
      </div>

      {/* Opt-in */}
      <label className="flex items-center gap-3">
        <input type="checkbox" name="optin" className="checkbox" />
        <span>I’d like occasional updates by email.</span>
      </label>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <button
          disabled={sending}
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold disabled:opacity-50"
        >
          {sending ? "Sending..." : "Send request"}
        </button>

        {sent && <span className="text-emerald-400">Thanks! We’ll email you shortly.</span>}
        {error && <span className="text-rose-400">Error: {error}</span>}
      </div>
    </form>
  );
}
