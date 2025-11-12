import Link from "next/link";
export const metadata = { title: "Case Studies" };

const data = [
  { slug: "news-publisher-geo-us", title: "US News Publisher", result: "+22% RPM in 60 days" }
];

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Case Studies</h1>
        <p className="mt-3 text-sm text-slate-600">See how publishers improved revenue, viewability, and Core Web Vitals with EKBHR PORTAL.</p>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2">
        {data.map(item => (
          <li key={item.slug} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-emerald-300">
            <div className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Outcome</div>
            <div className="mt-2 text-lg font-semibold text-brand-primary">{item.title}</div>
            <p className="mt-2 text-sm text-slate-600">{item.result}</p>
            <Link className="mt-3 inline-block text-sm font-semibold text-brand-primary underline" href={`/case-studies/${item.slug}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
