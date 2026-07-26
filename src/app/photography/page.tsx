"use client";

import { useState, useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import PhotoGallery, { GalleryImage } from "@/components/PhotoGallery";
import VideoPlayer from "@/components/VideoPlayer";
import { ArrowRight, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages: GalleryImage[] = [
  // ── Portraits / Casuals (1..16) ──
  { src: "/images/photography/casuals/1.jpg", alt: "Casual Portrait Session 1", category: "Portraits" },
  { src: "/images/photography/casuals/2.jpg", alt: "Casual Portrait Session 2", category: "Portraits" },
  { src: "/images/photography/casuals/3.jpg", alt: "Studio Portrait", category: "Portraits" },
  { src: "/images/photography/casuals/4.jpg", alt: "Outdoor Portrait", category: "Portraits" },
  { src: "/images/photography/casuals/5.jpg", alt: "Casual Lifestyle", category: "Portraits" },
  { src: "/images/photography/casuals/6.jpg", alt: "Natural Light Portrait", category: "Portraits" },
  { src: "/images/photography/casuals/7.jpg", alt: "Editorial Portrait", category: "Portraits" },
  { src: "/images/photography/casuals/8.jpg", alt: "Creative Portrait", category: "Portraits" },
  { src: "/images/photography/casuals/9.jpg", alt: "Lifestyle Session", category: "Portraits" },
  { src: "/images/photography/casuals/10.jpg", alt: "Personal Branding Portrait", category: "Portraits" },
  { src: "/images/photography/casuals/11.jpg", alt: "Casual Session", category: "Portraits" },
  { src: "/images/photography/casuals/12.jpg", alt: "Outdoor Fashion Session", category: "Portraits" },
  { src: "/images/photography/casuals/13.jpg", alt: "Urban Portrait", category: "Portraits" },
  { src: "/images/photography/casuals/14.jpg", alt: "Candid Lifestyle", category: "Portraits" },
  { src: "/images/photography/casuals/15.jpg", alt: "Casual Lookbook", category: "Portraits" },
  { src: "/images/photography/casuals/16.jpg", alt: "Sunset Portrait", category: "Portraits" },

  // ── Gender Reveals (Annam 1..12.JPG & Manisha 1..15.jpg) ──
  { src: "/images/photography/gender-reveal-annam/1.JPG", alt: "Annam Gender Reveal Celebration", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/2.JPG", alt: "Annam Family Portrait", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/3.JPG", alt: "Annam Smoke Bomb Reveal", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/4.JPG", alt: "Party Setup & Decor", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/5.JPG", alt: "Joyful Family Moment", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/6.JPG", alt: "Annam Reveal Moment", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/7.JPG", alt: "Family Celebration", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/8.JPG", alt: "Celebration Guests", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/9.JPG", alt: "Parents-to-be", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/10.JPG", alt: "Annam Reveal Highlight", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/11.JPG", alt: "Party Joy", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-annam/12.JPG", alt: "Outdoor Celebration", category: "Gender Reveals" },

  { src: "/images/photography/gender-reveal-manisha/1.jpg", alt: "Manisha Gender Reveal Setup", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/2.jpg", alt: "Manisha Family Photo", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/3.jpg", alt: "Manisha Party Atmosphere", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/4.jpg", alt: "Manisha Reveal Moment", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/5.jpg", alt: "Manisha Parents Celebration", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/6.jpg", alt: "Manisha Decor & Balloon", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/7.jpg", alt: "Family Excitement", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/8.jpg", alt: "Manisha Celebration Shot", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/9.jpg", alt: "Outdoor Family Portrait", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/10.jpg", alt: "Manisha Party Guests", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/11.jpg", alt: "Confetti Reveal Moment", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/12.jpg", alt: "Cherished Moment", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/13.jpg", alt: "Party Highlights", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/14.jpg", alt: "Family Smile", category: "Gender Reveals" },
  { src: "/images/photography/gender-reveal-manisha/15.jpg", alt: "Celebration Finale", category: "Gender Reveals" },

  // ── Landscapes (2..6.jpg) ──
  { src: "/images/photography/landscapes/2.jpg", alt: "Nature Vista & Forest Trail", category: "Landscapes" },
  { src: "/images/photography/landscapes/3.jpg", alt: "Scenic Horizon View", category: "Landscapes" },
  { src: "/images/photography/landscapes/4.jpg", alt: "Twilight Cityscape", category: "Landscapes" },
  { src: "/images/photography/landscapes/5.jpg", alt: "Golden Hour Landscape", category: "Landscapes" },
  { src: "/images/photography/landscapes/6.jpg", alt: "Mountain & Lake View", category: "Landscapes" },

  // ── Community Events (1..11.JPG) ──
  { src: "/images/photography/community/1.JPG", alt: "Windsor Tamil Community Gathering 1", category: "Events" },
  { src: "/images/photography/community/2.JPG", alt: "Windsor Tamil Community Celebration 2", category: "Events" },
  { src: "/images/photography/community/3.JPG", alt: "Cultural Event Performance 3", category: "Events" },
  { src: "/images/photography/community/4.JPG", alt: "Festival Stage Moments 4", category: "Events" },
  { src: "/images/photography/community/5.JPG", alt: "Community Event Audience 5", category: "Events" },
  { src: "/images/photography/community/6.JPG", alt: "Group Community Photo 6", category: "Events" },
  { src: "/images/photography/community/7.JPG", alt: "Cultural Performance 7", category: "Events" },
  { src: "/images/photography/community/8.JPG", alt: "Event Highlights 8", category: "Events" },
  { src: "/images/photography/community/9.JPG", alt: "Community Celebrations 9", category: "Events" },
  { src: "/images/photography/community/10.JPG", alt: "Festival Gathering 10", category: "Events" },
  { src: "/images/photography/community/11.JPG", alt: "Windsor Event Finale 11", category: "Events" },
];

const videos = [
  {
    src: "/videos/another-world.mp4",
    title: "Another World VR — Commercial Shoot Video",
  },
  {
    src: "/videos/patrick-wedding.mp4",
    title: "Patrick & Partner — Wedding Film",
  },
];

export default function Photography() {
  const [heroIdx, setHeroIdx] = useState(0);

  // Auto-slideshow hero background cycling every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero with Background Slideshow */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIdx}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={galleryImages[heroIdx].src}
                alt={galleryImages[heroIdx].alt}
                fill
                className="object-cover"
                priority
                quality={85}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/40 text-brand-primary rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider mb-8 shadow-lg">
              <Camera className="w-4 h-4" /> Zenn Photography &bull; Portfolio Slideshow
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
              Every Moment,<br className="hidden md:block" /> Perfected.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
              Cinematic photography and videography for portraits, celebrations, events, and commercial projects. Serving Windsor, Brantford, and the GTA.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
              Our Work
            </h2>
            <p className="text-zinc-400 text-center max-w-xl mx-auto mb-12">
              Browse through our complete portfolio of portraits, celebrations, landscapes, and community events ({galleryImages.length} photos).
            </p>
          </FadeIn>

          <PhotoGallery
            images={galleryImages}
            categories={["All", "Portraits", "Gender Reveals", "Landscapes", "Events"]}
            columns={3}
          />
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
              Cinematic Productions
            </h2>
            <p className="text-zinc-400 text-center max-w-xl mx-auto mb-16">
              From wedding films to creative shorts — we bring cinematic production to every story.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, idx) => (
              <FadeIn key={video.src} delay={idx * 0.15}>
                <VideoPlayer
                  src={video.src}
                  title={video.title}
                  aspectRatio="video"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(182,51,46,0.12),_transparent_60%)]" />
        <FadeIn className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Let&apos;s Capture Your Story.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
            Whether it&apos;s a family celebration, a portrait session, or a commercial shoot — we&apos;re ready to bring your vision to life.
          </p>
          <Link
            href="/enquiry"
            className="bg-brand-primary hover:bg-brand-primary/80 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(182,51,46,0.3)] hover:shadow-[0_0_60px_rgba(182,51,46,0.5)] inline-block"
          >
            Book a Session
          </Link>
          <div className="mt-8">
            <Link href="/" className="text-zinc-500 hover:text-brand-primary transition-colors text-sm font-medium inline-flex items-center">
              Back to Zenn Studios <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
