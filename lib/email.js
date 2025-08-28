// lib/email.js
import { Resend } from 'resend';

function htmlTemplate({ clinic, email, phone, needs, message, sheetUrl }) {
  const preview = `Needs: ${needs || '—'} | Phone: ${phone || '—'}`;
  return `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5">
    <h2 style="margin:0 0 12px">EgoDent Lab — New Request</h2>
    <p style="margin:0 0 16px;color:#555">${preview}</p>
    <table style="border-collapse:collapse;width:100%;max-width:640px">
      <tr><td style="padding:8px;border:1px solid #eee"><b>Clinic</b></td><td style="padding:8px;border:1px solid #eee">${clinic || '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee"><b>Email</b></td><td style="padding:8px;border:1px solid #eee">${email || '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee"><b>Phone</b></td><td style="padding:8px;border:1px solid #eee">${phone || '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee"><b>Needs</b></td><td style="padding:8px;border:1px solid #eee">${needs || '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee"><b>Message</b></td><td style="padding:8px;border:1px solid #eee">${(message || '').replace(/\n/g,'<br>')}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee"><b>Timestamp</b></td><td style="padding:8px;border:1px solid #eee">${new Date().toISOString()}</td></tr>
    </table>
    ${sheetUrl ? `<p style="margin:16px 0"><a href="${sheetUrl}" target="_blank" rel="noopener" style="display:inline-block;padding:10px 14px;background:#111;color:#fff;text-decoration:none;border-radius:8px">Open Sheet</a></p>` : ''}
  </div>`;
}

export async function sendEgoDentEmail({ clinic='', email='', phone='', needs='', message='', sheetUrl='' } = {}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('Missing RESEND_API_KEY');

  const to = (process.env.NOTIFY_TO || '').split(',').map(s => s.trim()).filter(Boolean);
  if (!to.length) throw new Error('NOTIFY_TO is empty');

  const from = (process.env.NOTIFY_FROM || '').trim() || 'onboarding@resend.dev';
  const subject = `New EgoDent Request — ${clinic || email || 'Unknown'}`;
  const resend = new Resend(apiKey);

  try {
    const res = await resend.emails.send({
      from, to, subject,
      html: htmlTemplate({ clinic, email, phone, needs, message, sheetUrl }),
      reply_to: email || undefined,
    });
    if (res?.error) throw new Error(`[Resend] ${JSON.stringify(res.error)}`);
    return res;
  } catch (e) {
    const payload = e && typeof e === 'object'
      ? { name: e.name, message: e.message, status: e.status, response: e.response?.data }
      : String(e);
    throw new Error(`[ResendThrown] ${typeof payload === 'string' ? payload : JSON.stringify(payload)}`);
  }
}
