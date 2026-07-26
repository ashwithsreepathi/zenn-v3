"use client";

import Image from "next/image";

const clientLogos = [
  { name: "Montax", src: "/images/logos/montax.svg", width: 130, darkBg: false },
  { name: "MK Food Co", src: "/images/logos/mkfc.svg", width: 120, darkBg: false },
  { name: "Dragons Inn", src: "/images/logos/dragons-inn-2.png", width: 120, darkBg: true },
  { name: "BF Bins", src: "/images/logos/bfbins.png", width: 120, darkBg: false },
  { name: "Purelixr", src: "/images/logos/purelixr-2.svg", width: 120, darkBg: true },
  { name: "RV Properties", src: "/images/logos/rvp.svg", width: 130, darkBg: true },
  { name: "BC AWE", src: "/images/logos/bcawe.jpg", width: 90, darkBg: false },
  { name: "CCS", src: "/images/logos/ccs.svg", width: 100, darkBg: true },
  { name: "Another World", src: "/images/logos/anotherworld-1.svg", width: 130, darkBg: true },
];

export default function LogoMarquee() {
  // Duplicate array 3 times for continuous seamless scrolling
  const logoList = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-12 border-y border-zinc-900 bg-black overflow-hidden relative">
      {/* Subtle Section Label */}
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Trusted by Industry Leaders
        </span>
      </div>

      {/* Left/Right Gradient Fades */}
      <div className="absolute left-0 top-0 w-24 md:w-44 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 md:w-44 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden select-none">
        <div className="flex items-center gap-8 animate-marquee hover:[animation-play-state:paused] shrink-0">
          {logoList.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex-none h-16 min-w-[170px] px-6 py-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center shadow-lg group"
            >
              {/* Inner wrapper handling light/dark logo assets */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={40}
                  className="max-h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
