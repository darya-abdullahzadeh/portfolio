import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import { urlFor } from '@/lib/utils/image';
import type { Project } from '@/lib/types/project';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-foreground">{project.title}</h1>
        {project.description && (
          <p className="text-xl text-muted-foreground">{project.description}</p>
        )}
      </header>

      {project.images && project.images.length > 0 && (
        <div className="mb-8 space-y-4">
          {project.images.map((image, index) => {
            const imageUrl = urlFor(image);
            if (!imageUrl) return null;
            return (
              <div
                key={index}
                className="relative aspect-video w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={imageUrl}
                  alt={image.alt || `${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      )}

      {project.longDescription && (
        <div className="prose prose-neutral mb-8 dark:prose-invert">
          <p className="whitespace-pre-line text-muted-foreground">
            {project.longDescription}
          </p>
        </div>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {(project.liveUrl || project.githubUrl) && (
        <div className="flex gap-4">
          {project.liveUrl && (
            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live Site
            </Button>
          )}
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
          )}
        </div>
      )}

      {project.startDate && (
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            {project.startDate}
            {project.endDate && ` - ${project.endDate}`}
            {!project.endDate && ' - Present'}
          </p>
        </div>
      )}
    </article>
  );
}

