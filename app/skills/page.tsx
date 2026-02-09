import type { Metadata } from 'next';
import SkillsGrid from '@/app/components/skills/SkillsGrid';
import { getSkills } from '@/lib/cms/queries';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Skills | Portfolio',
  description: 'Explore my technical skills and expertise',
};

export default async function SkillsPage() {
  const skills = await getSkills().catch(() => []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-12 text-4xl font-bold text-foreground">Skills</h1>
      {skills.length === 0 ? (
        <div className="rounded-lg border border-border bg-card-bg p-12 text-center">
          <p className="text-muted-foreground">
            No skills found. Please configure your Payload CMS to add skills.
          </p>
        </div>
      ) : (
        <SkillsGrid skills={skills} />
      )}
    </div>
  );
}

