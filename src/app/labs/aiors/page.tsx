import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, BarChart3, Bot, Calendar, Check, ChefHat, Clock, Cpu, Database, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";

export default function AIORS() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="fixed top-[88px] left-6 z-30">
        <Link href="/labs" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-semibold bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-600">
          <ArrowLeft className="w-4 h-4" /> Zenn Labs
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-zinc-900 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(182,51,46,0.15),_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">In Development</span>
              <span className="text-zinc-500 font-mono text-sm">Zenn Labs — Concept 01</span>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-8 h-8 text-brand-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">AIORS</h1>
            </div>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl">AI-Powered Intelligent Operations for Restaurants — replacing fragmented tools with a single intelligence layer.</p>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">The Problem</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">Restaurants are drowning in disconnected tools.</h3>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
              The average independent restaurant uses 6–8 separate software platforms: a POS system, inventory management, staff scheduling, accounting, a reservation tool, online ordering, and reporting dashboards—and none of them talk to each other.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              The result is operational chaos: food waste from inaccurate inventory, overstaffing on slow nights, underpricing because of a lack of real-time cost analysis, and a manager who spends 4 hours a day manually reconciling data between systems that should communicate automatically.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["POS System", "Inventory", "Scheduling", "Reservations", "Online Ordering", "Accounting"].map((tool, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl text-center text-zinc-500 font-mono text-sm">
                  {tool}
                </div>
              ))}
            </div>
            <div className="text-center mt-6 text-zinc-600 font-mono text-sm">↑ These 6 tools rarely communicate. AIORS replaces all of them.</div>
          </FadeIn>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-32 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6 text-center">The Solution</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">One Platform. Total Intelligence.</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShoppingCart, title: "Smart POS", desc: "AI-augmented point-of-sale with real-time ingredient deduction and live margin tracking per order." },
              { icon: Database, title: "Inventory Intelligence", desc: "Predictive restocking based on historical sales patterns, local events, and weather data correlation." },
              { icon: Calendar, title: "Dynamic Scheduling", desc: "AI-generated staff schedules that optimize coverage against predicted volume, reducing labour cost." },
              { icon: ChefHat, title: "Menu Engineering", desc: "Live profitability analysis per menu item with automated recommendations to optimize pricing." },
              { icon: BarChart3, title: "Unified Reporting", desc: "Single executive dashboard consolidating all operational KPIs in real-time." },
              { icon: Bot, title: "AIORS AI Assistant", desc: "A conversational AI for managers to query any operational data using natural language." },
            ].map((f, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-colors h-full">
                  <f.icon className="w-8 h-8 text-brand-primary mb-5" />
                  <h4 className="font-bold text-lg mb-3">{f.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stage & Timeline */}
      <section className="py-32 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">Development Roadmap</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { phase: "Phase 1", title: "Core POS & Inventory MVP", status: "complete" },
              { phase: "Phase 2", title: "AI Scheduling Engine", status: "complete" },
              { phase: "Phase 3", title: "Menu Engineering Module", status: "active" },
              { phase: "Phase 4", title: "Pilot Program (3 Restaurants)", status: "upcoming" },
              { phase: "Phase 5", title: "Public Beta Launch", status: "upcoming" },
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
          <Link href="/labs" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Labs
          </Link>
          <Link href="/labs/rydeplus" className="flex items-center gap-3 group text-zinc-400 hover:text-white transition-colors text-right">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-600 mb-1">Next Concept</p>
              <p className="font-semibold">Ryde+</p>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">Interested in piloting AIORS?</h2>
          <Link href="/contact" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all">
            Apply for Early Access
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
