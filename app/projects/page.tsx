import type { Metadata } from 'next';
import ProjectCard from '@/app/components/projects/ProjectCard';
import { getProjects } from '@/lib/cms/queries';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'Browse through my software development projects',
};

export default async function ProjectsPage() {
  const projects = await getProjects().catch(() => []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-12 text-4xl font-bold text-foreground">Projects</h1>
      {projects.length === 0 ? (
        <div className="rounded-lg border border-border bg-card-bg p-12 text-center">
          <p className="text-muted-foreground">
            No projects found. Please configure your Payload CMS to add projects.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

