import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-white/5 bg-[var(--card)] overflow-hidden">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={project.cover}
          alt={`${project.title} cover`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 600px, 100vw"
        />
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-[var(--muted)]">{project.kicker}</div>
        <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.badges.map((b) => (
            <span key={b} className="px-2 py-1 rounded-md bg-white/5 text-xs text-[var(--muted)]">{b}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3 text-sm">
          {project.links.live && (
            <Link href={project.links.live} className="underline underline-offset-4">Live</Link>
          )}
          {project.links.github && (
            <Link href={project.links.github} className="underline underline-offset-4">GitHub</Link>
          )}
          {project.links.case && (
            <Link href={project.links.case} className="underline underline-offset-4">Case study</Link>
          )}
        </div>
      </div>
    </div>
  );
}
