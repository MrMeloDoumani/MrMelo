"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
        <Link href="/" aria-label="Mr.Melo home" className="flex items-center">
          <Image src="/logo/MrMelo_Logo_New.svg" alt="Mr.Melo - Practicing Media & Tech Innovation" width={180} height={72} priority className="h-12 w-auto" />
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
