import type { Metadata } from 'next';
import ExperienceTimeline from '@/app/components/experience/ExperienceTimeline';
import { getExperience } from '@/lib/cms/queries';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Experience | Portfolio',
  description: 'View my professional work history and achievements',
};

export default async function ExperiencePage() {
  const experiences = await getExperience().catch(() => []);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-12 text-4xl font-bold text-foreground">Work Experience</h1>
      {experiences.length === 0 ? (
        <div className="rounded-lg border border-border bg-card-bg p-12 text-center">
          <p className="text-muted-foreground">
            No experience entries found. Please configure your Payload CMS to add work
            experience.
          </p>
        </div>
      ) : (
        <ExperienceTimeline experiences={experiences} />
      )}
    </div>
  );
}

