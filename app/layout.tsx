import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(company.website.url),
  title: {
    default: `${company.name} — Publisher Monetization & Ad Ops`,
    template: `%s | ${company.name}`
  },
  description: "Monetize smarter with header bidding, yield optimization, and Core Web Vitals engineering.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
  other: {
    "yandex-verification": "sg4cemj59rgxkfxd"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-100 via-white to-emerald-50 text-slate-900 antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 rounded bg-white p-2 text-black">Skip to content</a>
        <Header />
        <main id="main" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
