import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg space-y-6 py-20 text-center">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-10 shadow-soft">
        <h1 className="text-4xl font-bold text-brand-primary">Page Not Found</h1>
        <p className="mt-3 text-slate-600">The page you’re looking for doesn’t exist. Explore our services or latest insights instead.</p>
      </div>
      <div className="flex justify-center gap-3">
        <Link href="/services" className="rounded-2xl bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-secondary px-4 py-2 font-semibold text-slate-900 shadow-soft transition hover:brightness-110">Our Services</Link>
        <Link href="/blog" className="rounded-2xl border border-emerald-200 bg-white px-4 py-2 font-semibold text-brand-primary shadow-soft transition hover:border-emerald-400">Visit Blog</Link>
      </div>
    </div>
  );
}

