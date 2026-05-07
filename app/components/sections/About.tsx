import { Database, Layers, Gauge } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="rounded-[1.75rem] border border-[#ecdff5] bg-[#fffdfd] px-6 py-16 shadow-[0_22px_50px_-42px_rgba(163,123,195,0.55)]">
      <div className="container relative mx-auto max-w-6xl">
        <div className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#efdfff] blur-2xl" />
        <div className="pointer-events-none absolute -right-8 bottom-24 h-32 w-32 rounded-full bg-[#ffe3f0] blur-2xl" />
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#a689bf]">About</p>
          <h2 className="mb-4 text-4xl text-[#4c3e60] md:text-5xl">Full-stack engineering</h2>
          <p className="mx-auto max-w-2xl text-[#78678f]">
            I design and implement systems across the stack: stable APIs, disciplined data modeling, and frontend surfaces
            that stay aligned with backend contracts—not the other way around.
          </p>
        </div>

        <div className="relative mb-16 grid items-center gap-10 rounded-3xl border border-[#eddff5] bg-white/60 p-5 md:grid-cols-2 md:p-7">
          <div className="relative overflow-hidden rounded-[1.25rem] border border-[#ebddf3] bg-white p-3 shadow-[0_18px_46px_-34px_rgba(155,114,189,0.6)]">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image src="/background.png" alt="About Darya" fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#f8efff]/45 to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-[#65547d]">
              I&apos;m a full-stack engineer with experience owning features end to end: routing and validation on the server,
              schema design and migrations, integration with external APIs, and typed clients that consume those contracts safely.
            </p>
            <p className="text-lg leading-relaxed text-[#65547d]">
              I default to explicit boundaries—what belongs in services vs repositories vs handlers—and I push for decisions
              we can defend under load: indexing strategy, caching boundaries, idempotency, and failure modes.
            </p>
            <p className="text-lg leading-relaxed text-[#65547d]">
              I communicate tradeoffs in plain language for stakeholders and in specs or ADRs for engineers. Shipping includes
              clarity on rollout, monitoring hooks, and how we&apos;ll iterate without breaking consumers.
            </p>

            <div className="flex gap-6 rounded-2xl border border-[#ebddf3] bg-[#fffafb] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div className="text-center">
                <div className="mb-1 text-3xl text-[#9b76be]">5+</div>
                <div className="text-sm text-[#796793]">Years</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-3xl text-[#9b76be]">50+</div>
                <div className="text-sm text-[#796793]">Projects</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-3xl text-[#9b76be]">100K+</div>
                <div className="text-sm text-[#796793]">Lines of Code</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative rounded-2xl border border-[#eadcf4] bg-white/90 p-6 transition-all hover:shadow-[0_16px_40px_-30px_rgba(152,113,186,0.7)]">
            <span className="absolute right-5 top-5 h-1.5 w-10 rounded-full bg-[#e8d7f6]" />
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[#f1e5fa] p-3">
                <Database className="h-6 w-6 text-[#8a6aae]" />
              </div>
              <div>
                <h3 className="mb-2 text-xl text-[#4e4063]">Data & persistence</h3>
                <p className="text-[#6c5b84]">
                  PostgreSQL and MongoDB with intentional schemas, migrations, indexing for query paths I actually ship, and
                  transactional boundaries where consistency matters.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-[#eadcf4] bg-white/90 p-6 transition-all hover:shadow-[0_16px_40px_-30px_rgba(152,113,186,0.7)]">
            <span className="absolute right-5 top-5 h-1.5 w-10 rounded-full bg-[#f2d8e6]" />
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[#fbe8f3] p-3">
                <Layers className="h-6 w-6 text-[#ac6e95]" />
              </div>
              <div>
                <h3 className="mb-2 text-xl text-[#4e4063]">APIs & architecture</h3>
                <p className="text-[#6c5b84]">
                  REST and typed handlers in Node or Next.js route layers, validation at boundaries, service decomposition when
                  complexity warrants it, and versioning habits that protect clients.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-[#eadcf4] bg-white/90 p-6 transition-all hover:shadow-[0_16px_40px_-30px_rgba(152,113,186,0.7)]">
            <span className="absolute right-5 top-5 h-1.5 w-10 rounded-full bg-[#dce6f7]" />
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[#efe9fb] p-3">
                <Gauge className="h-6 w-6 text-[#7b72ae]" />
              </div>
              <div>
                <h3 className="mb-2 text-xl text-[#4e4063]">Performance & reliability</h3>
                <p className="text-[#6c5b84]">
                  Practical profiling, caching where it earns its complexity, structured errors and logging, and deployments that
                  teams can roll forward or isolate without guessing at root cause.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
