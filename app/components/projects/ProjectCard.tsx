import Link from 'next/link';
import Image from 'next/image';
import Card from '@/app/components/ui/Card';
import Button from '@/app/components/ui/Button';
import { urlFor } from '@/lib/utils/image';
import type { Project } from '@/lib/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = project.images?.[0] ? urlFor(project.images[0]) : null;

  return (
    <Card hover className="flex flex-col">
      {imageUrl && project.images && project.images[0] && (
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={project.images[0]?.alt || project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold text-foreground">{project.title}</h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3">
        {project.description}
      </p>
      {project.technologies && project.technologies.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      )}
      <div className="flex gap-3">
        <Button
          href={`/projects/${project.slug}`}
          variant="primary"
          className="flex-1"
        >
          View Details
        </Button>
        {project.liveUrl && (
          <Button
            href={project.liveUrl}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            Live
          </Button>
        )}
      </div>
    </Card>
  );
}

