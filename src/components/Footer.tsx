export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:var(--sand)]">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <div className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Mr.Melo. All rights reserved.
          </div>
          <div className="text-sm text-foreground/70">
            We handle data with care. No spam. Simple contracts.
          </div>
        </div>
        <div className="sm:justify-self-end space-y-4">
          <div className="text-right">
            <a href="mailto:info@mrmelo.com" className="text-sm hover:text-[color:var(--accent)] transition-colors">
              info@mrmelo.com
            </a>
          </div>
          <div className="text-right">
            <blockquote className="text-sm italic text-foreground/80">
              &ldquo;Let&apos;s focus on replicating breakthrough ideas rather than just automating existing processes&rdquo;
            </blockquote>
            <p className="text-xs text-foreground/60 mt-1">- Mr. Melo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}



