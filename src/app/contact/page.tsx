import { sendContact } from "./actions";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-serif mb-4">Contact</h1>
      <p className="text-foreground/80 mb-8">
        Tell us a bit about your project. We typically respond within one business day.
      </p>

      <form action={sendContact} className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm">Name</span>
          <input name="name" required className="rounded-md border border-[color:var(--sand)] bg-background px-3 py-2" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm">Email</span>
          <input name="email" type="email" required className="rounded-md border border-[color:var(--sand)] bg-background px-3 py-2" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm">Message</span>
          <textarea name="message" rows={6} required className="rounded-md border border-[color:var(--sand)] bg-background px-3 py-2" />
        </label>
        {/* Honeypot */}
        <label className="hidden">
          <span>Leave this field empty</span>
          <input name="nickname" autoComplete="off" />
        </label>
        <div className="mt-2">
          <button type="submit" className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}


