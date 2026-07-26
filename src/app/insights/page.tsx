"use client";

import FadeIn from "@/components/FadeIn";
import { ArrowRight, Clock, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Software", "Website", "Branding", "Photography", "Production", "Graphics design"];

const articles = [
  {
    id: 1,
    slug: "engineering-hospitality-dragons-inn-erp",
    title: "Dragons Inn — Full-Stack Restaurant ERP & Operational System",
    category: "Software",
    excerpt: "How we replaced five disconnected tools with a unified restaurant management ERP handling reservations, kitchen display, and POS.",
    date: "May 12",
    time: "10 min",
    client: "Dragons Inn",
  },
  {
    id: 2,
    slug: "scaling-wholesale-mk-food-erp",
    title: "MK Food Company — Custom Wholesale Inventory ERP Platform",
    category: "Software",
    excerpt: "Eliminating spreadsheet chaos and supply chain bottlenecks with a custom inventory logistics ERP.",
    date: "Apr 28",
    time: "9 min",
    client: "MK Food Company",
  },
  {
    id: 3,
    slug: "nextjs-speed-of-trust-montax",
    title: "Montax.ca — High-Performance Next.js Financial Website",
    category: "Website",
    excerpt: "How we leveraged server components and edge delivery to build a financial web platform clients trust implicitly.",
    date: "Apr 3",
    time: "12 min",
    client: "Montax.ca",
  },
  {
    id: 4,
    slug: "premium-property-identity-rvproperties",
    title: "RV Properties — Luxury Real Estate Web Platform & Logo Identity",
    category: "Branding",
    excerpt: "Building a high-converting property website and premium visual logo system for market leadership.",
    date: "Mar 2",
    time: "7 min",
    client: "RV Properties",
  },
  {
    id: 5,
    slug: "symbols-of-support-mycrosscanada-identity",
    title: "MyCrossCanada.ca — National Web Platform & Logo Identity System",
    category: "Website",
    excerpt: "Designing a nationwide community mobilization web platform and accessible visual mark.",
    date: "Mar 18",
    time: "8 min",
    client: "MyCrossCanada",
  },
  {
    id: 6,
    slug: "purpose-driven-tech-bcawe-governance",
    title: "BC AWE — Digital Governance Web Portal & Architecture",
    category: "Website",
    excerpt: "Designing a purpose-driven governance web platform with cultural intelligence and AAA accessibility.",
    date: "Feb 10",
    time: "8 min",
    client: "BC AWE",
  },
  {
    id: 7,
    slug: "purelixr-fragrance-photography-shoot",
    title: "Purelixr — Luxury Fragrance Product Photography Shoot",
    category: "Photography",
    excerpt: "Visual storytelling for a premium perfume line — capturing liquid reflection and luxury packaging.",
    date: "Feb 24",
    time: "6 min",
    client: "Purelixr",
  },
  {
    id: 8,
    slug: "24-hour-turns-black-friday-bins-social",
    title: "Black Friday Bins — High-Velocity Retail Media Campaign",
    category: "Production",
    excerpt: "How weekly 24-hour turnaround social video content translated into retail foot traffic.",
    date: "Jan 19",
    time: "7 min",
    client: "Black Friday Bins",
  },
  {
    id: 9,
    slug: "embers-grille-house-social-branding",
    title: "Embers Grille House — Social Media Branding & Graphic Design",
    category: "Graphics design",
    excerpt: "Social media post graphics and visual content strategy that drove dinner reservations.",
    date: "Jan 12",
    time: "5 min",
    client: "Embers Grille House",
  },
  {
    id: 10,
    slug: "dcurries-restaurant-media-launch",
    title: "D'Curries — Restaurant Brand Launch & Visual Production",
    category: "Production",
    excerpt: "Full-scale creative media coverage and launch production for an authentic Indian cuisine brand.",
    date: "Jan 15",
    time: "6 min",
    client: "D'Curries",
  },
  {
    id: 11,
    slug: "another-world-vr-commercial-shoot",
    title: "Another World VR — Commercial Short & Virtual Reality Production",
    category: "Production",
    excerpt: "Commercial film production capturing immersive virtual reality experiences.",
    date: "Jan 10",
    time: "8 min",
    client: "Another World VR",
  },
  {
    id: 12,
    slug: "authority-through-identity-ccs-branding",
    title: "CCS Consulting — Corporate Web Platform & Brand Identity",
    category: "Branding",
    excerpt: "Designing a professional services web portal and corporate visual system that commands market authority.",
    date: "Jan 8",
    time: "6 min",
    client: "CCS",
  },
  {
    id: 13,
    slug: "annam-gender-reveal-celebration",
    title: "Annam's Gender Reveal — Celebration Story & 12-Photo Collection",
    category: "Photography",
    excerpt: "Visual storytelling behind Annam's gender reveal — capturing 12 hero moments from pre-reveal decor to high-speed burst confetti captures.",
    date: "Jun 14",
    time: "6 min",
    client: "Annam",
  },
  {
    id: 14,
    slug: "manisha-gender-reveal-event",
    title: "Manisha's Gender Reveal — Party Documentary & 15-Photo Story",
    category: "Photography",
    excerpt: "A 15-photo narrative coverage breakdown capturing the warmth, family games, and multi-generational joy of Manisha's gender reveal.",
    date: "May 29",
    time: "7 min",
    client: "Manisha",
  },
  {
    id: 15,
    slug: "windsor-tamil-community-chariot-festival",
    title: "Windsor Tamil Community — Murugan Ther Thiruvizha Chariot Festival",
    category: "Production",
    excerpt: "Visual story documenting Murugan Ther Thiruvizha at the Hindu Temple and Cultural Centre of Windsor on Sunday, June 14, 2026.",
    date: "Jun 14",
    time: "8 min",
    client: "Windsor Tamil Community",
  },
];

const categoryColors: Record<string, string> = {
  Software: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  Website: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  Branding: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  Photography: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  Production: "text-red-400 border-red-500/30 bg-red-500/10",
  "Graphics design": "text-purple-400 border-purple-500/30 bg-purple-500/10",
};

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArticles =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Section 1: Hero with Multi-line Animated Background Text Marquee */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-zinc-950 pointer-events-none" />

        {/* Multi-line Animated Background Text Marquee */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 flex flex-col justify-center gap-6 select-none">
          <div className="flex whitespace-nowrap animate-marquee text-5xl md:text-8xl font-black tracking-tighter text-zinc-500">
            SOFTWARE &bull; WEBSITE &bull; BRANDING &bull; PHOTOGRAPHY &bull; PRODUCTION &bull; GRAPHICS DESIGN &bull;&nbsp;
            SOFTWARE &bull; WEBSITE &bull; BRANDING &bull; PHOTOGRAPHY &bull; PRODUCTION &bull; GRAPHICS DESIGN &bull;&nbsp;
          </div>
          <div className="flex whitespace-nowrap animate-marquee-reverse text-5xl md:text-8xl font-black tracking-tighter text-brand-primary">
            ARCHITECTURE &bull; LOGISTICS &bull; CINEMATIC STORYTELLING &bull; VISUAL IDENTITY &bull; INSIGHTS &bull;&nbsp;
            ARCHITECTURE &bull; LOGISTICS &bull; CINEMATIC STORYTELLING &bull; VISUAL IDENTITY &bull; INSIGHTS &bull;&nbsp;
          </div>
          <div className="flex whitespace-nowrap animate-marquee text-5xl md:text-8xl font-black tracking-tighter text-zinc-600">
            ZENN STUDIOS &bull; CASE STUDIES &bull; PRODUCTION STORIES &bull; ERP &bull; MEDIA &bull;&nbsp;
            ZENN STUDIOS &bull; CASE STUDIES &bull; PRODUCTION STORIES &bull; ERP &bull; MEDIA &bull;&nbsp;
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" /> Client Case Studies & Production Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Engineering, Design & <br className="hidden md:block" /> Visual Production Stories.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Deep dives into how we solve complex business problems — from custom enterprise ERPs and web platforms to 3-day product photography productions and commercial shoot videos.
            </p>
          </FadeIn>

          {/* Filter Bar */}
          <FadeIn direction="up" delay={0.3} className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-brand-primary text-white shadow-[0_0_20px_rgba(182,51,46,0.4)] scale-105"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Articles Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <FadeIn key={article.slug} delay={idx * 0.05}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full hover:border-brand-primary/50 transition-all duration-300 group shadow-lg"
                >
                  <div>
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${
                          categoryColors[article.category] || "text-zinc-400 border-zinc-800 bg-zinc-900"
                        }`}
                      >
                        {article.category}
                      </span>
                      <div className="flex items-center text-xs text-zinc-500 font-mono gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.time}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between mt-auto">
                    <span className="text-xs font-mono text-zinc-500">
                      Client: <span className="text-zinc-300 font-semibold">{article.client}</span>
                    </span>
                    <span className="text-xs font-semibold text-brand-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read Story <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Newsletter CTA */}
      <section className="py-24 bg-black border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Get Production & Code Intelligence Sent Direct.
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-base">
              Join 1,000+ founders, engineers, and creators receiving our case studies, production teardowns, and tech insights monthly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-primary text-sm"
              />
              <button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/80 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe <Send className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
