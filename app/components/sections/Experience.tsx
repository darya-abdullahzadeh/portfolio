import { Briefcase, Calendar, MapPin, Rocket, Award, Code } from 'lucide-react';
import type { WorkExperience } from '@/lib/types/experience';

interface ExperienceProps {
  experiences: WorkExperience[];
}

export function Experience({ experiences }: ExperienceProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const getDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    }
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'year' : 'years'}`;
    }
    return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  };

  const colors = ['purple', 'pink', 'blue', 'indigo'] as const;
  const getColor = (index: number) => colors[index % colors.length];

  const getColorClasses = (color: typeof colors[number]) => {
    const colorMap = {
      purple: {
        border: 'border-[#eadcf4]',
        shadow: 'hover:shadow-[0_20px_42px_-30px_rgba(155,114,189,0.7)]',
        gradient: 'bg-linear-to-br from-[#f3e7fc] to-[#eadbf8]',
        bgOverlay: 'bg-[#f3e7fc]',
        badge: 'border border-[#e2d0f0] bg-[#f7effd] text-[#7c6795]',
        icon: 'text-[#8c6cb0]',
        iconSmall: 'text-[#9f7fc0]',
      },
      pink: {
        border: 'border-[#f0dbe7]',
        shadow: 'hover:shadow-[0_20px_42px_-30px_rgba(189,123,160,0.65)]',
        gradient: 'bg-linear-to-br from-[#fbe9f2] to-[#f6dcea]',
        bgOverlay: 'bg-[#fbe9f2]',
        badge: 'border border-[#f0d4e3] bg-[#fdeff6] text-[#946b84]',
        icon: 'text-[#b77898]',
        iconSmall: 'text-[#c48aaa]',
      },
      blue: {
        border: 'border-[#d7e0f2]',
        shadow: 'hover:shadow-[0_20px_42px_-30px_rgba(125,153,193,0.7)]',
        gradient: 'bg-linear-to-br from-[#edf2fe] to-[#e0eaff]',
        bgOverlay: 'bg-[#edf2fe]',
        badge: 'border border-[#d5e0f3] bg-[#eef3ff] text-[#6e81a3]',
        icon: 'text-[#7188b3]',
        iconSmall: 'text-[#7f95bd]',
      },
      indigo: {
        border: 'border-[#e2dcf5]',
        shadow: 'hover:shadow-[0_20px_42px_-30px_rgba(143,125,194,0.7)]',
        gradient: 'bg-linear-to-br from-[#f1edfd] to-[#e7defa]',
        bgOverlay: 'bg-[#f1edfd]',
        badge: 'border border-[#ddd2f4] bg-[#f2ecff] text-[#74689c]',
        icon: 'text-[#8578b1]',
        iconSmall: 'text-[#9588bc]',
      },
    };
    return colorMap[color];
  };

  if (experiences.length === 0) {
    return (
      <section id="experience" className="rounded-[1.75rem] border border-[#efdff1] bg-[#fff8fc] py-16 px-6 shadow-[0_22px_50px_-42px_rgba(184,127,163,0.45)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#a689bf]">Experience</p>
            <h2 className="mb-4 text-5xl text-[#4c3e60] md:text-6xl">Experience</h2>
            <p className="text-sm uppercase tracking-widest text-[#8f7ba8]">Backend, frontend & platform ownership</p>
          </div>
          <div className="rounded-2xl border border-[#eadcf4] bg-white/90 p-12 text-center">
            <p className="text-[#6d5b84]">
              No experience entries found. Please configure your Payload CMS to add work experience.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="rounded-[1.75rem] border border-[#efdff1] bg-[#fff8fc] py-16 px-6 shadow-[0_22px_50px_-42px_rgba(184,127,163,0.45)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#a689bf]">Experience</p>
          <h2 className="mb-4 text-5xl text-[#4c3e60] md:text-6xl">Experience</h2>
          <p className="text-sm uppercase tracking-widest text-[#8f7ba8]">Systems shipped, responsibilities, and stack depth</p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((experience, index) => {
            const color = getColor(index);
            const colorClasses = getColorClasses(color);
            const isCurrent = !experience.endDate;
            
            return (
              <div
                key={experience.id}
                className={`relative overflow-hidden rounded-2xl border ${colorClasses.border} bg-white/92 p-7 transition-all ${colorClasses.shadow} hover:-translate-y-1`}
              >
                <div className="absolute left-0 top-0 h-full w-1.5 bg-linear-to-b from-[#d6b7ea] via-[#efcce0] to-[#c2d4ed]" />
                {/* Decorative gradient overlay */}
                <div className={`absolute right-0 top-0 z-0 h-64 w-64 ${colorClasses.bgOverlay} rounded-full blur-3xl opacity-60`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className={`rounded-xl p-3 ${colorClasses.gradient} transition-transform group-hover:scale-105`}>
                          <Briefcase className="h-6 w-6 text-[#6d5b84]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 text-2xl text-[#4d3f62] transition-colors md:text-3xl">
                            {experience.role}
                          </h3>
                          <p className="mb-2 text-xl text-[#66557d]">{experience.companyName}</p>
                          {experience.location && (
                            <div className="flex items-center gap-2 text-sm text-[#75648d]">
                              <MapPin className="h-4 w-4" />
                              <span>{experience.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Date and Duration */}
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-[#6e5d85]">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {formatDate(experience.startDate)} - {isCurrent ? 'Present' : formatDate(experience.endDate!)}
                        </span>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs ${colorClasses.badge}`}>
                        {getDuration(experience.startDate, experience.endDate)}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  {experience.description && (
                    <p className="mb-6 leading-relaxed text-[#65547d]">{experience.description}</p>
                  )}

                  {/* Achievements */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className={`w-5 h-5 ${colorClasses.icon}`} />
                        <h4 className="text-lg font-semibold text-[#4e4063]">Technical outcomes</h4>
                      </div>
                      <ul className="space-y-2 pl-6">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[#65547d]">
                            <Rocket className={`mt-1 h-4 w-4 shrink-0 ${colorClasses.iconSmall}`} />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {experience.technologies && experience.technologies.length > 0 && (
                    <div className="border-t border-[#eedff8] pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Code className={`w-5 h-5 ${colorClasses.icon}`} />
                        <h4 className="text-lg font-semibold text-[#4e4063]">Technologies</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full px-3 py-1.5 text-sm transition-all ${colorClasses.badge}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
