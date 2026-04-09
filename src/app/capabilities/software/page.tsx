import FadeIn from "@/components/FadeIn";
import { ArrowRight, Code2, Database, LayoutTemplate, Orbit, Zap } from "lucide-react";
import Link from "next/link";

export default function SoftwareCapability() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Section 1: Hero (The Logic) */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 via-transparent to-transparent opacity-80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                Scalable Architecture.<br />
                <span className="text-brand-primary">Seamless Logic.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl">
                We don’t just build websites; we engineer high-performance business tools designed to automate, optimize, and scale your operations.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.3}>
            <div className="w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden glass-card relative flex items-center justify-center p-8 bg-black">
              <Code2 className="w-48 h-48 text-zinc-800 absolute opacity-30" />
              <div className="z-10 text-center">
                <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4">Dashboard & Code Interface</p>
                <div className="flex gap-2 justify-center">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Core Offerings (What We Build) */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">What We Build</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <FadeIn delay={0.1}>
              <div className="glass-card p-10 rounded-3xl h-full group hover:border-brand-primary/50 transition-colors">
                <LayoutTemplate className="w-10 h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Custom Web Applications</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">▹</span> Specialized Next.js & React platforms
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">▹</span> Built for high-traffic environments
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">▹</span> Server-side rendering & dynamic routing
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-card p-10 rounded-3xl h-full group hover:border-brand-primary/50 transition-colors">
                <Database className="w-10 h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Business Software (ERP / SaaS)</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">▹</span> Custom internal tools for operations
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">▹</span> Inventory and logistics management
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">▹</span> Automated workflow integrations
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass-card p-10 rounded-3xl h-full group hover:border-brand-primary/50 transition-colors">
                <Orbit className="w-10 h-10 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Interactive Platforms</h3>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">▹</span> Complex directory infrastructures
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">▹</span> Booking & scheduling logic
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 mt-1">▹</span> Member portals and governance hubs
                  </li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Section 3: The Technical Edge */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="grid grid-cols-2 gap-4">
               <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                 <h4 className="text-4xl font-black text-brand-primary mb-2">99+</h4>
                 <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">PageSpeed Score</p>
               </div>
               <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                 <h4 className="text-4xl font-black text-brand-primary mb-2">10ms</h4>
                 <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Avg Latency</p>
               </div>
               <div className="glass-card p-8 rounded-2xl col-span-2 text-center bg-black">
                  <p className="font-mono text-zinc-500 leading-relaxed text-sm text-left">
                    <span className="text-brand-primary">const</span> stack = [<span className="text-zinc-300">'Next.js'</span>, <span className="text-zinc-300">'TypeScript'</span>, <span className="text-zinc-300">'Tailwind'</span>, <span className="text-zinc-300">'Node.js'</span>];<br/><br/>
                    <span className="text-brand-primary">function</span> <span className="text-blue-400">execute</span>() &#123;<br/>
                    &nbsp;&nbsp;return <span className="text-zinc-300">Clean Code Principles</span>;<br/>
                    &#125;
                  </p>
               </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <Zap className="w-12 h-12 text-brand-primary mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Engineered for Performance.</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              Our engineering philosophy relies on modern infrastructure: Next.js, strict TypeScript, Tailwind CSS, and robust Node.js backends.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              We focus heavily on SEO-first architecture. A slow site isn't just an inconvenience; it's a loss in revenue. Our codebases are designed to be crawlable, secure, and incredibly fast.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: The Labs Connection */}
      <section className="py-32 bg-brand-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(182,51,46,0.1),_transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">Where Logic meets Proprietary Innovation.</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              This capability is the engine behind our conceptual models like **AIORS** and **Tiffin Connect**. We build massive SaaS platforms for our incubator, which means we apply the exact same rigorous enterprise-grade logic for our clients.
            </p>
            <Link href="/labs" className="inline-flex items-center text-brand-primary font-bold hover:text-white transition-colors border-b border-brand-primary/30 hover:border-white pb-1">
              Explore Zenn Labs innovation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Proven Success */}
      <section className="py-32 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Software Success</h2>
              <Link href="/work" className="hidden md:flex items-center text-zinc-400 hover:text-white transition-colors">
                View full portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Montax', 'MK Food Company', 'BCAWE.org', 'Dragons Inn'].map((client, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Link href={`/work/${client.toLowerCase().replace(/[^a-z0-9]/g, '')}`} className="glass-card p-10 rounded-2xl flex items-center justify-between group hover:border-brand-primary/50 transition-colors">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{client}</h3>
                    <p className="text-zinc-500 font-mono text-sm">Read Case Study</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-zinc-700 group-hover:text-brand-primary group-hover:translate-x-2 transition-all" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Specialized CTA */}
      <section className="py-32 bg-zinc-950 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10">Need a solution that doesn't exist yet?</h2>
          <Link href="/enquiry" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)]">
            Discuss Your Software Needs
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
