'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/config";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/publishers", label: "For Publishers" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-[0_8px_24px_rgba(15,23,42,0.06)] before:pointer-events-none before:absolute before:inset-x-0 before:top-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-emerald-300/60 before:to-transparent">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2" aria-label={company.name} onClick={() => setOpen(false)}>
          <Image src="/logo.svg" alt={company.name} width={148} height={32} priority />
        </Link>

        <nav className="hidden items-center gap-8 text-base md:flex">
          {navItems.map((item) => (
            <Link key={item.href} className="text-slate-700 transition hover:text-brand-primary hover:font-semibold" href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-2xl bg-gradient-to-r from-brand-secondary to-brand-accent px-4 py-2 font-semibold text-slate-900 shadow-soft transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
          >
            Free Audit
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-soft transition hover:border-emerald-300 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-4 top-20 rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white via-brand-surface to-sky-50 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-4 text-base">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-slate-700 shadow-soft transition hover:bg-emerald-50 hover:text-brand-primary"
                >
                  {item.label}
                  <span className="text-lg text-emerald-400">→</span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-secondary px-4 py-3 font-semibold text-slate-900 shadow-soft transition hover:brightness-110"
              >
                Free Audit
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
