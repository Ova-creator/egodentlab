export const runtime = 'nodejs';

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { sendEgoDentEmail } from '../../../lib/email';

// ---------- CORS helpers ----------
function allowedOrigin() {
  // în dev: * ; în prod setează https://egodentlab.vercel.app
  return process.env.NEXT_PUBLIC_SITE_URL || '*';
}
function jsonHeaders() {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': allowedOrigin(),
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store',
  };
}
export async function OPTIONS() {
  return new Response(null, { status: 204, headers: jsonHeaders() });
}

// ---------- Google Sheets helpers ----------
function sanitizeKey(k) {
  if (!k) return '';
  return k.replace(/\\n/g, '\n').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
}
function loadGoogleCreds() {
  const envEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '';
  const envKey   = sanitizeKey(process.env.GOOGLE_PRIVATE_KEY || '');
  const envOk = envEmail.includes('.iam.gserviceaccount.com') && envKey.includes('BEGIN PRIVATE KEY');

  if (envOk) return { clientEmail: envEmail, privateKey: envKey, source: 'env' };

  // fallback la keys/sa.json doar dacă ENV nu e valid
  try {
    const saPath = path.join(process.cwd(), 'keys', 'sa.json');
    const sa = JSON.parse(fs.readFileSync(saPath, 'utf8'));
    return { clientEmail: sa.client_email || '', privateKey: sanitizeKey(sa.private_key || ''), source: 'file' };
  } catch {
    throw new Error('No valid Google credentials found (ENV nor keys/sa.json).');
  }
}
async function makeSheetsClient() {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID || '';
  if (!spreadsheetId) throw new Error('Missing SHEETS_SPREADSHEET_ID');

  const { clientEmail, privateKey } = loadGoogleCreds();
  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: clientEmail, private_key: privateKey },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const client = await auth.getClient();
  return { sheets: google.sheets({ version: 'v4', auth: client }), spreadsheetId };
}

// ---------- GET (health & diag) ----------
export async function GET(req) {
  try {
    const url = new URL(req.url);

    if (url.searchParams.get('email') === 'diag') {
      const from = (process.env.NOTIFY_FROM || '').trim() || 'onboarding@resend.dev';
      const to = (process.env.NOTIFY_TO || '').split(',').map(s => s.trim()).filter(Boolean);
      const keyLen = (process.env.RESEND_API_KEY || '').length;
      return new Response(JSON.stringify({ ok: true, provider: 'resend', from, to, keyLen }), {
        status: 200, headers: jsonHeaders(),
      });
    }

    return new Response(JSON.stringify({ ok: true, health: 'request-endpoint' }), {
      status: 200, headers: jsonHeaders(),
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 500, headers: jsonHeaders(),
    });
  }
}

// ---------- POST (save to Sheets + send email) ----------
export async function POST(req) {
  try {
    const raw = await req.text();
    let body = {};
    try { body = raw ? JSON.parse(raw) : {}; }
    catch { return new Response(JSON.stringify({ ok:false, error:'Invalid JSON' }), { status:400, headers: jsonHeaders() }); }

    // honeypot (anti-spam)
    if (body.website) {
      return new Response(JSON.stringify({ ok:true, saved:false, spam:true }), { status:200, headers: jsonHeaders() });
    }

    const { sheets, spreadsheetId } = await makeSheetsClient();

    const values = [[
      new Date().toISOString(),
      body.clinic || '',
      body.email || '',
      body.phone || '',
      Array.isArray(body.needs) ? body.needs.join(', ') : (body.needs || ''),
      body.message || '',
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Requests!A1',
      valueInputOption: 'RAW',           // NU transforma "+44 ..." în formulă
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values },
    });

    // ---- email (nu blochează salvarea) ----
    let emailed = false;
    let emailError = null;
    try {
      const needsText = Array.isArray(body.needs) ? body.needs.join(', ') : (body.needs || '');
      await sendEgoDentEmail({
        clinic: body.clinic,
        email: body.email,
        phone: body.phone,
        needs: needsText,
        message: body.message,
        sheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
      });
      emailed = true;
    } catch (e) {
      emailError = String(e);
    }

    return new Response(JSON.stringify({ ok: true, saved: true, emailed, emailError }), {
      status: 200, headers: jsonHeaders(),
    });
  } catch (err) {
    console.error('API /request error:', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500, headers: jsonHeaders(),
    });
  }
}
