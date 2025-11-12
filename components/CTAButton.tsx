import Link from "next/link";
export function CTAButton({ href = "/publishers", children = "Get a Free Audit" }: { href?: string; children?: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-2xl px-5 py-2.5 bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-secondary font-semibold text-slate-900 shadow-soft transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
    >
      {children}
    </Link>
  );
}
