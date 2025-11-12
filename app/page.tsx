import { CTAButton } from "@/components/CTAButton";

export default function Page() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-primary via-slate-900 to-slate-950 px-6 py-16 text-center text-white shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.35),_transparent_60%)]" aria-hidden="true" />
        <div className="relative space-y-6">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            Publisher Monetization Experts
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Maximize Your Ad Revenue. Smarter & Faster.</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-100/80">
            Programmatic monetization, header bidding, and yield ops engineered around lightning-fast experiences and sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton />
            <CTAButton href="/contact">Talk to an Expert</CTAButton>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-brand-surface/60 p-6 sm:grid-cols-3">
        {[
          { title: "Monetization & Yield Optimization", desc: "Increase RPM and viewability while protecting UX and CLS." },
          { title: "Header Bidding (Prebid / OB / GAM)", desc: "Adapter curation, latency budgets, dynamic floors, and transparent reporting." },
          { title: "Analytics & Reporting", desc: "Privacy-safe dashboards, anomaly alerts, and weekly growth reviews." }
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-emerald-200/60 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-emerald-400">
            <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">What We Do</div>
            <div className="mt-2 text-lg font-semibold text-brand-primary">{c.title}</div>
            <p className="mt-3 text-sm text-slate-600">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary">Trusted Demand & Clean Integrations</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Connected to Google Display, SEDO, Yandex, and premium SSPs with transparent reporting, consent management, and Core Web Vitals guardrails built-in.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["Google Display", "SEDO", "Yandex"].map((partner) => (
            <div key={partner} className="rounded-2xl border border-white/40 bg-white/70 p-4 text-center text-sm font-semibold text-brand-primary shadow-soft">
              {partner}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary">Typical Results</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { metric: "+15–35%", label: "Revenue uplift in 60–90 days" },
            { metric: "+10–20%", label: "Viewability improvement" },
            { metric: "< 0.05", label: "CLS across key templates" }
          ].map((item) => (
            <div key={item.metric} className="rounded-2xl bg-brand-surface p-6 text-center shadow-soft">
              <div className="text-3xl font-bold text-brand-primary">{item.metric}</div>
              <div className="mt-2 text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
