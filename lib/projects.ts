import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ProjectFrontmatter = {
  title: string;
  kicker: string;
  summary: string;
  badges: string[];
  cover: string;
  links: { live?: string | null; github?: string | null; case?: string | null };
};

export type Project = ProjectFrontmatter & { slug: string };

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export function readProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function readProject(slug: string): Project {
  const file = fs.readFileSync(path.join(PROJECTS_DIR, `${slug}.mdx`), "utf8");
  const { data } = matter(file);
  return { slug, ...(data as ProjectFrontmatter) };
}

export function readAllProjects(): Project[] {
  const slugs = readProjectSlugs();
  return slugs.map(readProject);
}

export function readFeaturedProjects(): Project[] {
  try {
    const index = JSON.parse(
      fs.readFileSync(path.join(PROJECTS_DIR, "index.json"), "utf8")
    ) as { order: string[] };
    const set = new Set(index.order);
    return readAllProjects()
      .filter((p) => set.has(p.slug))
      .sort((a, b) => index.order.indexOf(a.slug) - index.order.indexOf(b.slug));
  } catch {
    return readAllProjects().slice(0, 4);
  }
}
