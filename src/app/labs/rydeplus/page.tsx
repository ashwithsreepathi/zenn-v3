import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, MapPin, RefreshCw, Shield, Star, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function RydePlus() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="fixed top-[88px] left-6 z-30">
        <Link href="/labs" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-semibold bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-600">
          <ArrowLeft className="w-4 h-4" /> Zenn Labs
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-zinc-900 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(182,51,46,0.15),_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Concept Validated</span>
              <span className="text-zinc-500 font-mono text-sm">Zenn Labs — Concept 02</span>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-brand-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Ryde+</h1>
            </div>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl">
              Recurring Intelligent Ride Logistics — a subscription-first rideshare model built for predictable, recurring transportation needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">The Problem</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">On-demand rideshare is built for spontaneity. Life isn't.</h3>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
              Millions of people have predictable, recurring transportation needs — the daily commuter, the senior who needs a weekly medical appointment ride, the corporate team that shuttles between offices every Tuesday.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Current platforms like Uber and Lyft treat every trip as an isolated, on-demand event. This introduces pricing volatility, availability anxiety, and no relationship between drivers and passengers. For predictable lives, this is a fundamentally broken model.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-32 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6 text-center">The Solution</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">Subscribe to a Route. Not a Ride.</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: RefreshCw, title: "Subscription-First Model", desc: "Passengers subscribe to recurring routes with fixed monthly pricing—no surge, no guesswork." },
              { icon: Users, title: "Dedicated Driver Matching", desc: "Passengers are matched with a primary driver for their route, building familiarity and trust." },
              { icon: Shield, title: "Guaranteed Availability", desc: "Subscribed routes are guaranteed—your driver is committed to your schedule, not available pools." },
              { icon: MapPin, title: "Intelligent Route Optimization", desc: "AI bundles compatible subscriptions to allow shared-route economics while keeping pickup precision." },
              { icon: Star, title: "Premium Corporate Tier", desc: "Dedicated fleet solutions for businesses with recurring inter-office shuttle or client transport needs." },
              { icon: Calendar, title: "Flexible Schedule Management", desc: "Easy trip modification via app—pause, reschedule, or add one-time rides without losing your subscription pricing." },
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

      {/* Target Segments */}
      <section className="py-32 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">Who Ryde+ Serves</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Daily Commuters", desc: "Office workers who need reliable, predictable daily commutes without parking costs or transit headaches." },
              { title: "Seniors & Accessibility", desc: "Older adults who need safe, familiar, and reliable rides for recurring medical and social appointments." },
              { title: "Corporate Fleets", desc: "Companies that shuttle teams between campuses, to airports, or to client sites on a predictable recurring schedule." },
            ].map((seg, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="border border-zinc-900 p-10 rounded-3xl bg-zinc-950 h-full">
                  <div className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4">Segment {String(idx + 1).padStart(2, '0')}</div>
                  <h3 className="text-2xl font-bold mb-4">{seg.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{seg.desc}</p>
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
              { phase: "Phase 1", title: "Market Validation Research", status: "complete" },
              { phase: "Phase 2", title: "App Architecture Design", status: "complete" },
              { phase: "Phase 3", title: "Driver & Passenger App Prototype", status: "active" },
              { phase: "Phase 4", title: "City Pilot (Vancouver, BC)", status: "upcoming" },
              { phase: "Phase 5", title: "Series A Funding & Expansion", status: "upcoming" },
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
          <Link href="/labs/aiors" className="flex items-center gap-3 group text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-600 mb-1">Previous</p>
              <p className="font-semibold">AIORS</p>
            </div>
          </Link>
          <Link href="/labs/tiffinconnect" className="flex items-center gap-3 group text-zinc-400 hover:text-white transition-colors text-right">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-600 mb-1">Next Concept</p>
              <p className="font-semibold">Tiffin Connect</p>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">Interested in Ryde+?</h2>
          <Link href="/contact" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all">
            Register Your Interest
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
