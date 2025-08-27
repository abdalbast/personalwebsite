"use client";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import ProjectsGrid from "@/components/ProjectsGrid";

const categories = ["All", "AI/ML", "Web", "Automation"] as const;

function categoryOf(p: Project): (typeof categories)[number] {
  const b = p.badges.map((x) => x.toLowerCase());
  if (b.some((x) => ["llm", "nlp", "ml", "machine learning", "langchain", "scikit-learn", "pytorch"].includes(x))) return "AI/ML";
  if (b.some((x) => ["automation", "scripts"].includes(x))) return "Automation";
  return "Web";
}

export default function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => categoryOf(p) === active);
  }, [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-3 py-1 rounded-md border text-sm ${active === c ? "bg-[var(--accent)] text-black border-transparent" : "border-white/10"}`}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>
      <ProjectsGrid projects={filtered} />
    </div>
  );
}
