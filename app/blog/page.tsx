import Link from "next/link";
export const metadata = { title: "Blog" };

const posts = [
  { slug: "core-web-vitals-for-ad-heavy-sites", title: "Core Web Vitals for Ad-Heavy Sites: A Practical Checklist", date: "2025-01-15", excerpt: "Keep CLS < 0.05 and LCP < 2.0s while running header bidding." }
];

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Insights & Guides</h1>
        <p className="mt-3 text-sm text-slate-600">Practical strategies for Core Web Vitals, revenue growth, and ad operations excellence.</p>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2">
        {posts.map(p => (
          <li key={p.slug} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-emerald-300">
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600">{p.date}</div>
            <div className="mt-2 text-lg font-semibold text-brand-primary">{p.title}</div>
            <p className="mt-3 text-sm text-slate-600">{p.excerpt}</p>
            <Link className="mt-3 inline-block text-sm font-semibold text-brand-primary underline" href={`/blog/${p.slug}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
