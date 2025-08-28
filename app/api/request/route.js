import { google } from 'googleapis';
import { sendEgoDentEmail } from '../../../lib/email';

export const runtime = 'nodejs';

function json(status, obj) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function normalizeBody(body) {
  const clinic = (body.clinic || body.name || '').trim();
  const email  = (body.email || '').trim();
  const phone  = (body.phone || '').trim();
  const needs  = Array.isArray(body.needs) ? body.needs : [];
  const message = (body.message || '').trim();
  return { clinic, email, phone, needs, message };
}

async function sheetsAppendRow({ clinic, email, phone, needs, message, ua, origin }) {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    undefined,
    (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const header = ['Timestamp','Clinic','Email','Phone','Needs','Message','UserAgent','Origin'];
  const values = [[
    new Date().toISOString(),
    clinic,
    email,
    phone,
    needs.join(', '),
    message,
    ua || '',
    origin || '',
  ]];

  // asigurăm headerul pe foaia "Requests"
  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId,
    requestBody: {
      valueInputOption: 'RAW',
      data: [{
        range: 'Requests!A1:H1',
        values: [header],
      }],
    },
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Requests!A2',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values },
  });
}

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const diag = url.searchParams.get('email');
    if (diag === 'diag') {
      return json(200, {
        ok: true,
        provider: process.env.EMAIL_PROVIDER || 'resend',
        from: process.env.NOTIFY_FROM,
        to: (process.env.NOTIFY_TO || '').split(',').map(s => s.trim()).filter(Boolean),
        keyLen: (process.env.RESEND_API_KEY || '').length,
      });
    }
    return json(200, { ok: true, health: 'request-endpoint' });
  } catch (e) {
    return json(500, { ok: false, error: String(e) });
  }
}

export async function POST(req) {
  try {
    const ua = req.headers.get('user-agent') || '';
    const origin = req.headers.get('origin') || '';
    const body = await req.json().catch(() => null);
    if (!body) return json(400, { ok: false, error: 'bad_json' });

    const data = normalizeBody(body);

    if (!data.clinic || !data.email) {
      return json(400, { ok: false, error: 'clinic_email_required' });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    if (!emailOk) {
      return json(400, { ok: false, error: 'invalid_email' });
    }

    // 1) Sheets
    await sheetsAppendRow({ ...data, ua, origin });

    // 2) Email
    let emailed = false;
    try {
      await sendEgoDentEmail({
        clinic: data.clinic,
        email: data.email,
        phone: data.phone,
        needs: data.needs,
        message: data.message,
        sheetUrl: `https://docs.google.com/spreadsheets/d/${process.env.SHEETS_SPREADSHEET_ID}/edit`,
      });
      emailed = true;
    } catch (e) {
      emailed = false; // nu blocăm succesul din cauza emailului
    }

    return json(200, { ok: true, emailed });
  } catch (err) {
    return json(500, { ok: false, error: String(err) });
  }
}
