// lib/email.js
import { Resend } from 'resend';

export async function sendEgoDentEmail({
  clinic,
  email,
  phone,
  needs = [],
  message = '',
  sheetUrl,
}) {
  const provider = (process.env.EMAIL_PROVIDER || 'resend').toLowerCase();

  if (provider !== 'resend') {
    throw new Error(`Unsupported EMAIL_PROVIDER: ${provider}`);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NOTIFY_FROM || 'onboarding@resend.dev';
  const to = (process.env.NOTIFY_TO || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  if (!apiKey) throw new Error('Missing RESEND_API_KEY');
  if (!to.length) throw new Error('Missing NOTIFY_TO');

  const resend = new Resend(apiKey);

  const subject = 'EgoDent Lab — New Request';
  const needsStr = Array.isArray(needs) ? needs.join(', ') : String(needs || '');

  const html = `
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.45;color:#111">
    <tr><td style="padding:20px 0;font-size:20px;font-weight:700">EgoDent Lab — New Request</td></tr>
    <tr><td>
      <table width="100%" cellpadding="8" cellspacing="0" style="border:1px solid #eee;border-radius:8px">
        <tr><td width="30%" style="background:#fafafa;border-bottom:1px solid #eee">Clinic</td><td style="border-bottom:1px solid #eee">${escapeHtml(clinic)}</td></tr>
        <tr><td style="background:#fafafa;border-bottom:1px solid #eee">Email</td><td style="border-bottom:1px solid #eee">${escapeHtml(email)}</td></tr>
        <tr><td style="background:#fafafa;border-bottom:1px solid #eee">Phone</td><td style="border-bottom:1px solid #eee">${escapeHtml(phone || '—')}</td></tr>
        <tr><td style="background:#fafafa;border-bottom:1px solid #eee">Needs</td><td style="border-bottom:1px solid #eee">${escapeHtml(needsStr || '—')}</td></tr>
        <tr><td style="background:#fafafa;border-bottom:1px solid #eee">Message</td><td style="border-bottom:1px solid #eee">${escapeHtml(message || '—')}</td></tr>
        <tr><td style="background:#fafafa">Timestamp</td><td>${new Date().toISOString()}</td></tr>
      </table>
    </td></tr>
    ${sheetUrl ? `
    <tr><td style="padding-top:16px">
      <a href="${sheetUrl}" style="display:inline-block;padding:10px 14px;background:#111;color:#fff;text-decoration:none;border-radius:6px">Open Sheet</a>
    </td></tr>` : ''}
  </table>
  `;

  const res = await resend.emails.send({
    from,
    to,
    subject,
    html,
  });

  if (!res || res.error) {
    throw new Error(`Resend error: ${res?.error || 'unknown'}`);
  }
  return res;
}

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');
}
