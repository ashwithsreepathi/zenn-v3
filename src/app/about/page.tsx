import FadeIn from "@/components/FadeIn";
import { ArrowRight, Code2, Film, Layers, MapPin, Network, PenTool, Search } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Hero (The Identity) */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-black border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Built on the intersection <br className="hidden md:block"/> of <span className="text-brand-primary">Logic and Art.</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-16">
              We don't just build websites or film videos; we create the digital architecture that supports your business's legacy.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden relative glass-card">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-800 opacity-50"></div>
              {/* Abstract Placeholder for Architecture/Code visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-zinc-600 font-mono text-sm tracking-widest uppercase">Visual: Code / Architectural Blueprint Concept</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Our Philosophy (The Core Values) */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Our Philosophy</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Layers, title: "Precision", desc: "We write clean, scalable code that serves as a permanent foundation for your operations." },
              { icon: PenTool, title: "Narrative", desc: "We believe every brand has a cinematic story worth telling perfectly." },
              { icon: Network, title: "Synergy", desc: "Our software informs our media, and our media elevates our software." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-brand-primary">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Process (How We Work) */}
      <section className="py-32 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">How We Work</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", icon: Search, title: "Discovery", desc: "Understanding the business logic and creative soul." },
              { num: "02", icon: Layers, title: "Architecture", desc: "Designing the blueprint (UX/UI & Brand Strategy)." },
              { num: "03", icon: PenTool, title: "Execution", desc: "High-fidelity development and production." },
              { num: "04", icon: ArrowRight, title: "Growth", desc: "Ongoing management and scaling." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-brand-primary/50 transition-colors duration-500 min-h-[250px]">
                  <div className="text-6xl font-black text-zinc-900 absolute -top-4 -right-4 opacity-50 group-hover:text-zinc-800 transition-colors">
                    {item.num}
                  </div>
                  <item.icon className="w-8 h-8 text-brand-primary mb-6 relative z-10" />
                  <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                  <p className="text-zinc-400 text-sm relative z-10">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Studio (Location & Physicality) */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">Our Presence</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="glass-card rounded-3xl overflow-hidden aspect-square md:aspect-video lg:aspect-square relative flex items-center justify-center p-8 text-center group cursor-crosshair">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Vancouver,BC&zoom=11&size=600x600&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x9ca3af&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:landscape|element:geometry|color:0x000000&style=feature:poi|element:geometry|color:0x282828&style=feature:road.highway|element:geometry.fill|color:0x000000&style=feature:road.highway|element:geometry.stroke|color:0x1f2937&style=feature:road.arterial|element:geometry|color:0x000000&style=feature:road.local|element:geometry|color:0x000000&style=feature:transit|element:geometry|color:0x282828&style=feature:water|element:geometry|color:0x111111')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="relative z-20 text-brand-primary flex flex-col items-center">
                  <MapPin className="w-12 h-12 mb-4 drop-shadow-[0_0_15px_rgba(182,51,46,0.8)]" />
                  <span className="font-mono text-sm tracking-widest text-zinc-300 bg-black/80 px-4 py-2 rounded-full border border-zinc-800">INTERACTIVE MAP PLACEHOLDER</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Headquarters</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    123 Innovation Drive<br />
                    Vancouver, BC V6B 1A1<br />
                    Canada
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    Monday - Friday<br />
                    9:00 AM – 6:00 PM (PST)
                  </p>
                </div>
                <Link href="/contact" className="inline-flex items-center text-brand-primary font-bold hover:text-white transition-colors group">
                  Get Directions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 5: The Founders/Team (Optional/Minimalist) */}
      <section className="py-32 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">The Minds Behind the Work</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="glass-card p-10 py-16 rounded-3xl text-center group">
                <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-6 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                   <Code2 className="w-8 h-8 text-zinc-500 group-hover:text-brand-primary" />
                </div>
                <p className="text-xl italic text-zinc-300 font-serif mb-6 leading-relaxed">"Architecture is about writing logic that can withstand the test of time."</p>
                <h4 className="font-bold text-lg">Engineering Team</h4>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="glass-card p-10 py-16 rounded-3xl text-center group">
                <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-6 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                   <Film className="w-8 h-8 text-zinc-500 group-hover:text-brand-primary" />
                </div>
                <p className="text-xl italic text-zinc-300 font-serif mb-6 leading-relaxed">"A story without high fidelity is just noise. We seek perfection in every frame."</p>
                <h4 className="font-bold text-lg">Creative & Media Team</h4>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 6: Transition CTA */}
      <section className="py-32 bg-zinc-950 relative text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter">See what we've built.</h2>
          <Link href="/work" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)] inline-block">
            Explore the Portfolio
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
