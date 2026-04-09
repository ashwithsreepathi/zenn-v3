import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

interface CaseStudyProps {
  title: string;
  tagline: string;
  tag: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  result: string;
  metrics?: { label: string; value: string }[];
  externalUrl?: string;
  prevProject?: { slug: string; title: string };
  nextProject?: { slug: string; title: string };
}

export default function CaseStudyLayout({
  title,
  tagline,
  tag,
  year,
  services,
  challenge,
  solution,
  result,
  metrics,
  externalUrl,
  prevProject,
  nextProject,
}: CaseStudyProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Back Nav */}
      <div className="fixed top-[88px] left-6 z-30">
        <Link
          href="/work"
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-semibold bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-600"
        >
          <ArrowLeft className="w-4 h-4" /> All Work
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-zinc-900 relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(182,51,46,0.07),_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-primary text-xs font-bold uppercase tracking-wider bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                {tag}
              </span>
              <span className="text-zinc-500 font-mono text-sm">{year}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">{title}</h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl">{tagline}</p>
          </FadeIn>

          {externalUrl && (
            <FadeIn delay={0.2} className="mt-8">
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-white transition-colors font-semibold border-b border-brand-primary/30 hover:border-white pb-1"
              >
                Visit Live Site <ExternalLink className="w-4 h-4" />
              </a>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Hero Visual Placeholder */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeIn>
            <div className="w-full aspect-video rounded-3xl overflow-hidden glass-card relative flex items-center justify-center bg-zinc-900">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
              <p className="text-zinc-600 font-mono text-sm tracking-widest uppercase z-10">
                Project Visual / Screenshot
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sidebar + Body */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-28 self-start">
            <FadeIn>
              <div className="glass-card p-8 rounded-2xl space-y-6">
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-3">Services</p>
                  <ul className="space-y-2">
                    {services.map((s) => (
                      <li key={s} className="text-sm text-zinc-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-zinc-800 pt-6">
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-3">Year</p>
                  <p className="text-sm text-zinc-300">{year}</p>
                </div>
              </div>
            </FadeIn>
          </aside>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 space-y-16">
            <FadeIn>
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">The Challenge</h2>
                <p className="text-xl text-zinc-300 leading-relaxed">{challenge}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">The Solution</h2>
                <p className="text-xl text-zinc-300 leading-relaxed">{solution}</p>
              </div>
            </FadeIn>

            {/* Mid-page Visual */}
            <FadeIn delay={0.15}>
              <div className="w-full aspect-[16/7] rounded-2xl glass-card overflow-hidden relative flex items-center justify-center bg-zinc-900">
                <p className="text-zinc-600 font-mono text-sm tracking-widest uppercase">Process / UI Detail Visual</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">The Result</h2>
                <p className="text-xl text-zinc-300 leading-relaxed">{result}</p>
              </div>
            </FadeIn>

            {/* Metrics */}
            {metrics && metrics.length > 0 && (
              <FadeIn delay={0.25}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="glass-card p-8 rounded-2xl text-center border-zinc-800 hover:border-brand-primary/30 transition-colors"
                    >
                      <p className="text-4xl font-black text-brand-primary mb-2">{m.value}</p>
                      <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">{m.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="flex items-center gap-3 group text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-600 mb-1">Previous</p>
                <p className="font-semibold">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link href="/work" className="text-zinc-600 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">
            All Work
          </Link>

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="flex items-center gap-3 group text-zinc-400 hover:text-white transition-colors text-right"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-600 mb-1">Next</p>
                <p className="font-semibold">{nextProject.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">
            Ready to build something this impactful?
          </h2>
          <Link
            href="/enquiry"
            className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)]"
          >
            Start Your Project
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
