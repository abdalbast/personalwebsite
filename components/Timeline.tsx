import timeline from "@/content/timeline.json";

type Item = {
  title: string;
  org: string;
  location?: string;
  start: string;
  end?: string | null;
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export default function Timeline() {
  return (
    <ol className="relative border-l border-white/10 pl-6">
      {[...timeline.experience, ...timeline.education].map((item: Item, idx) => (
        <li key={idx} className="mb-8">
          <div className="absolute -left-1.5 mt-1 size-3 rounded-full bg-[var(--accent)]" />
          <h3 className="font-semibold">{item.title} · {item.org}</h3>
          <p className="text-sm text-[var(--muted)] mt-1">{item.start} – {item.end ?? "Present"}</p>
          {item.bullets && (
            <ul className="list-disc ml-5 mt-2 text-sm text-[var(--muted)]">
              {item.bullets.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
