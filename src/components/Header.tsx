"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/hkm", label: "Human Knowledge Model" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-[color:var(--sand)]">                                                               
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" aria-label="Mr.Melo home" className="flex flex-col">
          <span className="text-2xl md:text-3xl font-bold text-foreground">mrmelo.com</span>
          <span className="text-xs md:text-sm text-foreground/70 font-light">Practicing Media & Tech Innovation</span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6 text-sm">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "transition-colors hover:text-[color:var(--accent)] px-2 py-1 rounded-md hover:bg-foreground/5" +
                  (isActive ? " text-[color:var(--accent)] bg-foreground/10" : " text-foreground/80")
                }
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">
                  {item.label === "Human Knowledge Model" ? "HKM" : item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
