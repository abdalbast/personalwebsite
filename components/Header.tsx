"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) =>
    `relative transition-colors ${
      pathname === href
        ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[var(--accent)]"
        : "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--accent)] hover:after:w-full"
    }`;

  return (
    <header className={`sticky top-0 z-40 border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-black/30 ${scrolled ? "shadow-sm shadow-black/20" : ""}`}>
      <div className="container px-6 sm:px-8 h-16 grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <Link href="/" className="font-semibold">Abdalbast</Link>
        </div>
        <nav className="justify-self-center flex items-center gap-6 text-sm">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/projects" className={linkClass("/projects")}>Projects</Link>
          <Link href={process.env.NEXT_PUBLIC_CONTACT_EMAIL ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}` : "mailto:hello@example.com"} className="rounded-md px-4 py-2 bg-[var(--accent)] text-black font-medium transition-transform hover:scale-[1.01]">Let’s talk</Link>
        </nav>
        <div className="justify-self-end flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
