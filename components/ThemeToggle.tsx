"use client";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-md px-3 py-2 border border-white/10 text-sm hover:bg-white/5 transition"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
