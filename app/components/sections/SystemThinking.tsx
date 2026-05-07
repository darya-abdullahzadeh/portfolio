import { Box, GitBranch, Scale } from 'lucide-react';

const pillars = [
  {
    icon: Box,
    title: 'Boundaries & contracts',
    body: 'I draw clear lines between API surfaces, domain logic, and persistence so changes stay predictable and testable.',
  },
  {
    icon: GitBranch,
    title: 'Tradeoffs with intent',
    body: 'I document why we chose sync vs async, SQL vs document stores, or monolith vs service split—and what we’d revisit under load.',
  },
  {
    icon: Scale,
    title: 'Operational reality',
    body: 'I design for failures, retries, and observability: performance budgets, error paths, and shipping behavior that stays reliable in production.',
  },
];

export function SystemThinking() {
  return (
    <section
      id="systems"
      className="rounded-[1.75rem] border border-[#e5dcf0] bg-[#fdfbff] px-6 py-16 shadow-[0_22px_50px_-42px_rgba(148,118,178,0.48)]"
    >
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#a689bf]">System thinking</p>
          <h2 className="mb-4 text-4xl text-[#4c3e60] md:text-5xl">How I approach complex systems</h2>
          <p className="text-[#78678f]">
            Beyond features: structuring services, data, and delivery so systems stay maintainable as requirements and traffic grow.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#eadcf4] bg-white/90 p-6 shadow-[0_14px_36px_-28px_rgba(154,124,188,0.55)]"
            >
              <div className="mb-4 inline-flex rounded-xl border border-[#ebe4f4] bg-[#f7f2fc] p-3">
                <Icon className="h-5 w-5 text-[#8670a8]" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#4e4063]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#6c5b84]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
