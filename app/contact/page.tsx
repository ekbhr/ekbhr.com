import { ContactForm } from "@/components/forms/ContactForm";
import { company, getEmailLink, getPhoneLink } from "@/lib/config";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-br from-white via-brand-surface to-sky-50 p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-brand-primary">Talk to the {company.name} Team</h1>
        <p className="mt-3 text-sm text-slate-600">Let us know what you&apos;re working on and we&apos;ll reply within one business day.</p>
      </div>
      <div className="rounded-3xl border border-emerald-100 bg-white p-6 text-sm text-slate-600 shadow-soft">
        <p className="font-semibold text-brand-primary">Prefer to reach out directly?</p>
        <p className="mt-2">
          Email: <a className="font-medium text-brand-primary underline" href={getEmailLink()}>{company.contact.email}</a>
        </p>
        <p className="mt-1">
          Phone / WhatsApp: <a className="font-medium text-brand-primary underline" href={getPhoneLink()}>{company.contact.phoneFormatted}</a>
        </p>
      </div>
      <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-soft">
        <h2 className="text-xl font-semibold text-brand-primary">Send Us a Message</h2>
        <ContactForm />
      </div>
    </div>
  );
}
