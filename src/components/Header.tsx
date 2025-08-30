"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-[color:var(--sand)]">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Mr.Melo
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "transition-colors hover:text-[color:var(--accent)]" +
                  (isActive ? " text-[color:var(--accent)]" : " text-foreground/80")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


