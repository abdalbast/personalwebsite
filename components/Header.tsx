import Link from "next/link";
import AvailabilityBadge, { Availability } from "@/components/AvailabilityBadge";
import profile from "@/content/profile.json";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const { availability } = profile;
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/5">
      <div className="container px-6 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">Abdalbast</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href={process.env.NEXT_PUBLIC_CONTACT_EMAIL ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}` : "mailto:hello@example.com"} className="rounded-md px-4 py-2 bg-[var(--accent)] text-black font-medium transition-transform hover:scale-[1.01]">Let’s talk</Link>
        </nav>
        <div className="flex items-center gap-4">
          <AvailabilityBadge status={availability.status as Availability} from={availability.from} />
          <LocaleSwitcher />
          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
