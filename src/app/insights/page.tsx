"use client";

import FadeIn from "@/components/FadeIn";
import { ArrowRight, Clock, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Tech", "Design", "Strategy", "Studio News"];
const articles = [
  { id: 1, title: "Why Next.js 15 is the Ultimate Full-Stack Architecture", category: "Tech", excerpt: "Exploring the new rendering models and why we use it for all enterprise solutions.", date: "Oct 24", time: "5 min" },
  { id: 2, title: "Cinematic Branding: Storytelling as a Service", category: "Design", excerpt: "How treating your brand like a movie impacts customer retention.", date: "Oct 12", time: "8 min" },
  { id: 3, title: "Scaling Logistics with AI: A Look into Ryde+", category: "Strategy", excerpt: "The architectural decisions behind our latest incubator concept.", date: "Sep 30", time: "10 min" },
  { id: 4, title: "We Are Moving! New Zenn HQ", category: "Studio News", excerpt: "A look inside our new production studio and engineering hub.", date: "Sep 15", time: "2 min" },
  { id: 5, title: "The Death of 'Templates' in 2026", category: "Design", excerpt: "Why custom logic is replacing off-the-shelf themes for serious businesses.", date: "Sep 01", time: "6 min" },
  { id: 6, title: "Optimizing PostgreSQL for Restaurant POS Systems", category: "Tech", excerpt: "Deep dive into the database management powering AIORS.", date: "Aug 20", time: "12 min" },
];

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredArticles = activeFilter === "All" 
    ? articles 
    : articles.filter(a => a.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Section 1: Hero (The Authority) */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-zinc-950 pointer-events-none" />
        
        {/* Floating Text Animation BG */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none flex flex-col justify-center gap-8">
          <div className="animate-infinite-scroll whitespace-nowrap text-9xl font-black uppercase tracking-tighter">AI LOGISTICS NEXT.JS 15 CINEMATIC BRANDING ERP AUTOMATION</div>
          <div className="animate-infinite-scroll whitespace-nowrap text-9xl font-black uppercase tracking-tighter" style={{ animationDirection: 'reverse' }}>TYPESCRIPT STORYTELLING UI/UX DESIGN HEADLESS CMS</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Insights & Perspectives.</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
              Deep dives into the logic, craft, and future of digital innovation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Featured Article (The Highlight) */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <Link href="#" className="group block">
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 items-center bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-900 hover:border-brand-primary/50 transition-colors duration-500">
                <div className="w-full lg:w-3/5 h-64 lg:h-[450px] relative overflow-hidden bg-zinc-900">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-zinc-700 uppercase tracking-widest text-sm">Cover Image Placeholder</div>
                </div>
                <div className="w-full lg:w-2/5 p-10 lg:p-12 pl-10 lg:pl-0 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Tech</span>
                    <span className="text-zinc-500 text-sm flex items-center"><Clock className="w-4 h-4 mr-1.5" /> 14 min read</span>
                    <span className="text-zinc-500 text-sm">Oct 28</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-brand-primary transition-colors leading-tight">Why Tiffin Services are the next frontier for ERP Logistics.</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    An architectural breakdown of how specialized meal-prep logistics require fundamentally different logic than traditional on-demand delivery, and how we are solving it.
                  </p>
                  <span className="inline-flex items-center text-brand-primary font-bold">
                    Read Featured Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
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
            <h2 className="text-3xl font-bold tracking-tighter">Latest Thinking</h2>
            
            {/* Filterable Bar */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeFilter === cat ? 'bg-brand-primary text-white' : 'bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <FadeIn key={article.id} delay={idx * 0.05}>
                <Link href="#" className="glass-card rounded-2xl overflow-hidden group block h-full flex flex-col">
                  {/* Thumbnail Placeholder */}
                  <div className="h-48 bg-zinc-900 relative overflow-hidden">
                     <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors" />
                     <div className="absolute inset-0 bg-zinc-800 scale-100 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-brand-primary text-xs font-bold uppercase tracking-wider">{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-700" />
                      <span className="text-zinc-500 text-xs">{article.time}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{article.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{article.excerpt}</p>
                    
                    <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-brand-primary transition-colors mt-auto">
                      Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Stay ahead of the curve.</h2>
            <p className="text-zinc-400 mb-10 text-lg">Monthly insights delivered directly to your inbox. No spam, just architecture.</p>
            
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="w-full sm:flex-grow bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                required
              />
              <button type="submit" className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center whitespace-nowrap">
                Subscribe <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Footer CTA */}
      <section className="py-20 bg-zinc-950 text-center">
        <FadeIn>
          <p className="text-zinc-500 mb-4 font-mono text-sm uppercase tracking-widest">Feedback</p>
          <h3 className="text-2xl font-bold mb-6">Have a topic you want us to cover?</h3>
          <Link href="/contact" className="text-brand-primary hover:text-white font-semibold transition-colors border-b border-brand-primary/30 hover:border-white pb-1">
            Suggest a Topic directly to our editorial team
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
