"use client";

import FadeIn from "@/components/FadeIn";
import { ArrowRight, Clock, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Code & Architecture", "Brand Theory", "Production Logic", "Social Velocity"];

const articles = [
  {
    id: 1,
    slug: "nextjs-speed-of-trust-montax",
    title: "Next.js and the Speed of Trust: Engineering a Financial Platform for Montax.ca",
    category: "Code & Architecture",
    excerpt: "How we leveraged server components and edge delivery to build a financial platform clients trust implicitly.",
    date: "Apr 3",
    time: "12 min",
  },
  {
    id: 2,
    slug: "symbols-of-support-mycrosscanada-identity",
    title: "Symbols of Support: Defining the MyCrossCanada.ca Visual Identity",
    category: "Brand Theory",
    excerpt: "When a brand must communicate both urgency and compassion, every design decision carries weight.",
    date: "Mar 18",
    time: "8 min",
  },
  {
    id: 3,
    slug: "color-grading-fine-dining-media",
    title: "Color Grading the Experience: The Art of Fine Dining Media",
    category: "Production Logic",
    excerpt: "How post-production decisions shape appetite, atmosphere, and brand perception in restaurant photography.",
    date: "Feb 28",
    time: "7 min",
  },
  {
    id: 4,
    slug: "24-hour-turns-high-velocity-retail-video",
    title: "24-Hour Turns: Mastering High-Velocity Video for Retail",
    category: "Social Velocity",
    excerpt: "Inside the content system that lets a retail brand publish daily social video at premium quality.",
    date: "Jan 15",
    time: "9 min",
  },
];

const categoryColors: Record<string, string> = {
  "Code & Architecture": "text-blue-400",
  "Brand Theory": "text-violet-400",
  "Production Logic": "text-amber-400",
  "Social Velocity": "text-emerald-400",
};

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArticles =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Section 1: Hero (The Authority) */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-zinc-950 pointer-events-none" />

        {/* Floating Text Animation BG */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none flex flex-col justify-center gap-8">
          <div className="animate-infinite-scroll whitespace-nowrap text-9xl font-black uppercase tracking-tighter">
            CODE & ARCHITECTURE BRAND THEORY PRODUCTION LOGIC SOCIAL VELOCITY
          </div>
          <div
            className="animate-infinite-scroll whitespace-nowrap text-9xl font-black uppercase tracking-tighter"
            style={{ animationDirection: "reverse" }}
          >
            NEXT.JS 15 COLOR GRADING IDENTITY SYSTEMS CONTENT VELOCITY
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Insights &amp; Perspectives.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
              Deep dives into the logic, craft, and future of digital
              innovation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Featured Article (The Highlight) */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <Link
              href={`/insights/${articles[0].slug}`}
              className="group block"
            >
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 items-center bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-900 hover:border-brand-primary/50 transition-colors duration-500">
                {/* Cover Visual */}
                <div className="w-full lg:w-3/5 h-64 lg:h-[450px] relative overflow-hidden bg-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(182,51,46,0.1),_transparent_65%)]" />
                  {/* Grid lines */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      Code &amp; Architecture
                    </span>
                    <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
                      Featured Article
                    </p>
                  </div>
                </div>

                <div className="w-full lg:w-2/5 p-10 lg:p-12 pl-10 lg:pl-0 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                      Featured
                    </span>
                    <span className="text-zinc-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" /> {articles[0].time} read
                    </span>
                    <span className="text-zinc-500 text-sm">{articles[0].date}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-brand-primary transition-colors leading-tight">
                    {articles[0].title}
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {articles[0].excerpt}
                  </p>
                  <span className="inline-flex items-center text-brand-primary font-bold">
                    Read Featured Article{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: The Knowledge Grid (Main Feed) */}
      <section className="py-20 bg-zinc-950 relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <h2 className="text-3xl font-bold tracking-tighter">
              Latest Thinking
            </h2>

            {/* Filterable Bar */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeFilter === cat
                      ? "bg-brand-primary text-white"
                      : "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <FadeIn key={article.id} delay={idx * 0.05}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="glass-card rounded-2xl overflow-hidden group block h-full flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="h-48 bg-zinc-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 scale-100 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(182,51,46,0.06),_transparent_70%)]" />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          categoryColors[article.category] ?? "text-brand-primary"
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-zinc-700" />
                      <span className="text-zinc-500 text-xs">{article.time}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>

                    <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-brand-primary transition-colors mt-auto">
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

      {/* Section 4: Newsletter Opt-in (The Hook) */}
      <section className="py-32 bg-black border-y border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(182,51,46,0.15),_transparent_60%)]" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Stay ahead of the curve.
            </h2>
            <p className="text-zinc-400 mb-10 text-lg">
              Monthly insights delivered directly to your inbox. No spam, just
              architecture.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your professional email"
                className="w-full sm:flex-grow bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center whitespace-nowrap"
              >
                Subscribe <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Footer CTA */}
      <section className="py-20 bg-zinc-950 text-center">
        <FadeIn>
          <p className="text-zinc-500 mb-4 font-mono text-sm uppercase tracking-widest">
            Feedback
          </p>
          <h3 className="text-2xl font-bold mb-6">
            Have a topic you want us to cover?
          </h3>
          <Link
            href="/contact"
            className="text-brand-primary hover:text-white font-semibold transition-colors border-b border-brand-primary/30 hover:border-white pb-1"
          >
            Suggest a Topic directly to our editorial team
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
