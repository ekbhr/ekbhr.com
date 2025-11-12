export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Post: {params.slug.replaceAll("-", " ")}</h1>
        <p className="mt-3 text-sm text-slate-600">Add an intro summary, hero image, and metadata once the article is ready.</p>
      </div>
      <article className="prose prose-slate max-w-none rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <p>Intro …</p>
        <h2>Prioritize LCP Elements</h2>
        <h2>Control CLS with Fixed Slots</h2>
        <h2>Prebid Timeouts & Latency Budgets</h2>
        <h2>Fonts & Measurement</h2>
        <h2>Key Takeaways</h2>
      </article>
    </div>
  );
}
