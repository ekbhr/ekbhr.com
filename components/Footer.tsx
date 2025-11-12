import Link from "next/link";
import { company, getEmailLink, getPhoneLink } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-primary/90 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),_transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[2fr,3fr]">
          <div className="space-y-5">
            <div>
              <div className="text-2xl font-bold tracking-tight text-white">{company.name}</div>
              <p className="mt-3 max-w-sm text-sm text-slate-200/80">{company.tagline}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Publisher Growth Partner
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 text-sm">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Learn</div>
              <ul className="space-y-2 text-slate-200/85">
                <li><Link className="transition hover:text-white" href="/services">Services</Link></li>
                <li><Link className="transition hover:text-white" href="/technology">Technology</Link></li>
                <li><Link className="transition hover:text-white" href="/publishers">For Publishers</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Resources</div>
              <ul className="space-y-2 text-slate-200/85">
                <li><Link className="transition hover:text-white" href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link className="transition hover:text-white" href="/terms-of-service">Terms of Service</Link></li>
                <li><Link className="transition hover:text-white" href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Contact</div>
              <ul className="space-y-2 text-slate-200/85">
                <li><a className="transition hover:text-white" href={getEmailLink()}>{company.contact.email}</a></li>
                <li><a className="transition hover:text-white" href={getPhoneLink()}>{company.contact.phoneFormatted}</a></li>
                <li>{company.address.full}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-300/70">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a className="transition hover:text-white" href={getEmailLink()}>Email Us</a>
            <Link className="transition hover:text-white" href="/contact">Contact Form</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
