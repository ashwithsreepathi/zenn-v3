import FadeIn from "@/components/FadeIn";
import { ArrowRight, Camera, Code2, Network, PenTool, Share2, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CapabilitiesIndex() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Section 1: Hero (The High-Level View) */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Engineered for Excellence.<br />
              <span className="text-brand-primary">Crafted for Impact.</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-16">
              Our multidisciplinary expertise allows us to handle the full lifecycle of a brand—from the first line of code to the final frame of a marketing campaign.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="w-full max-w-4xl mx-auto aspect-[21/9] rounded-3xl overflow-hidden relative border border-zinc-800 shadow-[0_0_60px_rgba(182,51,46,0.15)] bg-zinc-950">
              <Image
                src="/images/capabilities/integration.png"
                alt="The Power of Integration — Zenn Studios"
                fill
                className="object-cover"
                priority
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-white font-mono text-xs uppercase tracking-widest bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-zinc-700">
                  The Power of Integration
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: The Capabilities Grid (The Main Navigation) */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Capability 1: Software */}
            <FadeIn>
              <div className="glass-card p-12 rounded-3xl group relative overflow-hidden h-full flex flex-col hover:border-brand-primary/50 transition-colors duration-500">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                  <Code2 className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Website & Business Software</h3>
                <p className="text-zinc-400 text-lg leading-relaxed flex-grow mb-8">
                  The Logic. High-performance web architecture and custom software systems designed to scale your operations.
                </p>
                <Link href="/capabilities/software" className="inline-flex items-center text-white group-hover:text-brand-primary font-bold transition-colors">
                  Deep Dive <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            {/* Capability 2: Branding */}
            <FadeIn delay={0.1}>
              <div className="glass-card p-12 rounded-3xl group relative overflow-hidden h-full flex flex-col hover:border-brand-primary/50 transition-colors duration-500">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                  <PenTool className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Branding & Media Production</h3>
                <p className="text-zinc-400 text-lg leading-relaxed flex-grow mb-8">
                  The Soul. Defining visual identities and executing high-end media campaigns that make your business unforgettable.
                </p>
                <Link href="/capabilities/branding" className="inline-flex items-center text-white group-hover:text-brand-primary font-bold transition-colors">
                  Deep Dive <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            {/* Capability 3: Editorial */}
            <FadeIn delay={0.2}>
              <div className="glass-card p-12 rounded-3xl group relative overflow-hidden h-full flex flex-col hover:border-brand-primary/50 transition-colors duration-500">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                  <Camera className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Photography & Editorial</h3>
                <p className="text-zinc-400 text-lg leading-relaxed flex-grow mb-8">
                  The Vision. Cinematic visual storytelling through professional videography, structural photography, and copy.
                </p>
                <Link href="/capabilities/editorial" className="inline-flex items-center text-white group-hover:text-brand-primary font-bold transition-colors">
                  Deep Dive <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            {/* Capability 4: Social */}
            <FadeIn delay={0.3}>
              <div className="glass-card p-12 rounded-3xl group relative overflow-hidden h-full flex flex-col hover:border-brand-primary/50 transition-colors duration-500">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                  <Share2 className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Social Media Management</h3>
                <p className="text-zinc-400 text-lg leading-relaxed flex-grow mb-8">
                  The Voice. Turning your brand into a powerful community tool through consistent engagement and high-velocity content.
                </p>
                <Link href="/capabilities/social" className="inline-flex items-center text-white group-hover:text-brand-primary font-bold transition-colors">
                  Deep Dive <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Section 3: Synergy Section */}
      <section className="py-32 bg-black border-y border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <Workflow className="w-16 h-16 text-zinc-800 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">The Power of Integration.</h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-16">
              These capabilities aren't silos. Our developers work directly with our videographers to ensure site performance, and our brand designers align with our software team to guarantee interface consistency. It is a unified ecosystem.
            </p>
            
            <div className="w-full aspect-[16/5] rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(182,51,46,0.15),_transparent)]" />
               <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase z-10">Zenn Ecosystem Flowchart Diagram</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: The Tech & Gear Stack */}
      <section className="py-24 overflow-hidden relative bg-zinc-950 border-b border-zinc-900">
        <FadeIn>
          <div className="text-center mb-12">
            <h3 className="text-zinc-500 font-mono tracking-widest uppercase text-sm">The Tools of the Trade</h3>
          </div>
        </FadeIn>
        
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
        
        <div className="flex whitespace-nowrap animate-infinite-scroll opacity-40">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-16 mx-8 mt-5">
              {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Sony Cinema Line', 'DaVinci Resolve', 'Adobe Creative Cloud', 'React', 'Framer Motion', 'Node.js', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="text-3xl font-bold uppercase tracking-tighter">{tech}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className="py-32 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter">Which capability does your business need today?</h2>
            <Link href="/enquiry" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)]">
              Talk to a Specialist
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
