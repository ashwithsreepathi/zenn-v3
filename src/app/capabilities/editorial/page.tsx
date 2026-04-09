import FadeIn from "@/components/FadeIn";
import { ArrowRight, Aperture, Camera, Clapperboard, Film, Video, Waypoints, Quote } from "lucide-react";
import Link from "next/link";

export default function EditorialCapability() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Section 1: Hero (The Vision) */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900 bg-black">
        <div className="absolute inset-0 bg-zinc-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(182,51,46,0.1),_transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 uppercase">
              Capture the Vision.<br />
              <span className="text-brand-primary">Command the Room.</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed">
              We combine cinematic production values with strategic storytelling to create content that doesn’t just look good—it performs. From commercial photography to editorial narratives, we provide the lens through which the world sees you.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="w-full max-w-6xl mx-auto aspect-video rounded-3xl overflow-hidden glass-card relative bg-black flex items-center justify-center">
              <div className="absolute inset-0 bg-zinc-900/50" />
              <Film className="w-24 h-24 text-zinc-800 absolute opacity-50" />
              <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase z-10">High-Bitrate Video Montage Placeholder</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Production Services */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">What We Deliver</h2>
          </FadeIn>
          
          <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[500px]">
            
            <FadeIn delay={0.1} className="w-full lg:w-1/3 h-full">
              <div className="glass-card p-10 rounded-3xl h-full flex flex-col hover:border-brand-primary/50 transition-colors group">
                <Video className="w-12 h-12 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Commercial Videography</h3>
                <p className="text-zinc-400 leading-relaxed font-light flex-grow">
                  High-end brand films, social media campaigns, and documentary-style storytelling that hooks your audience within the first three seconds.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full lg:w-1/3 h-full">
              <div className="glass-card p-10 rounded-3xl h-full flex flex-col hover:border-brand-primary/50 transition-colors group">
                <Aperture className="w-12 h-12 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Professional Photography</h3>
                <p className="text-zinc-400 leading-relaxed font-light flex-grow">
                  Architectural precision, high-fidelity product showcases, and lifestyle photography that dramatically elevates your digital and print presence.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="w-full lg:w-1/3 h-full">
              <div className="glass-card p-10 rounded-3xl h-full flex flex-col hover:border-brand-primary/50 transition-colors group">
                <Quote className="w-12 h-12 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Editorial & Copywriting</h3>
                <p className="text-zinc-400 leading-relaxed font-light flex-grow">
                  Crafting the "Voice" that accompanies the "Vision"—from precise marketing scripts to sweeping brand manifestos. Let your words carry the same weight as your visuals.
                </p>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* Section 3: The Gear & Craft (Technical Authority) */}
      <section className="py-24 bg-black border-y border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(182,51,46,0.05),_transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <Clapperboard className="w-16 h-16 text-brand-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">Cinema-Grade Execution.</h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              We operate as a full-production studio. Utilizing <span className="text-white font-semibold">Sony Cinema Line</span> cameras, specialized lighting rigs, and professional <span className="text-white font-semibold">DaVinci Resolve</span> color grading suites. This is the leap in quality from "content creator" to "production studio."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: The Narrative Bridge */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <Waypoints className="w-12 h-12 text-zinc-600 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">More Than Just a Shot.</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              Every frame we capture is informed by the brand identity we’ve built for you.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              We ensure that your photography and video content align perfectly with your web architecture and marketing strategy, creating a seamless visual ecosystem across all touchpoints.
            </p>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            {/* Visual Abstract */}
            <div className="w-full aspect-square md:aspect-video lg:aspect-square border border-zinc-800 rounded-full flex items-center justify-center relative bg-black overflow-hidden">
               <div className="absolute inset-0 border-[40px] border-zinc-900 rounded-full" />
               <div className="w-48 h-48 bg-brand-primary/10 rounded-full flex items-center justify-center backdrop-blur-md border border-brand-primary/20">
                 <Camera className="w-16 h-16 text-brand-primary" />
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Proven Success */}
      <section className="py-32 bg-black border-y border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Cinematic Success</h2>
              <Link href="/work" className="hidden md:flex items-center text-zinc-400 hover:text-white transition-colors">
                View full portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
            {['Black Friday Bins', 'Embers Grille House', 'Dcurries'].map((client, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="min-w-[80vw] md:min-w-[400px] snap-center">
                <Link href={`/work/${client.toLowerCase().replace(/[^a-z0-9]/g, '')}`} className="group block">
                  <div className="glass-card aspect-[16/9] rounded-2xl mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700" />
                    <Film className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-zinc-800 group-hover:text-brand-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">{client}</h3>
                  <p className="text-zinc-500 text-sm">Media Production</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Specialized CTA */}
      <section className="py-32 bg-zinc-950 text-center border-b border-zinc-900">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10">Have a story that needs to be told?</h2>
          <Link href="/enquiry" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)]">
            Book a Strategy Session
          </Link>
        </FadeIn>
      </section>

    </div>
  );
}
