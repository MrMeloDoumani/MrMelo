export default function ContactPage() {
  const email = "info@melo.com";
  const subject = encodeURIComponent("Mr.Melo Inquiry");
  const body = encodeURIComponent("Hi Mr.Melo team,\n\nI'd like to discuss...\n");
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-serif mb-4">Contact</h1>
      <p className="text-foreground/80 mb-6">Choose your email provider or use mailto.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <a href={mailto} className="rounded-md border border-[color:var(--sand)] px-4 py-3 text-sm hover:bg-[color:var(--sand)]/20">Open in Mail app</a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`} target="_blank" rel="noopener" className="rounded-md border border-[color:var(--sand)] px-4 py-3 text-sm hover:bg-[color:var(--sand)]/20">Gmail</a>
        <a href={`https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}&subject=${subject}&body=${body}`} target="_blank" rel="noopener" className="rounded-md border border-[color:var(--sand)] px-4 py-3 text-sm hover:bg-[color:var(--sand)]/20">Outlook</a>
        <a href={`https://compose.mail.yahoo.com/?to=${email}&subject=${subject}&body=${body}`} target="_blank" rel="noopener" className="rounded-md border border-[color:var(--sand)] px-4 py-3 text-sm hover:bg-[color:var(--sand)]/20">Yahoo Mail</a>
      </div>
      <div className="mt-8">
        <a href={mailto} className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">info@melo.com</a>
      </div>
    </section>
  );
}


