export const metadata = { title: "Thank You" };

export default function Page() {
  return (
    <div className="mx-auto max-w-xl space-y-6 text-center">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Thanks — We’ll Review Your Submission</h1>
        <p className="mt-3 text-slate-600">
          Our team will get back to you within one business day. You can also reach us directly at{" "}
          <a className="font-semibold text-brand-primary underline" href="mailto:info@ekbhr.com">info@ekbhr.com</a>.
        </p>
      </div>
      <a className="inline-flex items-center rounded-2xl px-5 py-2.5 bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-secondary font-semibold text-slate-900 shadow-soft transition hover:brightness-110" href="/">Back to Home</a>
    </div>
  );
}

