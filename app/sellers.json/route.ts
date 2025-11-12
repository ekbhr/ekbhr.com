import { NextResponse } from "next/server";

export function GET() {
  const body = {
    seller_id: "ekbhr-0001",
    name: "EKBHR PORTAL",
    domain: "ekbhr.com",
    seller_type: "PUBLISHER",
    is_confidential: 0
  };
  return NextResponse.json(body, { headers: { "Cache-Control": "public, max-age=86400, immutable" } });
}
