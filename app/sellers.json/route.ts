import { NextResponse } from "next/server";
import { company } from "@/lib/config";

export function GET() {
  const body = {
    seller_id: company.seller.sellerId,
    name: company.seller.name,
    domain: company.seller.domain,
    seller_type: "PUBLISHER",
    is_confidential: 0
  };
  return NextResponse.json(body, { headers: { "Cache-Control": "public, max-age=86400, immutable" } });
}
