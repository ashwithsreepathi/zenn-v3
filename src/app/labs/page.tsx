import FadeIn from "@/components/FadeIn";
import { ArrowRight, Beaker, Cpu, FolderKanban, Gavel, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

const concepts = [
  {
    slug: "aiors",
    name: "AIORS",
    subtitle: "AI-Powered Intelligent Operations for Restaurants",
    stage: "In Development",
    desc: "A comprehensive SaaS platform replacing fragmented restaurant operations—from POS to inventory, staff scheduling, and analytics—with a single, AI-driven intelligence layer.",
    icon: Cpu,
  },
  {
    slug: "ahlc",
    name: "AHLC",
    subtitle: "All-in-One Pallet & Liquidation Warehouse Platform",
    stage: "In Development",
    desc: "A comprehensive SaaS for liquidation warehouse and pallet business owners — featuring self-hosted auctions, pallet product entry and cataloging, POS integration, retail store and online sales management, and full warehouse operations.",
    icon: Gavel,
  },
  {
    slug: "rydeplus",
    name: "Ryde+",
    subtitle: "Recurring Intelligent Ride Logistics",
    stage: "Concept Validated",
    desc: "A subscription-first rideshare model for predictable, recurring transportation needs—built for commuters, seniors, and corporate fleets who need reliability over spontaneity.",
    icon: TrendingUp,
  },
  {
    slug: "tiffinconnect",
    name: "Tiffin Connect",
    subtitle: "Hyperlocal Meal-Prep Delivery & Subscription Platform",
    stage: "Early Prototype",
    desc: "Bridging the gap between home cooks and health-conscious consumers through a hyperlocal meal-subscription platform with specialized 'tiffin' logistics and recurring fulfillment intelligence.",
    icon: FolderKanban,
  },
];

export default function ZennLabs() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(182,51,46,0.12),_transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-8">
              <Beaker className="w-4 h-4" /> Zenn Labs
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Where the Future<br />is in Production.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
              Zenn Labs is our internal incubator for proprietary software concepts. We identify unsolved problems in high-friction industries and build the platforms that solve them—rigorously and at scale.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <Lightbulb className="w-16 h-16 text-brand-primary mx-auto mb-8 opacity-70" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">Why We Build for Ourselves.</h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Every client platform we build teaches us something new. Zenn Labs is where those lessons become proprietary intellectual property. By operating our own SaaS ventures, we become better engineers and better advisors to the businesses we serve.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">Active Concepts</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {concepts.map((concept, idx) => (
              <FadeIn key={concept.slug} delay={idx * 0.1}>
                <Link href={`/labs/${concept.slug}`} className="group block h-full">
                  <div className="glass-card p-10 rounded-3xl h-full flex flex-col hover:border-brand-primary/50 transition-colors duration-500">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
                        <concept.icon className="w-7 h-7 text-brand-primary" />
                      </div>
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                        {concept.stage}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{concept.name}</h3>
                    <p className="text-zinc-500 text-sm mb-4 font-medium">{concept.subtitle}</p>
                    <p className="text-zinc-400 leading-relaxed flex-grow text-sm">{concept.desc}</p>
                    <span className="inline-flex items-center text-sm font-bold mt-8 text-zinc-400 group-hover:text-brand-primary transition-colors">
                      Explore Concept <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Pipeline / Methodology */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">The Labs Pipeline</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Problem Identification", desc: "We locate high-friction, underserved industries where no elegant digital solution exists." },
              { step: "02", title: "Concept Validation", desc: "Market research, user interviews, and competitive landscape mapping to validate the opportunity." },
              { step: "03", title: "Architecture & Prototype", desc: "Engineering architecture documents and first functional prototypes are built internally." },
              { step: "04", title: "Beta & Scale", desc: "Beta testing with pilot partners, followed by a full-scale SaaS launch." },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="glass-card p-8 rounded-2xl h-full relative overflow-hidden group">
                  <span className="text-7xl font-black text-zinc-900 absolute -top-4 -right-4 leading-none group-hover:text-zinc-800 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold mb-3 relative z-10">{item.title}</h3>
                  <p className="text-zinc-400 text-sm relative z-10 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Interest Register */}
      <section className="py-32 bg-brand-primary/5 border-y border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(182,51,46,0.1),_transparent_70%)]" />
        <FadeIn className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Interested in a Labs concept?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
            If one of our incubating concepts is relevant to your industry, reach out to discuss early partnership or pilot opportunities.
          </p>
          <Link
            href="/contact"
            className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)]"
          >
            Discuss a Partnership
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
