import { PublishersForm } from "@/components/forms/PublishersForm";

export const metadata = { title: "For Publishers" };

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Start Here — Free Monetization Audit</h1>
        <p className="mt-3 text-slate-600">
          Submit your site and we’ll share a quick audit focusing on demand setup, layout, and Core Web Vitals improvements.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Need help fast? Email <a className="font-semibold text-brand-primary underline" href="mailto:info@ekbhr.com">info@ekbhr.com</a> or message{" "}
          <a className="font-semibold text-brand-primary underline" href="tel:+971545100593">+971 54 510 0593</a>.
        </p>
      </div>
      <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <h2 className="text-xl font-semibold text-brand-primary">Request Your Audit</h2>
        <p className="mt-2 text-sm text-slate-500">We respond within one business day.</p>
        <PublishersForm />
      </div>
    </div>
  );
}
