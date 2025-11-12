import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

const sanitize = (value: FormDataEntryValue | null | undefined) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(req: Request) {
  const incoming = await req.formData();

  const website = sanitize(incoming.get("website"));
  const monthlyPageviews = sanitize(incoming.get("monthly_pageviews"));
  const topGeos = sanitize(incoming.get("top_geos"));
  const cms = sanitize(incoming.get("cms"));
  const email = sanitize(incoming.get("email"));
  const notes = sanitize(incoming.get("notes"));

  if (!website || !monthlyPageviews || !topGeos || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const subject = `New Publisher Audit Request — ${website}`;
  const text = [
    `Website: ${website}`,
    `Monthly Pageviews: ${monthlyPageviews}`,
    `Top GEOs: ${topGeos}`,
    `CMS: ${cms || "n/a"}`,
    `Email: ${email}`,
    notes ? `Notes: ${notes}` : null
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
    console.error("Lead email failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
