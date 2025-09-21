import Image from "next/image";

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
            <Image 
              src="/logo/MrMelo_Logo_New.svg" 
              alt="Mr.Melo - Practicing Media & Tech Innovation" 
              width={150} 
              height={60} 
              className="h-10 w-auto mx-auto sm:mx-0 sm:ml-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}



