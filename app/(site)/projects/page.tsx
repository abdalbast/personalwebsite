import ProjectsFilter from "@/components/ProjectsFilter";
import { readAllProjects } from "@/lib/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const projects = readAllProjects();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-6 sm:px-8 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <div className="mt-6">
            <ProjectsFilter projects={projects} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
