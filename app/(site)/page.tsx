import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import ProjectCard from "@/components/ProjectCard";
import LogoCloud from "@/components/LogoCloud";
import SkillsCloud from "@/components/SkillsCloud";
import Timeline from "@/components/Timeline";
import HeroMosaic from "@/components/HeroMosaic";
import Reveal from "@/components/Reveal";
import { readFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featured = readFeaturedProjects();
  const mosaic = featured.slice(0, 6).map((p) => ({ href: p.links.live || p.links.github || "/projects", src: p.cover, alt: p.title }));
  return (
    <div className="min-h-screen">
      <Header />
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl">High-quality AI & Web Projects for Startups and Teams</h1>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-[var(--muted)] mt-4 max-w-2xl">I build tidy, performant products using Python, LLMs, and modern web.</p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 flex gap-4">
                <a className="rounded-md px-5 py-3 bg-[var(--accent)] text-black font-medium transition-transform hover:scale-[1.01]" href={process.env.NEXT_PUBLIC_CONTACT_EMAIL ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}` : "mailto:hello@example.com"}>Let’s talk</a>
                <a className="rounded-md px-5 py-3 border border-white/10" href="#projects">View projects</a>
              </div>
            </Reveal>
          </div>
          <HeroMosaic items={mosaic} />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Your reliable AI/ML Engineer & Developer</h2>
        <p className="text-[var(--muted)] mt-2">Clear communication • Design-first development • Full-stack mindset • Highest quality • Worry-free execution • Ongoing cooperation</p>
      </Section>

      <Section id="projects">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.slice(0, 6).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Experience with teams & organisations</h2>
        <div className="mt-6">
          <LogoCloud />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6">
          <SkillsCloud />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <div className="mt-6">
          <Timeline />
        </div>
      </Section>

      <Section>
        <CTA />
      </Section>
      <Footer />
    </div>
  );
}
