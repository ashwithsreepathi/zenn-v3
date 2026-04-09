import FadeIn from "@/components/FadeIn";
import { ArrowRight, Blend, Frame, MonitorSmartphone, Palette, PenTool, Type } from "lucide-react";
import Link from "next/link";

export default function BrandingCapability() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Section 1: Hero (The Soul) */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 via-transparent to-transparent opacity-80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                Identity with Intent.<br />
                <span className="text-brand-primary">Media with Meaning.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl">
                We craft the visual and narrative foundations that turn businesses into icons. From logo architecture to full-scale media campaigns, we define how the world sees you.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.3}>
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden glass-card relative flex">
               {/* Split-screen placeholder */}
               <div className="w-1/2 h-full bg-zinc-900 border-r border-zinc-800 flex items-center justify-center p-6 relative">
                 <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBTMCAyNS41MjMgMCAyMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMHoiLz4KPC9zdmc+')]"></div>
                 <PenTool className="w-16 h-16 text-zinc-600 relative z-10" />
                 <span className="absolute bottom-4 left-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">Vector Path</span>
               </div>
               <div className="w-1/2 h-full bg-black flex items-center justify-center p-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent"></div>
                 <Frame className="w-16 h-16 text-zinc-600 relative z-10" />
                 <span className="absolute bottom-4 right-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">Color Grade</span>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: The Branding Pillars (What We Create) */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">The Branding Pillars</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <FadeIn delay={0.1}>
              <div className="border border-zinc-900 p-10 rounded-3xl h-full flex flex-col bg-zinc-950">
                <Palette className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Visual Identity</h3>
                <p className="text-zinc-400 mb-6 flex-grow">
                  Logo design, typography, and color theory built on architectural balance rather than fleeting trends.
                </p>
                <div className="pt-6 border-t border-zinc-900 mt-auto">
                   <p className="text-sm font-mono text-zinc-500 mb-2">EXAMPLES</p>
                   <p className="text-sm text-zinc-300">MyCrossCanada • RV Properties</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border border-zinc-900 p-10 rounded-3xl h-full flex flex-col bg-zinc-950">
                <Type className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Brand Strategy</h3>
                <p className="text-zinc-400 mb-6 flex-grow">
                  Positioning, voice, and narrative development. We define the 'why' before we design the 'what'.
                </p>
                <div className="pt-6 border-t border-zinc-900 mt-auto">
                   <p className="text-sm font-mono text-zinc-500 mb-2">OUTPUT</p>
                   <p className="text-sm text-zinc-300">Brand Manifestos • Target Demographics</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border border-zinc-900 p-10 rounded-3xl h-full flex flex-col bg-zinc-950">
                <Blend className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Design Systems</h3>
                <p className="text-zinc-400 mb-6 flex-grow">
                  Comprehensive guidelines that ensure exact consistency across web, print, and physical mediums.
                </p>
                <div className="pt-6 border-t border-zinc-900 mt-auto">
                   <p className="text-sm font-mono text-zinc-500 mb-2">OUTPUT</p>
                   <p className="text-sm text-zinc-300">Component Libraries • Brand Books</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Section 3: The Design Process (The Blueprint) */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-20">The Anatomy of an Identity.</h2>
          </FadeIn>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-800 -z-10 -translate-y-1/2" />
            
            {['Discovery & Research', 'Conceptualization', 'Refinement', 'Implementation'].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} className="w-full md:w-auto mb-10 md:mb-0">
                <div className="bg-zinc-900 border border-zinc-800 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 relative">
                  <span className="text-xl font-bold text-brand-primary">{idx + 1}</span>
                  {idx < 3 && <div className="md:hidden absolute w-px h-10 bg-zinc-800 -bottom-10" />}
                </div>
                <h4 className="font-bold text-lg px-4">{step}</h4>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Synergy with Software (UI/UX) */}
      <section className="py-32 bg-black border-b border-zinc-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_rgba(182,51,46,0.05),_transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <MonitorSmartphone className="w-12 h-12 text-brand-primary mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Design that Functions.</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              We don’t just design for aesthetics; we design for the interface. Our branding capability feeds directly into our software development.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              When we build a visual identity, we are simultaneously envisioning how it behaves inside a Next.js application, ensuring that your custom tools look as phenomenal as they perform.
            </p>
          </FadeIn>
          <FadeIn direction="left" delay={0.2} className="hidden lg:block relative">
            {/* Minimalist Abstract Graphic */}
            <div className="glass-card p-8 rounded-3xl aspect-square flex flex-col items-center justify-center border-brand-primary/20 shadow-[0_0_40px_rgba(182,51,46,0.1)] gap-6">
               <div className="w-full h-8 bg-zinc-900 rounded-md" />
               <div className="w-full flex gap-6">
                  <div className="w-1/3 h-32 bg-zinc-900 rounded-md" />
                  <div className="w-2/3 h-32 bg-brand-primary/20 border border-brand-primary rounded-md" />
               </div>
               <div className="w-full h-8 bg-zinc-900 rounded-md" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Proven Success */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Branding Success</h2>
              <Link href="/work" className="hidden md:flex items-center text-zinc-400 hover:text-white transition-colors">
                View full portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['MyCrossCanada.ca', 'RVProperties.ca', 'Embers Grille House'].map((client, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Link href={`/work/${client.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, '')}`} className="group block">
                  <div className="glass-card aspect-[4/3] rounded-2xl mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay opacity-50 bg-[radial-gradient(circle,_rgba(255,255,255,0.1),_transparent)]" />
                    <span className="absolute bottom-4 left-4 font-mono text-zinc-500 uppercase text-xs z-10">Highlight Reel</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">{client}</h3>
                  <p className="text-zinc-500 text-sm">Case Study</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Specialized CTA */}
      <section className="py-32 bg-black text-center relative border-t border-zinc-900">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10">Ready to define your brand’s legacy?</h2>
          <Link href="/enquiry" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)]">
            Start Your Branding Journey
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
