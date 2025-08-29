import { google } from 'googleapis';
import { sendEgoDentEmail } from '../../../lib/email';

export const runtime = 'nodejs';

// ---------- helpers ----------
const asBool = (v) => /^1|true|yes$/i.test(String(v || '').trim());

function getPrivateKey() {
  const raw = process.env.GOOGLE_PRIVATE_KEY || '';
  return raw.includes('\\n') ? raw.replace(/\\n/g, '\n') : raw;
}

function j(status, obj) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function normalizeBody(b) {
  const clinic  = (b?.clinic || b?.name || '').trim();
  const email   = (b?.email || '').trim();
  const phone   = (b?.phone || '').trim();
  const needs   = Array.isArray(b?.needs) ? b.needs : [];
  const message = (b?.message || '').trim();
  return { clinic, email, phone, needs, message };
}

async function sheetsAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '';
  const key = getPrivateKey();
  if (!email || !key) throw new Error('No key or email');
  const auth = new google.auth.JWT(
    email,
    undefined,
    key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );
  await auth.authorize();
  return auth;
}

async function sheetsAppend({ clinic, email, phone, needs, message, ua, origin }) {
  const auth = await sheetsAuth();
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const header = ['Timestamp','Clinic','Email','Phone','Needs','Message','UserAgent','Origin'];
  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId,
    requestBody: { valueInputOption: 'RAW', data: [{ range: 'Requests!A1:H1', values: [header] }] },
  });

  const values = [[
    new Date().toISOString(),
    clinic, email, phone,
    Array.isArray(needs) ? needs.join(', ') : String(needs || ''),
    message,
    ua || '', origin || '',
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Requests!A2',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values },
  });

  return true;
}

// ---------- GET (diagnostic) ----------
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const dbg = url.searchParams.get('debug');

    if (dbg === 'ping') {
      return j(200, { ok: true, ping: 'pong', time: new Date().toISOString() });
    }

    if (dbg === 'email') {
      return j(200, {
        ok: true,
        provider: (process.env.EMAIL_PROVIDER || 'resend'),
        from: process.env.NOTIFY_FROM,
        to: (process.env.NOTIFY_TO || '').split(',').map(s => s.trim()).filter(Boolean),
        keyLen: (process.env.RESEND_API_KEY || '').length,
      });
    }

    if (dbg === 'gauth') {
      const info = {
        haveEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        haveKey: !!getPrivateKey(),
        sheetIdLen: (process.env.SHEETS_SPREADSHEET_ID || '').length,
      };
      try { await sheetsAuth(); info.auth = 'OK'; }
      catch (e) { info.auth = String(e); }
      return j(200, { ok: true, info });
    }

    if (dbg === 'sheet') {
      try {
        await sheetsAppend({
          clinic: 'DIAG',
          email: 'diag@example.com',
          phone: '',
          needs: ['diag'],
          message: 'diag write',
          ua: 'diag',
          origin: 'diag',
        });
        return j(200, { ok: true, wrote: true });
      } catch (e) {
        return j(500, { ok: false, wrote: false, error: String(e) });
      }
    }

    return j(200, { ok: true, health: 'request-endpoint' });
  } catch (e) {
    return j(500, { ok: false, error: String(e) });
  }
}

// ---------- POST (safe mode + graceful fallbacks) ----------
export async function POST(req) {
  try {
    const ua = req.headers.get('user-agent') || '';
    const origin = req.headers.get('origin') || '';
    const body = await req.json().catch(() => null);
    if (!body) return j(400, { ok: false, error: 'bad_json' });

    const data = normalizeBody(body);
    if (!data.clinic || !data.email) return j(400, { ok: false, error: 'clinic_email_required' });
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    if (!emailOk) return j(400, { ok: false, error: 'invalid_email' });

    const DISABLE_SHEETS = asBool(process.env.REQUEST_DISABLE_SHEETS);
    let logged = false;
    if (!DISABLE_SHEETS) {
      try {
        logged = await sheetsAppend({ ...data, ua, origin });
      } catch (e) {
        console.error('Sheets append failed:', e);
        logged = false; // nu blocăm
      }
    }

    let emailed = false;
    try {
      await sendEgoDentEmail({
        clinic: data.clinic,
        email: data.email,
        phone: data.phone,
        needs: data.needs,
        message: data.message,
        sheetUrl: process.env.SHEETS_SPREADSHEET_ID
          ? `https://docs.google.com/spreadsheets/d/${process.env.SHEETS_SPREADSHEET_ID}/edit`
          : undefined,
      });
      emailed = true;
    } catch (e) {
      console.error('Email failed:', e);
      emailed = false;
    }

    // retur "OK" dacă cel puțin una a reușit
    if (emailed || logged) return j(200, { ok: true, emailed, logged });

    return j(500, { ok: false, error: 'send_failed_and_log_failed' });
  } catch (e) {
    console.error('API /request error:', e);
    return j(500, { ok: false, error: String(e) });
  }
}
