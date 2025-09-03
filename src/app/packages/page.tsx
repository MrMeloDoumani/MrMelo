export default function PackagesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-serif mb-4">Packages Built for Momentum.</h1>
      <p className="text-foreground/80 max-w-prose mb-10">
        We offer three tiers of service, designed to provide exactly what you need. Prices are indicative and can be tuned per sector.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-[color:var(--sand)] p-6">
          <h2 className="font-semibold text-lg">Starter</h2>
          <p className="text-foreground/80 mt-2">Fixed scope and fast turnaround for launch-ready assets.</p>
          <ul className="list-disc pl-5 text-foreground/80 mt-4 space-y-1">
            <li>One vertical video</li>
            <li>One landing page</li>
            <li>Five social posts + captioning</li>
            <li>Basic analytics tag plan</li>
          </ul>
          <div className="mt-4 text-sm text-foreground/70">Indicative: $1,250 to $2,050</div>
        </div>
        <div className="rounded-lg border border-[color:var(--sand)] p-6">
          <h2 className="font-semibold text-lg">Growth</h2>
          <p className="text-foreground/80 mt-2">Monthly retainers with custom outputs and KPI reporting.</p>
          <ul className="list-disc pl-5 text-foreground/80 mt-4 space-y-1">
            <li>Eight vertical videos monthly</li>
            <li>Two scripts, one case study</li>
            <li>Quarterly photo content day</li>
            <li>Automation support</li>
          </ul>
          <div className="mt-4 text-sm text-foreground/70">Indicative: $3,250 to $6,000 per month</div>
        </div>
        <div className="rounded-lg border border-[color:var(--sand)] p-6">
          <h2 className="font-semibold text-lg">Elite</h2>
          <p className="text-foreground/80 mt-2">Full-service strategy, custom builds, and priority support.</p>
          <ul className="list-disc pl-5 text-foreground/80 mt-4 space-y-1">
            <li>Campaign concepting & brand voice guide</li>
            <li>Founder film production</li>
            <li>Custom AI support agent</li>
            <li>Analytics maturity plan</li>
          </ul>
          <div className="mt-4 text-sm text-foreground/70">Indicative: $9,550 to $16,350 per month</div>
        </div>
      </div>

      <div className="mt-10">
        <a href="/contact" className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">Start a Project</a>
      </div>
    </section>
  );
}


