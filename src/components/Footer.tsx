import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:var(--sand)]">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <div className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Mr.Melo. All rights reserved.
          </div>
          <div className="text-sm text-foreground/70">
            We handle data with care. No spam. Simple contracts.
          </div>
        </div>
        <div className="sm:justify-self-end flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-[color:var(--accent)]">About</Link>
          <Link href="/services" className="hover:text-[color:var(--accent)]">Services</Link>
          <Link href="/contact" className="hover:text-[color:var(--accent)]">Contact</Link>
          <a href="mailto:info@mrmelo.com" className="hover:text-[color:var(--accent)]">info@mrmelo.com</a>
          <a href="mailto:melo@mrmelo.com" className="hover:text-[color:var(--accent)]">melo@mrmelo.com</a>
        </div>
      </div>
    </footer>
  );
}


