"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Star, CheckCircle2, ArrowRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Bashir Elakum",
    company: "Black Friday Bins",
    role: "Founder & Owner",
    logo: "/images/logos/bfbins.png",
    projectTag: "Retail Video & Social System",
    metric: "10x Foot Traffic Growth",
    quote:
      "Zenn transformed our liquidation store's daily foot traffic. Their 24-hour turnaround social content and retail video strategy scaled our bin drop days from local crowds to lines wrapped around the building every single week.",
  },
  {
    name: "Jonathan Tam",
    company: "MK Food Company",
    role: "Operations Director",
    logo: "/images/logos/mkfc.svg",
    projectTag: "Custom Inventory ERP",
    metric: "0 Manual Spreadsheet Bottlenecks",
    quote:
      "Our wholesale inventory was trapped in spreadsheet chaos. Zenn built a custom ERP that synchronized our warehouse, supplier orders, and logistics in real-time. Bottlenecks that cost us thousands vanished in week one.",
  },
  {
    name: "Monsur Elahi",
    company: "Montax",
    role: "Founder & CEO",
    logo: "/images/logos/montax.svg",
    projectTag: "Financial Web Architecture",
    metric: "Sub-80ms Page Loads",
    quote:
      "When dealing with financial client data, security and sub-second speed are non-negotiable. Zenn delivered a Next.js platform that loads in under 80ms and instills immediate institutional trust with our clients.",
  },
  {
    name: "Yit Lan",
    company: "Dragons Inn",
    role: "Managing Director",
    logo: "/images/logos/dragons-inn-2.png",
    projectTag: "Restaurant ERP & Media",
    metric: "All-in-One Operations System",
    quote:
      "Zenn built our custom restaurant ERP system for kitchen POS and reservations, while simultaneously capturing our entire food photography menu. Having software and media under one roof saved us months of coordination.",
  },
  {
    name: "Adarsh",
    company: "Purelixr",
    role: "Brand Director",
    logo: "/images/logos/purelixr-2.svg",
    projectTag: "3-Day Luxury Product Photography",
    metric: "Cinematic Visual Standard",
    quote:
      "The 3-day intensive product photography Zenn produced for our fragrance line delivered liquid-smooth visual assets that position our products right alongside global luxury brands.",
  },
  {
    name: "RV Properties Team",
    company: "RV Properties",
    role: "Real Estate Leadership",
    logo: "/images/logos/rvp.svg",
    projectTag: "Brand Identity & Portal",
    metric: "+42% Lead Conversion Rate",
    quote:
      "Zenn designed our brand identity and high-converting real estate web portal from scratch. Our property inquiry conversion rate jumped by 42% in the first month following launch.",
  },
];

export default function ReviewCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeReview = reviews[activeIdx];

  return (
    <section className="py-32 bg-black border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle Red Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-mono text-brand-primary uppercase tracking-widest block mb-3">
            Empirical Results &amp; Endorsements
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Partner Testimonials
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base">
            Real feedback and measurable business metrics achieved alongside the founders and operators we serve.
          </p>
        </FadeIn>

        {/* Featured Spotlight Card */}
        <FadeIn delay={0.1} className="mb-12">
          <div className="relative rounded-3xl p-8 md:p-12 border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-black shadow-[0_0_60px_rgba(182,51,46,0.1)] overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Outcome
                  </span>
                  <span className="text-xs font-mono text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full">
                    {activeReview.projectTag}
                  </span>
                </div>

                <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed tracking-tight">
                  &ldquo;{activeReview.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 p-2 flex items-center justify-center relative">
                    <Image
                      src={activeReview.logo}
                      alt={activeReview.company}
                      width={32}
                      height={32}
                      className="object-contain max-h-7 w-auto"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {activeReview.name}
                    </h3>
                    <p className="text-zinc-400 text-xs font-mono">
                      {activeReview.role} &bull;{" "}
                      <span className="text-brand-primary font-semibold">
                        {activeReview.company}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Metric Highlight */}
              <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end text-center lg:text-right border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-8">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  Key Result Delivered
                </span>
                <p className="text-3xl md:text-4xl font-black text-brand-primary tracking-tight mb-4">
                  {activeReview.metric}
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-brand-primary text-brand-primary"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Interactive Selector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((rev, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <FadeIn key={rev.company} delay={idx * 0.06}>
                <div
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between h-full group ${
                    isSelected
                      ? "bg-zinc-900/90 border-brand-primary/80 shadow-[0_0_30px_rgba(182,51,46,0.25)] scale-[1.02]"
                      : "bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40"
                  }`}
                >
                  <div>
                    {/* Top Row: Logo & Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-9 px-3 py-1 bg-zinc-900 border border-zinc-800/80 rounded-xl flex items-center justify-center">
                        <Image
                          src={rev.logo}
                          alt={rev.company}
                          width={110}
                          height={36}
                          className="max-h-6 w-auto object-contain transition-opacity duration-300 opacity-90 group-hover:opacity-100"
                        />
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-brand-primary text-brand-primary"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-zinc-300 text-xs md:text-sm line-clamp-3 leading-relaxed mb-4">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold text-xs md:text-sm">
                        {rev.name}
                      </h4>
                      <p className="text-zinc-500 text-[11px] font-mono">
                        {rev.company}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-brand-primary text-white font-bold"
                          : "text-zinc-500 bg-zinc-900 group-hover:text-zinc-300"
                      }`}
                    >
                      {isSelected ? "Active" : "View"}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
