import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { getPostBySlug, getAllSlugs } from "../blogData";

// ── Static Generation ──────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug) as any;

  return {
    title: post?.title || "Post Not Found",
    // ... rest of your metadata
  };
}

// ── Category Badge Colors ──────────────────────────────────────────────────────
const categoryColors: Record<string, string> = {
  "Code & Architecture": "from-blue-600/20 to-blue-500/5 text-blue-400 border-blue-500/30",
  "Brand Theory": "from-violet-600/20 to-violet-500/5 text-violet-400 border-violet-500/30",
  "Production Logic": "from-amber-600/20 to-amber-500/5 text-amber-400 border-amber-500/30",
  "Social Velocity": "from-emerald-600/20 to-emerald-500/5 text-emerald-400 border-emerald-500/30",
};

function CategoryBadge({ category }: { category: string }) {
  const color = categoryColors[category] ?? "from-zinc-600/20 to-zinc-500/5 text-zinc-400 border-zinc-500/30";
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border bg-gradient-to-r ${color}`}
    >
      {category}
    </span>
  );
}

// ── Code Snippet Component ─────────────────────────────────────────────────────
function CodeBlock({ lang, label, code }: { lang: string; label: string; code: string }) {
  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-zinc-700/60 shadow-[0_0_30px_rgba(182,51,46,0.08),_0_0_0_1px_rgba(255,255,255,0.04)] bg-zinc-950">
      <div className="flex items-center justify-between px-5 py-3 bg-zinc-900 border-b border-zinc-800">
        <span className="text-zinc-400 text-xs font-mono">{label}</span>
        <span className="text-brand-primary text-xs font-mono uppercase tracking-wider">{lang}</span>
      </div>
      <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-zinc-300 font-mono whitespace-pre">
        {code}
      </pre>
    </div>
  );
}

// ── Workflow Diagram ───────────────────────────────────────────────────────────
function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="my-10 p-8 rounded-2xl glass-card border-zinc-700/60">
      <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
        Workflow
      </p>
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary text-xs font-bold">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-6 bg-gradient-to-b from-brand-primary/30 to-transparent mt-1" />
              )}
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed pt-1.5 pb-6">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function BlogPostPage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Back Nav */}
      <div className="fixed top-[88px] left-6 z-30">
        <Link
          href="/insights"
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-semibold bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-600"
        >
          <ArrowLeft className="w-4 h-4" /> All Insights
        </Link>
      </div>

      {/* ── Section 1: Hero ─────────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 border-b border-zinc-900 relative overflow-hidden bg-zinc-950">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(182,51,46,0.06),_transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(99,102,241,0.04),_transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <CategoryBadge category={post.category} />
              <Link
                href={post.capabilityHref}
                className="text-xs text-zinc-500 hover:text-brand-primary transition-colors font-mono uppercase tracking-wider border-b border-zinc-800 hover:border-brand-primary/50 pb-0.5"
              >
                {post.capabilityLabel} ↗
              </Link>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8">
              {post.headline}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.byline.date}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.byline.author}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </FadeIn>

          {/* Featured Image — Antigravity stylized placeholder */}
          <FadeIn delay={0.2} className="mt-14">
            <div className="w-full aspect-[16/7] rounded-3xl overflow-hidden relative border border-zinc-800 shadow-[0_0_60px_rgba(182,51,46,0.08),_0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
              {/* Inner glow grid */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "60px 60px"
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(182,51,46,0.12),_transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <CategoryBadge category={post.category} />
                <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
                  Featured Visual — {post.byline.date}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2: Introduction ─────────────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">
              {post.intro.heading}
            </h2>
            <div className="space-y-6">
              {post.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-zinc-400 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-900 max-w-3xl mx-auto w-full px-6" />

      {/* ── Section 3: Deep Dive ─────────────────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">
              The Solution &amp; Logic
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-16">
              {post.deepDive.heading}
            </h2>
          </FadeIn>

          <div className="space-y-20">
            {post.deepDive.sections.map((section, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    {section.h2}
                  </h2>
                  {section.h3 && (
                    <h3 className="text-base font-semibold text-zinc-400 mb-6 uppercase tracking-wide">
                      {section.h3}
                    </h3>
                  )}
                  <div className="space-y-5">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-zinc-400 leading-relaxed text-lg">
                        {/* Inject capability link into relevant copy */}
                        {p.includes("capability") ? (
                          <>
                            {p.split("capability")[0]}capability
                            {" "}
                            <Link
                              href={post.capabilityHref}
                              className="text-brand-primary hover:text-white underline underline-offset-4 transition-colors"
                            >
                              ({post.capabilityLabel})
                            </Link>
                            {p.split("capability").slice(1).join("capability")}
                          </>
                        ) : p}
                      </p>
                    ))}
                  </div>

                  {section.codeSnippet && (
                    <CodeBlock
                      lang={section.codeSnippet.lang}
                      label={section.codeSnippet.label}
                      code={section.codeSnippet.code}
                    />
                  )}

                  {section.diagramSteps && (
                    <WorkflowDiagram steps={section.diagramSteps} />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: The Proof ─────────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(182,51,46,0.07),_transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">
              The Proof
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              {post.proof.heading}
            </h2>
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-12">
              Client: {post.proof.client}
            </p>
          </FadeIn>

          {/* Case Study Visual */}
          <FadeIn delay={0.1}>
            <div className="w-full aspect-[16/7] rounded-2xl glass-card overflow-hidden relative flex items-center justify-center mb-12 border border-zinc-800 shadow-[0_0_40px_rgba(182,51,46,0.06)]">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-950" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
                  {post.proof.client} — Project Mockup
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-xl text-zinc-300 leading-relaxed mb-12">
              {post.proof.body}
            </p>
          </FadeIn>

          {/* Metrics */}
          {post.proof.metrics && post.proof.metrics.length > 0 && (
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-3 gap-6 mb-12">
                {post.proof.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="glass-card p-8 rounded-2xl text-center hover:border-brand-primary/40 transition-colors"
                  >
                    <p className="text-4xl font-black text-brand-primary mb-2">{m.value}</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{m.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.25}>
            <Link
              href={`/work/${post.proof.clientSlug}`}
              className="inline-flex items-center gap-2 text-brand-primary hover:text-white transition-colors font-semibold border-b border-brand-primary/30 hover:border-white pb-1"
            >
              View Full Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 5: Post-Article CTA ──────────────────────────────────────── */}
      <section className="py-32 bg-black border-t border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(182,51,46,0.15),_transparent_55%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">
              Work With Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Ready to apply this level of thinking to your project?
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              We don't just write about innovation — we build it. Contact us to start your journey.
            </p>
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.35)] hover:shadow-[0_0_60px_rgba(182,51,46,0.55)]"
            >
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 6: Related Insights ──────────────────────────────────────── */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
              Continue Reading
            </p>
            <h2 className="text-3xl font-bold tracking-tighter mb-14">
              Related Insights
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {post.related.map((rel, i) => (
              <FadeIn key={rel.slug} delay={i * 0.08}>
                <Link
                  href={`/insights/${rel.slug}`}
                  className="glass-card rounded-2xl overflow-hidden group block h-full flex flex-col hover:border-brand-primary/40 transition-all duration-500"
                >
                  {/* Thumbnail */}
                  <div className="h-44 bg-zinc-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 scale-100 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(182,51,46,0.08),_transparent_70%)]" />
                    <div className="absolute top-4 left-4">
                      <CategoryBadge category={rel.category} />
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-3.5 h-3.5 text-zinc-600" />
                      <span className="text-zinc-500 text-xs">{rel.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-brand-primary transition-colors leading-snug flex-grow">
                      {rel.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                      {rel.excerpt}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-zinc-400 group-hover:text-brand-primary transition-colors mt-auto">
                      Read Article{" "}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
