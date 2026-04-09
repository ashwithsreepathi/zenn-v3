"use client";

import FadeIn from "@/components/FadeIn";
import { ArrowRight, Camera, Code2, PenTool, Share2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  { slug: "montax", title: "Montax", category: "software", tag: "Web App", desc: "Next-gen financial services platform with a client portal and document management system.", year: "2025" },
  { slug: "mycrosscanada", title: "MyCrossCanada", category: "branding", tag: "Brand & Web", desc: "National directory platform connecting Canadians to trusted local services.", year: "2024" },
  { slug: "rvproperties", title: "RV Properties", category: "branding", tag: "Branding", desc: "Premium real estate branding with full visual identity and digital marketing suite.", year: "2024" },
  { slug: "bcawe", title: "BC AWE", category: "software", tag: "Web Platform", desc: "Government-adjacent governance portal for indigenous communities in British Columbia.", year: "2024" },
  { slug: "mkfoodco", title: "MK Food Company", category: "software", tag: "ERP / Logistics", desc: "Custom wholesale inventory and distribution logistics management platform.", year: "2024" },
  { slug: "blackfridaybins", title: "Black Friday Bins", category: "media", tag: "Media & Social", desc: "High-velocity weekly video campaigns translating to massive physical retail foot traffic.", year: "2025" },
  { slug: "dragonsinn", title: "Dragons Inn", category: "software", tag: "Web Design", desc: "Hospitality-focused web presence with online ordering and reservation management.", year: "2024" },
  { slug: "embersgrillehouse", title: "Embers Grille House", category: "media", tag: "Photography", desc: "Cinematic food and ambiance photography that elevated the brand's fine-dining perception.", year: "2025" },
];

const filters = [
  { id: "all", label: "All Work", icon: null },
  { id: "software", label: "Software", icon: Code2 },
  { id: "branding", label: "Branding", icon: PenTool },
  { id: "media", label: "Media", icon: Camera },
  { id: "social", label: "Social", icon: Share2 },
];

export default function WorkIndex() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(182,51,46,0.1),_transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              The Work.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
              A curated selection of our most defining projects—where logic met artistry and businesses became landmarks.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-black border-b border-zinc-900 sticky top-[72px] z-20 backdrop-blur-md bg-black/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === f.id
                    ? "bg-brand-primary text-white shadow-[0_0_20px_rgba(182,51,46,0.3)]"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {f.icon && <f.icon className="w-4 h-4" />}
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 bg-black flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project, idx) => (
              <FadeIn key={project.slug} delay={idx * 0.05}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900"
                >
                  {/* BG placeholder */}
                  <div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-brand-primary text-xs font-bold uppercase tracking-wider bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                        {project.tag}
                      </span>
                      <span className="text-zinc-500 text-xs font-mono">{project.year}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                      {project.desc}
                    </p>
                    <span className="inline-flex items-center text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                      View Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-40 text-center text-zinc-600 font-mono text-sm uppercase tracking-widest">
              No matching projects
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-zinc-950 border-t border-zinc-900 text-center">
        <FadeIn>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-4">What's next</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10">
            Become the next case study.
          </h2>
          <Link
            href="/enquiry"
            className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)]"
          >
            Start a Project
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
