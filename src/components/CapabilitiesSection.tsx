"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Film, PenTool, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FadeIn from "./FadeIn";

const capabilities = [
  {
    icon: Code2,
    title: "Website & Business Software",
    desc: "High-performance web architecture and custom systems.",
    image: "/images/capabilities/software.png",
  },
  {
    icon: PenTool,
    title: "Branding & Design",
    desc: "Strategic visual identity spanning UI/UX to overarching brand guidelines.",
    image: "/images/capabilities/branding.png",
  },
  {
    icon: Film,
    title: "Photography & Videography",
    desc: "Cinematic commercial storytelling and high-fidelity production.",
    image: "/images/capabilities/photography.png",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "High-velocity content strategy driving engagement and growth.",
    image: "/images/capabilities/social.png",
  },
];

export default function CapabilitiesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
              Our Capabilities
            </h2>
            <p className="text-zinc-400 max-w-md">
              Our multidisciplinary approach handles the full lifecycle of a
              brand from logic to art.
            </p>
          </div>
          <Link
            href="/capabilities"
            className="hidden md:flex items-center text-brand-primary hover:text-white transition-colors font-semibold group mt-6 md:mt-0"
          >
            Explore All{" "}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Fluid Responsive Image Preview Panel (2:1 mobile, 3:1 tablet, 4:1 desktop) */}
        <div className="relative w-full aspect-[2/1] sm:aspect-[3/1] md:aspect-[4/1] rounded-2xl overflow-hidden mb-8 bg-zinc-900 border border-zinc-800 shadow-2xl">
          {/* Default gradient when nothing hovered */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 transition-opacity duration-700 ${
              hoveredIdx !== null ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 z-10 ${
              hoveredIdx !== null ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-zinc-600 font-mono text-sm tracking-widest uppercase">
              Hover a capability to preview
            </p>
          </div>

          {/* Capability images with crossfade */}
          <AnimatePresence mode="wait">
            {hoveredIdx !== null && (
              <motion.div
                key={hoveredIdx}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                <Image
                  src={capabilities[hoveredIdx].image}
                  alt={capabilities[hoveredIdx].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`glass-card p-10 rounded-2xl glow-hover h-full flex flex-col justify-between group cursor-pointer transition-all duration-500 ${
                  hoveredIdx === idx
                    ? "border-brand-primary/60 shadow-[0_0_30px_rgba(182,51,46,0.2)]"
                    : ""
                }`}
              >
                <div>
                  <item.icon className="w-10 h-10 text-brand-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href="/capabilities"
          className="md:hidden flex items-center justify-center text-brand-primary hover:text-white transition-colors font-semibold group mt-10"
        >
          Explore All{" "}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
