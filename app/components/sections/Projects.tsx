import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Ziman - Kurdish Language Assistant',
      description:
        'Full-stack app with Next.js API routes and Prisma against PostgreSQL: modeled dialect-specific entities, transactional writes for user progress, and integration with Google Gemini behind rate-limited server-side calls. End-to-end TypeScript with validation before persistence.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Google Gemini'],
      github: 'https://github.com/darya-abdullahzadeh/kurdish-language-assistant',
      demo: 'https://ziman.netlify.app',
      featured: true,
    },
    {
      title: 'Nebula Task Manager',
      description:
        'Real-time collaboration via Socket.io on Node with MongoDB for workspace state and task documents; optimistic concurrency patterns on updates and REST endpoints for analytics aggregates. Socket namespaces isolate tenants; fallbacks when reconnecting.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
    },
    {
      title: 'Cosmic Weather',
      description:
        'React client over REST-backed aggregations: normalized responses from third-party weather APIs, memoized chart datasets from derived historical slices, and defensive handling for partial upstream failures. Client bundles chart rendering only after structured payloads validate.',
      tech: ['React', 'Recharts', 'Weather API', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="rounded-[1.75rem] border border-[#eadcf4] bg-[#fff9fe] px-6 py-16 shadow-[0_24px_50px_-42px_rgba(164,125,196,0.8)]"
    >
      <div className="container relative mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#a689bf]">Projects</p>
          <h2 className="mb-4 text-4xl text-[#4c3e60] md:text-5xl">Featured engineering work</h2>
          <p className="max-w-2xl text-[#78678f]">
            Selected builds highlighting architecture choices, data layers, API behavior, and practical constraints—not polish for its own sake.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.1rem] border border-[#eadcf4] bg-white/95 transition-all hover:-translate-y-1 hover:shadow-[0_24px_52px_-30px_rgba(163,122,196,0.75)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/55 to-transparent opacity-60" />
              <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[#f3e5ff] opacity-70 blur-2xl" />

              <div className="relative flex flex-1 flex-col p-7">
                <div className="mb-5 flex items-center justify-between rounded-xl border border-[#efe2f8] bg-[#fcf7ff] px-4 py-2">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#9f86ba]">Technical overview</span>
                  <span className="h-px w-12 bg-[#eadcf6]" />
                </div>

                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#a688bf]">
                    {project.featured ? 'Featured build' : 'Shipped system'}
                  </p>
                  <span className="h-px w-16 bg-[#ebdef6]" />
                </div>

                <h3 className="mb-3 text-xl leading-tight text-[#4e4063] transition-colors group-hover:text-[#7f63a2] md:text-2xl">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#6c5b84]">{project.description}</p>

                <div className="mb-8 flex flex-wrap items-center gap-2.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#eadcf4] bg-[#faf5ff] px-2.5 py-1 text-[11px] tracking-wide text-[#7b6893]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-[#efdff8] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs uppercase tracking-[0.13em] text-[#a084bf]">Links</span>
                  <div className="flex items-center gap-4 transition-all duration-300 md:translate-y-1 md:opacity-75 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-sm text-[#7b6793] transition-colors hover:text-[#936fba]"
                    >
                      <Github className="h-5 w-5 transition-transform group-hover/link:scale-110" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-sm text-[#7b6793] transition-colors hover:text-[#936fba]"
                    >
                      <ExternalLink className="h-5 w-5 transition-transform group-hover/link:scale-110" />
                      <span>Deployment</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/darya-abdullahzadeh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#dbc5ea] bg-[#f7efff] px-8 py-4 text-[#6f5a89] transition-all hover:-translate-y-0.5 hover:bg-[#f2e5fb]"
          >
            <FolderGit2 className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
