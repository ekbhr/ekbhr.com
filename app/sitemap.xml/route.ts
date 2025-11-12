import { company } from "@/lib/config";

const urls = [
  "", "about", "services", "technology", "publishers", "case-studies", "blog", "contact", "privacy-policy", "terms-of-service"
];
export async function GET() {
  const origin = company.website.url;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>${origin}/${u}</loc></url>`).join("")}
  </urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
