import FadeIn from "@/components/FadeIn";
import { ArrowRight, BarChart3, Clock, MessageSquare, Play, Target, Users } from "lucide-react";
import { CircleFadingPlus as Facebook } from "lucide-react";
import { CircleFadingPlus as Instagram } from "lucide-react";
import { CircleFadingPlus as Linkedin } from "lucide-react";
import Link from "next/link";

export default function SocialCapability() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Section 1: Hero (The Voice) */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-zinc-900 bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent pointer-events-none opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                Managed Presence.<br />
                <span className="text-brand-primary">Measured Growth.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Social media is the heartbeat of modern business. We provide the strategy, content, and management required to keep your brand relevant, engaging, and top-of-mind for your audience every single day.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.3}>
            {/* Visual: Split-Grid Animation Mockup */}
            <div className="w-full aspect-square rounded-3xl overflow-hidden glass-card relative bg-black p-6 flex flex-col gap-4">
               <div className="flex gap-4 h-1/2">
                  <div className="w-1/2 bg-zinc-900 rounded-xl relative overflow-hidden flex items-center justify-center group">
                     <div className="absolute inset-0 bg-brand-primary/10 transition-colors" />
                     <Play className="w-12 h-12 text-zinc-700" />
                  </div>
                  <div className="w-1/2 flex flex-col gap-4">
                     <div className="flex-1 bg-zinc-900 rounded-xl relative overflow-hidden flex items-center justify-center p-4">
                         <BarChart3 className="w-8 h-8 text-brand-primary opacity-50" />
                     </div>
                     <div className="flex-1 bg-zinc-900 rounded-xl relative overflow-hidden" />
                  </div>
               </div>
               <div className="flex h-1/2 gap-4">
                  <div className="w-2/3 bg-zinc-900 rounded-xl relative overflow-hidden p-6 flex flex-col justify-end">
                     <div className="w-1/2 h-4 bg-zinc-800 rounded-md mb-2" />
                     <div className="w-3/4 h-4 bg-zinc-800 rounded-md" />
                  </div>
                  <div className="w-1/3 bg-zinc-900 rounded-xl relative overflow-hidden flex items-center justify-center">
                     <Users className="w-10 h-10 text-zinc-700" />
                  </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: The Social Ecosystem */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">The Social Ecosystem</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <FadeIn delay={0.1}>
              <div className="glass-card p-10 rounded-3xl h-full flex flex-col hover:border-brand-primary/50 transition-colors">
                <Target className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">1. Content Strategy</h3>
                <p className="text-zinc-400 flex-grow leading-relaxed">
                  Defining your brand voice, mapping out posting frequency, and establishing platform-specific goals. We don't just post to post; every piece of content has a strategic directive.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-card p-10 rounded-3xl h-full flex flex-col hover:border-brand-primary/50 transition-colors">
                <MessageSquare className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">2. Community Management</h3>
                <p className="text-zinc-400 flex-grow leading-relaxed">
                  Actively engaging with your audience, handling DM enquiries, and fostering deep brand loyalty. Your audience wants a conversation, not a broadcast.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass-card p-10 rounded-3xl h-full flex flex-col hover:border-brand-primary/50 transition-colors">
                <Play className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">3. Paid Media & Campaigns</h3>
                <p className="text-zinc-400 flex-grow leading-relaxed">
                  Targeted ad spend to amplify high-performing organic content and drive measurable conversions. We turn your social platforms into revenue drivers.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="glass-card p-10 rounded-3xl h-full flex flex-col hover:border-brand-primary/50 transition-colors">
                <BarChart3 className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">4. Performance Analytics</h3>
                <p className="text-zinc-400 flex-grow leading-relaxed">
                  Monthly reporting on reach, engagement rate, and actionable ROI. We use empirical data to refine the strategy continuously.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Section 3: Content Velocity (The Weekly Loop) */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(182,51,46,0.05),_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <Clock className="w-12 h-12 text-brand-primary mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Consistency is the New Currency.</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              We specialize in high-velocity content production—ensuring your brand never goes quiet.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              By integrating our internal Media Production capability, we deliver studio-quality video and photography at a scale that fuels daily engagement. <strong className="text-white">The Black Friday Bins model</strong> proves this: high-quality weekly video trailers that translate directly to massive physical foot traffic.
            </p>
          </FadeIn>
          <FadeIn direction="left" delay={0.2} className="relative">
            <div className="w-full aspect-square border border-zinc-800 rounded-full flex items-center justify-center relative bg-black">
              {/* Abstract Clock/Loop Graphic */}
              <div className="absolute inset-0 border-[20px] border-zinc-950 rounded-full border-t-brand-primary animate-spin-slow opacity-50" />
              <div className="w-48 h-48 bg-zinc-900 rounded-full flex items-center justify-center">
                 <span className="text-brand-primary font-mono text-sm uppercase tracking-widest text-center px-4">Weekly<br/>Loop</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: The Multi-Platform Approach */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">Every Platform, One Narrative.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border border-zinc-900 rounded-3xl p-1 md:p-8">
             <FadeIn delay={0.1} className="p-8">
               <Instagram className="w-12 h-12 text-zinc-500 mx-auto mb-6" />
               <h4 className="font-bold text-xl mb-3">Instagram & TikTok</h4>
               <p className="text-zinc-400 text-sm">Video-first hooks and high-energy visual narratives designed for deep engagement.</p>
             </FadeIn>
             <FadeIn delay={0.2} className="p-8 md:border-l border-t md:border-t-0 border-zinc-900">
               <Linkedin className="w-12 h-12 text-zinc-500 mx-auto mb-6" />
               <h4 className="font-bold text-xl mb-3">LinkedIn</h4>
               <p className="text-zinc-400 text-sm">Authority-first content focused on thought-leadership and B2B professional networking.</p>
             </FadeIn>
             <FadeIn delay={0.3} className="p-8 md:border-l border-t md:border-t-0 border-zinc-900">
               <Facebook className="w-12 h-12 text-zinc-500 mx-auto mb-6" />
               <h4 className="font-bold text-xl mb-3">Facebook</h4>
               <p className="text-zinc-400 text-sm">Community-first updates, event management, and hyper-targeted local ad spending.</p>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 5: Proven Success */}
      <section className="py-32 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Social Success</h2>
              <Link href="/work" className="hidden md:flex items-center text-zinc-400 hover:text-white transition-colors">
                View full portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Black Friday Bins', 'Dcurries', 'Embers Grille House'].map((client, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Link href={`/work/${client.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '')}`} className="group block">
                  <div className="bg-zinc-900 aspect-[9/16] rounded-2xl mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                    <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-50 group-hover:opacity-100 group-hover:text-brand-primary transition-all z-20" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">{client}</h3>
                  <p className="text-zinc-500 text-sm">Social Video Strategy</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Specialized CTA */}
      <section className="py-32 bg-black text-center relative border-y border-zinc-900">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10">Ready to turn your followers into a community?</h2>
          <Link href="/enquiry" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)]">
            Get a Social Strategy Audit
          </Link>
        </FadeIn>
      </section>

    </div>
  );
}
