import { Cpu, Server, Settings, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Cpu,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Vue.js"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Webpack"]
    },
    {
      title: "Testing & Practices",
      icon: Wrench,
      skills: ["GraphQL", "Testing (Jest, Cypress)", "Agile", "System Design"]
    }
  ];

  return (
    <section id="skills" className="rounded-[1.75rem] border border-[#e3e3f3] bg-[#f9fbff] py-16 px-6 shadow-[0_22px_50px_-42px_rgba(124,145,183,0.45)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#a689bf]">Skills</p>
          <h2 className="mb-4 text-4xl text-[#4c3e60] md:text-5xl">Tech Stack</h2>
          <p className="mx-auto max-w-2xl text-[#78678f]">
            Production-oriented tooling across clients, services, data stores, and delivery—what I reach for when owning features end to end.
          </p>
        </div>
        
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title} 
                className="group rounded-2xl border border-[#eadcf4] bg-white/90 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_42px_-30px_rgba(160,121,194,0.75)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg bg-[#f2e7fb] p-2 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5 text-[#8b6cb0]" />
                  </div>
                  <h3 className="text-2xl text-[#4e4063]">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="group/item flex items-center gap-2 text-[#6c5b84]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#b290d1] transition-transform group-hover/item:scale-150" />
                      <span className="transition-all group-hover/item:translate-x-1 group-hover/item:text-[#4f3f66]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional tech badges */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-sm uppercase tracking-widest text-[#8f7ba8]">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Firebase', 'Supabase', 'Vercel', 'OpenAPI', 'Stripe', 'WebSockets', 'Redis', 'Nginx'].map((tech) => (
              <span 
                key={tech} 
                className="cursor-default rounded-full border border-[#eadcf4] bg-[#fbf6ff] px-4 py-2 text-sm text-[#78668f] transition-all hover:scale-105 hover:border-[#d4b8e6] hover:text-[#5c4c73]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}