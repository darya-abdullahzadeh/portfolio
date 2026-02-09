import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectDetail from '@/app/components/projects/ProjectDetail';
import Button from '@/app/components/ui/Button';
import { getProjectBySlug } from '@/lib/cms/queries';

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Portfolio',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <Button href="/projects" variant="outline">
          ← Back to Projects
        </Button>
      </div>
      <ProjectDetail project={project} />
    </div>
  );
}

