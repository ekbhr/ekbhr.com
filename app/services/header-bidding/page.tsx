export const metadata = { title: "Header Bidding Setup" };
export default function Page() {
  return (<article className="prose prose-slate max-w-none">
    <h1>Header Bidding Setup (Prebid / OB / GAM)</h1>
    <h2>Integrations</h2>
    <ul>
      <li>Prebid.js with curated adapters & timeouts.</li>
      <li>Google Open Bidding, SRA, floor pricing.</li>
    </ul>
    <h2>Best Practices</h2>
    <ul>
      <li>Latency budgets and consent strings.</li>
      <li>Versioned configs and rollback plans.</li>
    </ul>
  </article>);
}