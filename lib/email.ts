import nodemailer from "nodemailer";

type EmailPayload = {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

const {
  SMTP_HOST,
  SMTP_PORT = "587",
  SMTP_SECURE = "false",
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM,
  EMAIL_TO = "info@ekbhr.com"
} = process.env;

const isEmailConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

const transporter = isEmailConfigured
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number.parseInt(SMTP_PORT, 10),
      secure: SMTP_SECURE === "true",
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    })
  : null;

export async function sendEmail({ subject, text, html, replyTo }: EmailPayload) {
  if (!isEmailConfigured || !transporter) {
    console.warn("Email not configured. Set SMTP_* and EMAIL_FROM env vars to enable notifications.");
    console.info({ subject, text });
    return;
  }

  await transporter.sendMail({
    from: EMAIL_FROM ?? SMTP_USER,
    to: EMAIL_TO,
    subject,
    text,
    html,
    replyTo
  });
}

