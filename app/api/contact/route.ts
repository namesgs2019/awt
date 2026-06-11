import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Kept only for server-capable deployments. GitHub Pages is static hosting,
// so the public contact form posts to NEXT_PUBLIC_FORMSPREE_ENDPOINT instead.
function getContactRecipients() {
  const configuredRecipients = process.env.CONTACT_RECIPIENTS?.split(",") ?? [];
  const uniqueRecipients = new Set<string>();

  configuredRecipients
    .map((recipient) => recipient.trim())
    .filter(Boolean)
    .forEach((recipient) => uniqueRecipients.add(recipient));

  return Array.from(uniqueRecipients);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = payload.name?.trim() || "";
  const email = payload.email?.trim() || "";
  const subject = payload.subject?.trim() || "";
  const message = payload.message?.trim() || "";

  if (!name || !email || !subject || message.length < 10 || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid contact form input" }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const contactRecipients = getContactRecipients();

  if (!host || !user || !pass || !from || contactRecipients.length === 0) {
    return NextResponse.json({ error: "SMTP configuration is missing." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const body = [
    "New inquiry from AWT website",
    "",
    "Name:",
    name,
    "",
    "Email:",
    email,
    "",
    "Subject:",
    subject,
    "",
    "Message:",
    message
  ].join("\n");

  const html = `
    <h2>New inquiry from AWT website</h2>
    <p><strong>Name:</strong><br />${escapeHtml(name)}</p>
    <p><strong>Email:</strong><br />${escapeHtml(email)}</p>
    <p><strong>Subject:</strong><br />${escapeHtml(subject)}</p>
    <p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  await transporter.sendMail({
    from,
    to: contactRecipients,
    replyTo: email,
    subject: `[AWT Website Inquiry] ${subject}`,
    text: body,
    html
  });

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
