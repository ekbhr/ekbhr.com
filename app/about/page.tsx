import { CTAButton } from "@/components/CTAButton";
import { company } from "@/lib/config";

export const metadata = { title: "About" };

export default function Page() {
  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Built for Publishers. Focused on Outcomes.</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          We&apos;re a specialized publisher monetization team helping digital publishers maximize ad revenue while maintaining exceptional user experience and Core Web Vitals scores.
        </p>
      </div>

      <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary">Who We Are</h2>
        <p className="mt-4 text-slate-600">
          {company.name} is a publisher monetization and ad operations consultancy based in {company.address.full}. We specialize in programmatic advertising, header bidding implementations, and yield optimization for publishers who want to grow revenue without compromising site speed or user experience.
        </p>
        <p className="mt-4 text-slate-600">
          Our team combines deep technical expertise in ad tech stacks (Prebid.js, Google Ad Manager, Open Bidding) with a focus on performance engineering. We understand that in today&apos;s landscape, revenue optimization must work hand-in-hand with Core Web Vitals compliance.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-soft">
          <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Our Expertise</div>
          <h3 className="mt-3 text-lg font-semibold text-brand-primary">Publisher Monetization</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Header bidding setup & optimization</li>
            <li>• Yield management & floor pricing</li>
            <li>• Ad placement strategy</li>
            <li>• Revenue analytics & reporting</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-soft">
          <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Our Approach</div>
          <h3 className="mt-3 text-lg font-semibold text-brand-primary">Performance-First</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Core Web Vitals optimization</li>
            <li>• Privacy & consent compliance</li>
            <li>• Transparent operations</li>
            <li>• Data-driven decision making</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary">What We Believe</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { 
              title: "Speed = Revenue", 
              desc: "Fast sites rank better, convert better, and monetize better. We engineer solutions that keep LCP under 2.5s and CLS under 0.05." 
            },
            { 
              title: "Transparency", 
              desc: "You own your data, your relationships, and your stack. We provide clear reporting and full visibility into every optimization." 
            },
            { 
              title: "Privacy by Design", 
              desc: "GDPR, CCPA, and consent management aren&apos;t afterthoughts—they&apos;re built into every implementation from day one." 
            }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/80 p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-brand-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary">Our Footprint</h2>
        <div className="mt-4 space-y-3 text-slate-600">
          <p>
            <span className="font-semibold text-brand-primary">Headquarters:</span> {company.address.full}
          </p>
          <p>
            <span className="font-semibold text-brand-primary">Service Area:</span> Global (serving publishers worldwide)
          </p>
          <p>
            <span className="font-semibold text-brand-primary">Focus:</span> Digital publishers, media companies, content platforms, and ad-supported websites
          </p>
        </div>
        <div className="mt-6">
          <CTAButton href="/contact">Get in Touch</CTAButton>
        </div>
      </section>
    </div>
  );
}
