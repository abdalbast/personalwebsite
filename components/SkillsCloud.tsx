import skills from "@/content/skills.json";

export default function SkillsCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {[...skills.primary, ...skills.secondary].map((s) => (
        <span key={s} className="px-3 py-1 rounded-md bg-white/5 text-sm text-[var(--muted)]">{s}</span>
      ))}
    </div>
  );
}
