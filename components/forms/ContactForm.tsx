"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<null | "ok" | "err">(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    setStatus(res.ok ? "ok" : "err");
    if (res.ok) {
      (e.currentTarget as HTMLFormElement).reset();
      window.location.href = "/thank-you";
      return;
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <input required name="name" placeholder="Name *" className="border rounded-2xl px-3 py-2" />
      <input required name="email" type="email" placeholder="Email *" className="border rounded-2xl px-3 py-2" />
      <input name="website" type="url" placeholder="Website" className="border rounded-2xl px-3 py-2" />
      <textarea required name="message" rows={5} placeholder="How can we help?" className="border rounded-2xl px-3 py-2"></textarea>
      <button className="w-max rounded-2xl bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-secondary px-5 py-2.5 font-semibold text-slate-900 shadow-soft transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
        Send
      </button>
      {status === "ok" && <p className="text-green-700">Thanks! Redirecting…</p>}
      {status === "err" && <p className="text-red-700">Something went wrong. Please try again.</p>}
    </form>
  );
}

