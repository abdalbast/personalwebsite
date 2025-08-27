import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Section>
        <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl">High-quality AI & Web Projects for Startups and Teams</h1>
        <p className="text-[var(--muted)] mt-4 max-w-2xl">I build tidy, performant products using Python, LLMs, and modern web.</p>
        <div className="mt-8 flex gap-4">
          <a className="rounded-md px-5 py-3 bg-[var(--accent)] text-black font-medium transition-transform hover:scale-[1.01]" href={process.env.NEXT_PUBLIC_CONTACT_EMAIL ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}` : "mailto:hello@example.com"}>Let’s talk</a>
          <a className="rounded-md px-5 py-3 border border-white/10" href="#projects">View projects</a>
        </div>
      </Section>
      <Section id="projects">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <p className="text-[var(--muted)] mt-2">Coming soon: cards rendered from /content/projects.</p>
      </Section>
      <Section>
        <CTA />
      </Section>
      <Footer />
    </div>
  );
}
