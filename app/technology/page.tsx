export const metadata = { title: "Technology" };

export default function Page() {
  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Technology & Integrations</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          A modern, transparent ad tech stack engineered for Core Web Vitals compliance, privacy regulations, and maximum yield.
        </p>
      </div>

      <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary">Core Ad Tech Stack</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-brand-surface/30 p-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Header Bidding</div>
            <h3 className="mt-2 text-lg font-semibold text-brand-primary">Prebid.js</h3>
            <p className="mt-2 text-sm text-slate-600">
              Curated adapter selection, timeout management, and latency budgets optimized for your traffic patterns.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-brand-surface/30 p-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Ad Server</div>
            <h3 className="mt-2 text-lg font-semibold text-brand-primary">Google Ad Manager</h3>
            <p className="mt-2 text-sm text-slate-600">
              Open Bidding, SRA, dynamic floor pricing, and transparent reporting with full inventory control.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-brand-surface/30 p-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Consent Management</div>
            <h3 className="mt-2 text-lg font-semibold text-brand-primary">TCF v2.2 / CCPA</h3>
            <p className="mt-2 text-sm text-slate-600">
              Privacy-first consent frameworks with seamless integration into the ad stack and analytics.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-brand-surface/30 p-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Analytics</div>
            <h3 className="mt-2 text-lg font-semibold text-brand-primary">Privacy-Safe Reporting</h3>
            <p className="mt-2 text-sm text-slate-600">
              Lightweight, compliant analytics with anomaly detection and automated performance alerts.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary">Performance Engineering</h2>
        <p className="mt-3 text-sm text-slate-600">
          Every implementation includes Core Web Vitals guardrails and performance budgets.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { metric: "< 2.5s", label: "LCP Target" },
            { metric: "< 0.05", label: "CLS Target" },
            { metric: "< 200ms", label: "FID Target" },
            { metric: "System Fonts", label: "No Render Blocking" }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/80 p-4 text-center shadow-soft">
              <div className="text-2xl font-bold text-brand-primary">{item.metric}</div>
              <div className="mt-1 text-xs text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            "Lazy loading & priority hints",
            "System font stack (no external fonts)",
            "Optimized image formats (AVIF/WebP)"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/40 bg-white/70 p-4 text-sm font-medium text-brand-primary shadow-soft">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary">Compliance & Standards</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-primary">Privacy Regulations</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">✓</span>
                <span>GDPR / TCF v2.2 compliance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">✓</span>
                <span>CCPA (California Consumer Privacy Act)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">✓</span>
                <span>COPPA (where applicable)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-primary">Industry Standards</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">✓</span>
                <span>ads.txt & sellers.json hygiene</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">✓</span>
                <span>IAB standards & best practices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">✓</span>
                <span>Transparent supply chain</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary">Demand Partners & SSPs</h2>
        <p className="mt-3 text-sm text-slate-600">
          We integrate with premium demand sources and SSPs to maximize fill rates and CPMs.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["Google Display", "SEDO", "Yandex", "Premium SSPs", "Direct Advertisers", "Private Marketplaces"].map((partner) => (
            <div key={partner} className="rounded-2xl border border-white/40 bg-white/70 p-4 text-center text-sm font-semibold text-brand-primary shadow-soft">
              {partner}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
