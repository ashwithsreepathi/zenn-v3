"use client";

import { useState } from "react";
import { MapPin, Navigation, ExternalLink, Layers } from "lucide-react";

interface GoogleMapProps {
  address?: string;
  zoom?: number;
  className?: string;
}

export default function GoogleMap({
  address = "125 Hunter Way, Brantford, ON N3T 0B1",
  zoom = 15,
  className = "w-full h-full min-h-[400px]",
}: GoogleMapProps) {
  const [isHovered, setIsHovered] = useState(false);
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=${zoom}&output=embed&iwloc=near`;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl overflow-hidden border border-zinc-800 bg-black group shadow-[0_0_50px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* ── Custom Red & Black Themed Google Map Iframe ── */}
      <iframe
        title="Zenn Studios Location"
        src={embedUrl}
        className="w-full h-full border-0 transition-all duration-700 filter grayscale invert contrast-125 brightness-75 drop-shadow-2xl"
        style={{
          filter:
            "invert(94%) hue-rotate(185deg) brightness(0.65) contrast(1.5) saturate(1.8)",
        }}
        loading="lazy"
        allowFullScreen
      />

      {/* ── Red Ambient Glow & Grid Lines Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 border border-brand-primary/20 rounded-3xl pointer-events-none group-hover:border-brand-primary/50 transition-colors duration-500" />

      {/* ── Floating Studio Red Pin Marker ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex flex-col items-center">
        {/* Pulsing Beacon Circle */}
        <div className="relative flex items-center justify-center">
          <span className="absolute w-12 h-12 rounded-full bg-brand-primary/40 animate-ping" />
          <span className="absolute w-8 h-8 rounded-full bg-brand-primary/60 animate-pulse" />
          <div className="relative w-10 h-10 rounded-full bg-black border-2 border-brand-primary flex items-center justify-center shadow-[0_0_20px_rgba(182,51,46,0.9)]">
            <MapPin className="w-5 h-5 text-brand-primary" />
          </div>
        </div>

        {/* Location Badge */}
        <div className="mt-3 bg-black/90 border border-brand-primary/40 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-2xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-[11px] font-mono font-bold text-white tracking-widest uppercase">
            Zenn Studios &bull; Brantford, ON
          </span>
        </div>
      </div>

      {/* ── Top Left Control Pill ── */}
      <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
        <div className="bg-black/90 border border-zinc-800 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-mono text-zinc-300 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Live Google Maps API
        </div>
      </div>

      {/* ── Bottom Right Action Button ── */}
      <div className="absolute bottom-4 right-4 z-30">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/80 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-[0_0_25px_rgba(182,51,46,0.4)] transition-all hover:scale-105"
        >
          <Navigation className="w-3.5 h-3.5" />
          Open Directions <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
