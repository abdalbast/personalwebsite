export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10 text-sm text-[var(--muted)]">
      <div className="container px-6 sm:px-8 flex items-center justify-between">
        <p>© {year} Abdalbast O. Khdhir. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="/privacy">Privacy</a>
          <a href="/legal">Legal</a>
        </nav>
      </div>
    </footer>
  );
}
