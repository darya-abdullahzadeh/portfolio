import Card from '@/app/components/ui/Card';
import type { Skill } from '@/lib/types/skill';

interface SkillsGridProps {
  skills: Skill[];
}

const categoryLabels: Record<Skill['category'], string> = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  Tools: 'Tools',
  Languages: 'Languages',
  Other: 'Other',
};

export default function SkillsGrid({ skills }: SkillsGridProps) {
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<Skill['category'], Skill[]>
  );

  const categories = Object.keys(skillsByCategory) as Skill['category'][];

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <section key={category}>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            {categoryLabels[category]}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillsByCategory[category].map((skill) => (
              <Card key={skill.id} className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium text-foreground">{skill.name}</h3>
                  {skill.proficiencyLevel && (
                    <span className="text-sm text-muted-foreground">
                      {skill.proficiencyLevel}%
                    </span>
                  )}
                </div>
                {skill.proficiencyLevel && (
                  <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                    <div
                      className="h-full bg-accent transition-all"
                      style={{ width: `${skill.proficiencyLevel}%` }}
                    />
                  </div>
                )}
                {skill.yearsOfExperience && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? 's' : ''} of
                    experience
                  </p>
                )}
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

