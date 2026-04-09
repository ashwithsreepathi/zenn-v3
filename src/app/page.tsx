import FadeIn from "@/components/FadeIn";
import { ArrowRight, Code2, Film, PenTool, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Hero (The Hook) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Placeholder for Video. Using a CSS gradient map for now. */}
        <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black opacity-80" />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              Architects of the <br className="hidden md:block"/> Unforgettable.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              We engineer technical infrastructure and craft creative narratives that define the future of business.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/work" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all w-full sm:w-auto text-center">
              View Our Work
            </Link>
            <Link href="/capabilities" className="bg-transparent border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all w-full sm:w-auto text-center">
              Our Capabilities
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: The Trusted Marquee */}
      <section className="py-12 border-y border-zinc-900 bg-black overflow-hidden relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="flex whitespace-nowrap animate-infinite-scroll hover:animation-paused">
          {/* Logo set duplicated for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-16 mx-8">
              {['Montax', 'MyCrossCanada', 'RV Properties', 'BC AWE', 'MK Food Co', 'Dragons Inn'].map((brand) => (
                <span key={brand} className="text-2xl font-bold text-zinc-600 uppercase tracking-widest">{brand}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Who Are We (The Narrative) */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center text-balance">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">Beyond Code. <span className="text-brand-primary">Beyond Content.</span></h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
              True digital success isn't just about having a functional website or a viral video. It's about the seamless union of the two. We believe in the synergy between logic and art, where deep technical engineering meets cinematic storytelling.
            </p>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              We aren't just developers; we are architects of your digital legacy. We aren't just filmmakers; we are the visual voice of your brand. We build the systems that scale companies, and we craft the narratives that make those companies unforgettable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: The Core Four Capabilities */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Our Capabilities</h2>
              <p className="text-zinc-400 max-w-md">Our multidisciplinary approach handles the full lifecycle of a brand from logic to art.</p>
            </div>
            <Link href="/capabilities" className="hidden md:flex items-center text-brand-primary hover:text-white transition-colors font-semibold group mt-6 md:mt-0">
              Explore All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Code2, title: "Website & Business Software", desc: "High-performance web architecture and custom systems." },
              { icon: PenTool, title: "Branding & Design", desc: "Strategic visual identity spanning UI/UX to overarching brand guidelines." },
              { icon: Film, title: "Photography & Videography", desc: "Cinematic commercial storytelling and high-fidelity production." },
              { icon: Share2, title: "Social Media Management", desc: "High-velocity content strategy driving engagement and growth." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="glass-card p-10 rounded-2xl glow-hover h-full flex flex-col justify-between group cursor-pointer">
                  <div>
                    <item.icon className="w-10 h-10 text-brand-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <Link href="/capabilities" className="md:hidden flex items-center justify-center text-brand-primary hover:text-white transition-colors font-semibold group mt-10">
            Explore All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform"/>
          </Link>
        </div>
      </section>

      {/* Section 5: Featured Work */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tighter text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <Link href="/work/montax" className="block group relative overflow-hidden rounded-3xl aspect-[4/3]">
                <div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-brand-primary font-mono text-sm tracking-uppercase mb-2 block">Web Development</span>
                  <h3 className="text-3xl font-bold mb-2">Montax.ca</h3>
                  <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                    Digital architecture for financial professionals, focusing on trust and high performance.
                  </p>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Link href="/work/blackfridaybins" className="block group relative overflow-hidden rounded-3xl aspect-[4/3]">
                <div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-brand-primary font-mono text-sm tracking-uppercase mb-2 block">Media & Social</span>
                  <h3 className="text-3xl font-bold mb-2">Black Friday Bins</h3>
                  <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                    High-velocity content strategy and cinematic trailers driving retail momentum.
                  </p>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 6: Zenn Labs Teaser */}
      <section className="py-32 bg-black relative overflow-hidden border-y border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(182,51,46,0.1),_transparent_40%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="text-zinc-500 font-mono tracking-widest uppercase text-sm mb-4 block">Zenn Labs</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">The Future is in Production.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
              From automated intelligent operations (AIORS) to recurring ride logistics (Ryde+). Step into our incubator to see how we solve industry problems at scale.
            </p>
            <Link href="/labs" className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full text-sm font-bold transition-all inline-block">
              Enter the Lab
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 7: Social Proof */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="glass-card p-10 rounded-3xl relative">
                <div className="text-brand-primary text-6xl absolute -top-6 -left-2 opacity-20 font-serif">"</div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
                  Their creative vision is unmatched in the industry. Zenn Studios didn't just take photos; they captured the soul of our kitchen.
                </p>
                <div>
                  <h4 className="font-bold">Embers Grille House</h4>
                  <p className="text-zinc-500 text-sm">Premium Hospitality</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="glass-card p-10 rounded-3xl relative">
                <div className="text-brand-primary text-6xl absolute -top-6 -left-2 opacity-20 font-serif">"</div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
                  A modernized supply chain infrastructure that reduced operational bottlenecks and allowed our wholesale volume to scale significantly.
                </p>
                <div>
                  <h4 className="font-bold">MK Food Company</h4>
                  <p className="text-zinc-500 text-sm">Food Distribution</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-32 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter">Ready to build something unforgettable?</h2>
            <Link href="/enquiry" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)]">
              Start a Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
