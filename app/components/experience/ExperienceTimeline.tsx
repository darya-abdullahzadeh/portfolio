import Card from '@/app/components/ui/Card';
import type { WorkExperience } from '@/lib/types/experience';

interface ExperienceTimelineProps {
  experiences: WorkExperience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <Card key={experience.id} className="relative">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            <div className="flex-1">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {experience.companyName}
                  </p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>{formatDate(experience.startDate)}</p>
                  <p>
                    {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                  </p>
                </div>
              </div>

              {experience.location && (
                <p className="mb-3 text-sm text-muted-foreground">{experience.location}</p>
              )}

              {experience.description && (
                <p className="mb-4 text-muted-foreground">{experience.description}</p>
              )}

              {experience.achievements && experience.achievements.length > 0 && (
                <ul className="mb-4 list-disc space-y-1 pl-5 text-muted-foreground">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}

              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

