import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    // Minimal validation
    if (!data?.email || !data?.name) {
      return NextResponse.json(
        { ok: false, error: "Name and Email are required." },
        { status: 400 }
      );
    }

    const selected = Array.isArray(data.requests) && data.requests.length
      ? data.requests.join(", ")
      : "General request";

    const subject = `Website request: ${selected}`;

    const html = `
      <h2>New request from website</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Clinic/Practice:</b> ${data.clinic || "-"}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "-"}</p>
      <p><b>Requested:</b> ${selected}</p>
      <p><b>Message:</b><br/>${(data.message || "").replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p><i>GDPR:</i> ${data.newsletter ? "User opted-in for email updates." : "No newsletter opt-in."}</p>
    `;

    const text = `
New request from website
Name: ${data.name}
Clinic/Practice: ${data.clinic || "-"}
Email: ${data.email}
Phone: ${data.phone || "-"}
Requested: ${selected}
Message:
${data.message || "-"}

GDPR: ${data.newsletter ? "newsletter opt-in" : "no opt-in"}
    `.trim();

    // SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_PORT) === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || "lab@egodent.co.uk";
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "EgoDent Lab <lab@egodent.co.uk>",
      to,
      subject,
      text,
      html,
      replyTo: data.email, // so you can reply directly
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("REQUEST EMAIL ERROR:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
