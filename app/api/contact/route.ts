import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

const sanitize = (value: FormDataEntryValue | null | undefined) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(req: Request) {
  const incoming = await req.formData();

  const name = sanitize(incoming.get("name"));
  const email = sanitize(incoming.get("email"));
  const website = sanitize(incoming.get("website"));
  const message = sanitize(incoming.get("message"));

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const subject = `New Contact Inquiry — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    website ? `Website: ${website}` : null,
    "",
    message
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await sendEmail({
      subject,
      text,
      html: text.replace(/\n/g, "<br/>"),
      replyTo: email
    });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
