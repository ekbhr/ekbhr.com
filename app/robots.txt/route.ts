import { company } from "@/lib/config";

export async function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: ${company.website.url}/sitemap.xml
`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
