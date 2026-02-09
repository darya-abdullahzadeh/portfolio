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
        border: 'border-purple-400/30 hover:border-purple-400/60',
        shadow: 'hover:shadow-purple-500/30',
        gradient: 'bg-gradient-to-br from-purple-500/40 to-purple-600/40',
        bgOverlay: 'bg-purple-500/10',
        badge: 'bg-purple-500/20 border-purple-400/30 text-purple-100 hover:bg-purple-500/30 hover:border-purple-400/50',
        icon: 'text-purple-300',
        iconSmall: 'text-purple-400',
      },
      pink: {
        border: 'border-pink-400/30 hover:border-pink-400/60',
        shadow: 'hover:shadow-pink-500/30',
        gradient: 'bg-gradient-to-br from-pink-500/40 to-pink-600/40',
        bgOverlay: 'bg-pink-500/10',
        badge: 'bg-pink-500/20 border-pink-400/30 text-pink-100 hover:bg-pink-500/30 hover:border-pink-400/50',
        icon: 'text-pink-300',
        iconSmall: 'text-pink-400',
      },
      blue: {
        border: 'border-blue-400/30 hover:border-blue-400/60',
        shadow: 'hover:shadow-blue-500/30',
        gradient: 'bg-gradient-to-br from-blue-500/40 to-blue-600/40',
        bgOverlay: 'bg-blue-500/10',
        badge: 'bg-blue-500/20 border-blue-400/30 text-blue-100 hover:bg-blue-500/30 hover:border-blue-400/50',
        icon: 'text-blue-300',
        iconSmall: 'text-blue-400',
      },
      indigo: {
        border: 'border-indigo-400/30 hover:border-indigo-400/60',
        shadow: 'hover:shadow-indigo-500/30',
        gradient: 'bg-gradient-to-br from-indigo-500/40 to-indigo-600/40',
        bgOverlay: 'bg-indigo-500/10',
        badge: 'bg-indigo-500/20 border-indigo-400/30 text-indigo-100 hover:bg-indigo-500/30 hover:border-indigo-400/50',
        icon: 'text-indigo-300',
        iconSmall: 'text-indigo-400',
      },
    };
    return colorMap[color];
  };

  if (experiences.length === 0) {
    return (
      <section id="experience" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400"></div>
              <Briefcase className="w-5 h-5 text-purple-300" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
            <h2 className="text-5xl md:text-6xl text-white mb-4 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Mission Log
            </h2>
            <p className="text-purple-200/60 uppercase tracking-widest text-sm">Professional journey</p>
          </div>
          <div className="rounded-2xl border border-purple-400/30 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-12 text-center">
            <p className="text-white/70">
              No experience entries found. Please configure your Payload CMS to add work experience.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Briefcase className="w-5 h-5 text-purple-300 animate-pulse" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-4 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            Mission Log
          </h2>
          <p className="text-purple-200/60 uppercase tracking-widest text-sm">Professional journey through the cosmos</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const color = getColor(index);
            const colorClasses = getColorClasses(color);
            const isCurrent = !experience.endDate;
            
            return (
              <div
                key={experience.id}
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border ${colorClasses.border} transition-all group hover:shadow-2xl ${colorClasses.shadow} hover:-translate-y-1 relative overflow-hidden`}
              >
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 right-0 w-64 h-64 ${colorClasses.bgOverlay} rounded-full blur-3xl -z-0`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className={`p-3 ${colorClasses.gradient} rounded-xl group-hover:scale-110 transition-transform`}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl text-white mb-2 group-hover:text-purple-200 transition-colors">
                            {experience.role}
                          </h3>
                          <p className="text-xl text-white/80 mb-2">{experience.companyName}</p>
                          {experience.location && (
                            <div className="flex items-center gap-2 text-white/60 text-sm">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Date and Duration */}
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-white/80">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {formatDate(experience.startDate)} - {isCurrent ? 'Present' : formatDate(experience.endDate!)}
                        </span>
                      </div>
                      <span className={`px-3 py-1 ${colorClasses.badge} rounded-full text-xs backdrop-blur-sm`}>
                        {getDuration(experience.startDate, experience.endDate)}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  {experience.description && (
                    <p className="text-white/70 mb-6 leading-relaxed">{experience.description}</p>
                  )}

                  {/* Achievements */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className={`w-5 h-5 ${colorClasses.icon}`} />
                        <h4 className="text-lg text-white font-semibold">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2 pl-6">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-white/80 flex items-start gap-3">
                            <Rocket className={`w-4 h-4 ${colorClasses.iconSmall} mt-1 flex-shrink-0`} />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {experience.technologies && experience.technologies.length > 0 && (
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 mb-4">
                        <Code className={`w-5 h-5 ${colorClasses.icon}`} />
                        <h4 className="text-lg text-white font-semibold">Technologies</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1.5 ${colorClasses.badge} rounded-full text-sm backdrop-blur-sm transition-all`}
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
