import FadeIn from "@/components/FadeIn";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ReviewCarousel from "@/components/ReviewCarousel";
import LogoGrid from "@/components/LogoGrid";
import { ArrowRight, Camera, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredWork = [
  {
    slug: "dragonsinn",
    title: "Dragons Inn",
    tag: "Restaurant ERP",
    category: "Software Architecture",
    desc: "A full-stack restaurant management system — from online reservations and kitchen display to POS integration and analytics.",
    gradient: "from-zinc-900 via-red-950/20 to-zinc-950",
  },
  {
    slug: "mkfoodco",
    title: "MK Food Company",
    tag: "Inventory ERP",
    category: "Supply Chain & Logistics",
    desc: "Custom wholesale inventory and distribution logistics management platform that eliminated operational bottlenecks.",
    gradient: "from-zinc-900 via-blue-950/20 to-zinc-950",
  },
  {
    slug: "blackfridaybins",
    title: "Black Friday Bins",
    tag: "Media & Social",
    category: "High-Velocity Video",
    desc: "High-velocity weekly video campaigns translating to massive physical retail foot traffic.",
    gradient: "from-zinc-900 via-amber-950/20 to-zinc-950",
  },
  {
    slug: "purelixr",
    title: "Purelixr",
    tag: "Product Photography",
    category: "Brand Production",
    desc: "Cinematic product photography and visual storytelling for a premium perfume brand — capturing luxury in every frame.",
    gradient: "from-zinc-900 via-purple-950/20 to-zinc-950",
  },
];

const photographyShowcase = [
  { src: "/images/photography/gender-reveal-annam/1.JPG", alt: "Gender Reveal Celebration" },
  { src: "/images/photography/casuals/4.jpg", alt: "Portrait Session" },
  { src: "/images/photography/landscapes/2.jpg", alt: "Landscape Photography" },
  { src: "/images/photography/gender-reveal-manisha/2.jpg", alt: "Family Celebration" },
  { src: "/images/photography/community/1.JPG", alt: "Community Event" },
  { src: "/images/photography/casuals/5.jpg", alt: "Casual Photography" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Section 1: Hero (The Hook) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black opacity-90" />
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              Architects of the <br className="hidden md:block"/>Unforgettable.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              We engineer technical infrastructure and craft creative narratives that define the future of business.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/work" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all w-full sm:w-auto text-center shadow-lg">
              View Our Work
            </Link>
            <Link href="/capabilities" className="bg-transparent border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all w-full sm:w-auto text-center">
              Our Capabilities
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Clean Static Client Logo Grid */}
      <LogoGrid />

      {/* Section 3: Who Are We (The Narrative) */}
      <section className="py-24 sm:py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center text-balance">
          <FadeIn direction="up">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8">Beyond Code. <span className="text-brand-primary">Beyond Content.</span></h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
              True digital success isn't just about having a functional website or a viral video. It's about the seamless union of the two. We believe in the synergy between logic and art, where deep technical engineering meets cinematic storytelling.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed">
              We aren't just developers; we are architects of your digital legacy. We aren't just filmmakers; we are the visual voice of your brand. We build the systems that scale companies, and we craft the narratives that make those companies unforgettable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: The Core Four Capabilities — Interactive Hover */}
      <CapabilitiesSection />

      {/* Section 5: Featured Work — Clean Dark Cards (No misplaced thumbnails) */}
      <section className="py-24 sm:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 tracking-tighter text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWork.map((project, idx) => (
              <FadeIn key={project.slug} delay={idx * 0.1}>
                <Link
                  href={`/work/${project.slug}`}
                  className={`block group relative overflow-hidden rounded-3xl aspect-[16/10] bg-gradient-to-br ${project.gradient} border border-zinc-800 hover:border-brand-primary/60 transition-all duration-500 p-8 md:p-10 flex flex-col justify-between shadow-xl`}
                >
                  {/* Subtle Grid Pattern Overlay */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                      backgroundSize: "40px 40px"
                    }}
                  />

                  {/* Top Badge */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-brand-primary font-mono text-xs uppercase tracking-widest bg-brand-primary/10 border border-brand-primary/30 px-3 py-1 rounded-full">
                      {project.tag}
                    </span>
                    <span className="text-zinc-500 font-mono text-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-white flex items-center gap-3 transition-colors">
                      {project.title}
                      <ExternalLink className="w-5 h-5 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md group-hover:text-zinc-300 transition-colors">
                      {project.desc}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Photography Showcase */}
      <section className="py-32 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-6">
                  <Camera className="w-4 h-4" /> Zenn Photography
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Moments Worth Reliving.</h2>
                <p className="text-zinc-400 max-w-md">
                  From family celebrations to cinematic landscapes — we capture the moments that matter most.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Link href="/photography" className="hidden md:flex items-center text-brand-primary hover:text-white transition-colors font-semibold group mt-6 md:mt-0">
                View Full Portfolio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform"/>
              </Link>
            </FadeIn>
          </div>

          {/* Masonry-style photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photographyShowcase.map((photo, idx) => (
              <FadeIn key={photo.src} delay={idx * 0.08}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-zinc-800/80 w-full ${
                    idx === 0 ? "row-span-2" : ""
                  }`}
                  style={{
                    aspectRatio: idx === 0 ? "3 / 4" : "1 / 1",
                    minHeight: idx === 0 ? "400px" : "220px",
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>

          <Link href="/photography" className="md:hidden flex items-center justify-center text-brand-primary hover:text-white transition-colors font-semibold group mt-10">
            View Full Portfolio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform"/>
          </Link>
        </div>
      </section>

      {/* Section 7: Zenn Labs Teaser */}
      <section className="py-32 bg-black relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(182,51,46,0.1),_transparent_40%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="text-zinc-500 font-mono tracking-widest uppercase text-sm mb-4 block">Zenn Labs</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">The Future is in Production.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
              From AI-powered restaurant operations (AIORS) to all-in-one liquidation warehouse management (AHLC). Step into our incubator to see how we solve industry problems at scale.
            </p>
            <Link href="/labs" className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full text-sm font-bold transition-all inline-block shadow-lg">
              Enter the Lab
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 8: Social Proof — Review Carousel */}
      <ReviewCarousel />

      {/* Section 9: Final CTA */}
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
