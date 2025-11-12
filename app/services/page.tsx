import Link from "next/link";

export const metadata = { title: "Services" };

const items = [
  { href: "/services/monetization", title: "Monetization Management", desc: "Placement strategy, ads.txt hygiene, lazy loading, policy compliance."},
  { href: "/services/header-bidding", title: "Header Bidding Setup", desc: "Prebid.js, Open Bidding, GAM, latency budgets, adapter curation."},
  { href: "/services/yield-optimization", title: "Yield Optimization", desc: "Dynamic floors, A/B testing, geo/section segmentation."},
  { href: "/services/analytics-reporting", title: "Analytics & Reporting", desc: "Dashboards, anomaly alerts, weekly reviews."}
];

export default function Page() {
  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Services That Grow Revenue and Protect UX</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Tailored monetization, yield, and analytics programs engineered to keep Core Web Vitals in the green while you scale revenue.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map(i => (
          <Link key={i.href} href={i.href} className="block rounded-2xl border border-emerald-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-emerald-300">
            <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Capability</div>
            <div className="mt-2 text-lg font-semibold text-brand-primary">{i.title}</div>
            <p className="mt-3 text-sm text-slate-600">{i.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
