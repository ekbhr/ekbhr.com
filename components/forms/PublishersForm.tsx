'use client';

import { useState } from "react";

export function PublishersForm() {
  const [status, setStatus] = useState<null | "ok" | "err">(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/lead", { method: "POST", body: form });
    setStatus(res.ok ? "ok" : "err");
    if (res.ok) {
      (e.currentTarget as HTMLFormElement).reset();
      window.location.href = "/thank-you";
      return;
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <label className="grid gap-1">
        <span>Website URL *</span>
        <input required name="website" type="url" className="border rounded-2xl px-3 py-2" placeholder="https://example.com" />
      </label>
      <label className="grid gap-1">
        <span>Monthly Pageviews *</span>
        <input required name="monthly_pageviews" type="number" min="0" className="border rounded-2xl px-3 py-2" />
      </label>
      <label className="grid gap-1">
        <span>Top GEOs *</span>
        <input required name="top_geos" type="text" className="border rounded-2xl px-3 py-2" placeholder="US, AE, UK" />
      </label>
      <label className="grid gap-1">
        <span>CMS</span>
        <input name="cms" type="text" className="border rounded-2xl px-3 py-2" placeholder="WordPress / Custom / Other" />
      </label>
      <label className="grid gap-1">
        <span>Email *</span>
        <input required name="email" type="email" className="border rounded-2xl px-3 py-2" />
      </label>
      <label className="grid gap-1">
        <span>Notes</span>
        <textarea name="notes" className="border rounded-2xl px-3 py-2" rows={4} placeholder="Tell us anything important" />
      </label>
      <button className="w-max rounded-2xl bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-secondary px-5 py-2.5 font-semibold text-slate-900 shadow-soft transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
        Request Free Audit
      </button>
      {status === "ok" && <p className="text-green-700">Thanks! Redirecting…</p>}
      {status === "err" && <p className="text-red-700">Something went wrong. Please try again.</p>}
    </form>
  );
}

