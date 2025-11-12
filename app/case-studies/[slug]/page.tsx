export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Case Study: {params.slug.replaceAll("-", " ")}</h1>
        <p className="mt-3 text-sm text-slate-600">Add specific background, challenges, and measured outcomes here.</p>
      </div>
      <article className="prose prose-slate max-w-none rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <h2>Context</h2>
        <p>Site type, GEO, traffic band.</p>
        <h2>Challenge</h2>
        <p>Describe the core challenges.</p>
        <h2>Solution</h2>
        <p>Implementation steps with highlights.</p>
        <h2>Results</h2>
        <ul>
          <li>RPM uplift</li>
          <li>Viewability</li>
          <li>CLS/LCP improvements</li>
        </ul>
      </article>
    </div>
  );
}
