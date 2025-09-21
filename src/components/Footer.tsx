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
            <div className="flex flex-wrap justify-end gap-4 text-sm">
              <a href="mailto:info@mrmelo.com" className="hover:text-[color:var(--accent)] transition-colors">
                info@mrmelo.com
              </a>
              <a href="mailto:billing@mrmelo.com" className="hover:text-[color:var(--accent)] transition-colors">
                billing@mrmelo.com
              </a>
              <a href="mailto:support@mrmelo.com" className="hover:text-[color:var(--accent)] transition-colors">
                support@mrmelo.com
              </a>
              <a href="mailto:legal@mrmelo.com" className="hover:text-[color:var(--accent)] transition-colors">
                legal@mrmelo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



