import FadeIn from "@/components/FadeIn";
import { ArrowLeft, Check, Clock, FolderKanban, Heart, Home, MapPin, Package, Repeat, Users } from "lucide-react";
import Link from "next/link";

export default function TiffinConnect() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="fixed top-[88px] left-6 z-30">
        <Link href="/labs" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-semibold bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-600">
          <ArrowLeft className="w-4 h-4" /> Zenn Labs
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-zinc-900 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(182,51,46,0.15),_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Early Prototype</span>
              <span className="text-zinc-500 font-mono text-sm">Zenn Labs — Concept 03</span>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                <FolderKanban className="w-8 h-8 text-brand-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Tiffin Connect</h1>
            </div>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl">
              Hyperlocal Meal-Prep Delivery & Subscription Platform — bridging the gap between home cooks and health-conscious consumers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">The Problem</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">The tiffin system is the world's most efficient meal delivery model—and it's invisible to technology.</h3>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
              In South Asian communities across Canada and the UK, the "tiffin system"—home-cooked meals delivered daily to subscribers—has operated informally for generations. It's healthy, affordable, community-rooted, and deeply trusted.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              The problem: it runs entirely on WhatsApp, cash, and word of mouth. There is no digital platform designed for recurring home-cook meal subscriptions, the logistics of multi-stop daily tiffin routes, or the financial management of a cottage-industry meal business. The market exists; the infrastructure doesn't.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-32 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6 text-center">The Solution</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">A Platform Built for the Tiffin Economy.</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Home, title: "Cook Onboarding Portal", desc: "Home cooks create a profile, set their menu, subscription tiers, and delivery radius." },
              { icon: Repeat, title: "Subscription Management", desc: "Consumers subscribe to weekly or monthly meal plans with pause, skip, and modify functionality." },
              { icon: MapPin, title: "Route Optimization Engine", desc: "AI-generated daily delivery routes for cooks, optimized for tiffin-box multi-drop logistics." },
              { icon: Package, title: "Tiffin Box Tracking", desc: "Reusable container tracking system that logs pickups, returns, and inventory per cook." },
              { icon: Users, title: "Community Discovery", desc: "Hyperlocal marketplace for consumers to discover home cooks in their neighbourhood by cuisine." },
              { icon: Heart, title: "Diet & Preference Filtering", desc: "Consumers filter by dietary requirements (halal, vegan, diabetic-friendly) from verified cooks." },
            ].map((f, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-colors h-full flex gap-5">
                  <f.icon className="w-8 h-8 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{f.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-32 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">The Market Opportunity</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "$1.8T", label: "Global meal kit & delivery market by 2030" },
              { value: "2.2M", label: "South Asian Canadians—the primary pilot market" },
              { value: "Zero", label: "Dedicated platforms for recurring tiffin-model delivery" },
            ].map((m, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="glass-card p-10 rounded-2xl text-center">
                  <p className="text-5xl font-black text-brand-primary mb-4">{m.value}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{m.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-32 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tighter mb-16">Development Roadmap</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { phase: "Phase 1", title: "Cook & Consumer App Wireframes", status: "complete" },
              { phase: "Phase 2", title: "Route Optimization Algorithm Design", status: "active" },
              { phase: "Phase 3", title: "MVP Build — 10 Cook Beta", status: "upcoming" },
              { phase: "Phase 4", title: "Surrey, BC City Pilot", status: "upcoming" },
              { phase: "Phase 5", title: "National Platform Launch", status: "upcoming" },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={`flex items-center gap-4 p-5 rounded-xl border text-left ${
                  item.status === "complete" ? "bg-zinc-950 border-zinc-800 opacity-60" :
                  item.status === "active" ? "bg-brand-primary/5 border-brand-primary/40" :
                  "bg-transparent border-zinc-900"
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.status === "complete" ? "bg-zinc-800" :
                    item.status === "active" ? "bg-brand-primary" : "bg-zinc-900"
                  }`}>
                    {item.status === "complete" ? <Check className="w-4 h-4 text-zinc-500" /> :
                     item.status === "active" ? <Clock className="w-4 h-4 text-white" /> :
                     <span className="w-2 h-2 rounded-full bg-zinc-700" />}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{item.phase}</span>
                    <p className="font-semibold text-sm mt-0.5">{item.title}</p>
                  </div>
                  {item.status === "active" && (
                    <span className="ml-auto text-xs text-brand-primary font-bold bg-brand-primary/10 px-3 py-1 rounded-full">In Progress</span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/labs/rydeplus" className="flex items-center gap-3 group text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-600 mb-1">Previous</p>
              <p className="font-semibold">Ryde+</p>
            </div>
          </Link>
          <Link href="/labs" className="text-zinc-600 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">
            All Concepts
          </Link>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">A home cook? A potential investor? Let's talk.</h2>
          <Link href="/contact" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all">
            Get in Touch
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
